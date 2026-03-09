# GoComponents PR Preview Deployment - Setup Guide

## Overview

This document describes the PR preview deployment system for GoComponents. Every pull request automatically gets a dedicated preview URL.

## Architecture

```
┌──────────────────────────────────────────────────────────────────────────────┐
│                              GitHub                                           │
│  Developer creates/updates PR #991                                            │
│              │                                                                │
│              ▼                                                                │
│  ┌────────────────────────────────────────────────────────────────────────┐  │
│  │                    GitHub Actions Workflow                              │  │
│  │  1. npm ci (install dependencies)                                       │  │
│  │  2. npm run style_guide_publish (build Angular app)                     │  │
│  │  3. rsync → Deploy to /var/www/pr-previews/991/                        │  │
│  │  4. Comment preview URL on PR                                           │  │
│  └────────────────────────────────────────────────────────────────────────┘  │
└──────────────────────────────────────────────────────────────────────────────┘
                                    │
                                    │ SSH/rsync
                                    ▼
┌──────────────────────────────────────────────────────────────────────────────┐
│                         Preview Server (VM)                                   │
│                                                                               │
│  ┌─────────────────┐    ┌─────────────────────────────────────────────────┐  │
│  │     Nginx       │    │         File System                              │  │
│  │                 │    │                                                  │  │
│  │  991.domain.com │───▶│  /var/www/pr-previews/                          │  │
│  │       │         │    │      ├── 991/                                   │  │
│  │       ▼         │    │      │   ├── index.html                         │  │
│  │  /pr-previews/  │    │      │   ├── main.js                            │  │
│  │      /991/      │    │      │   └── styles.css                         │  │
│  │                 │    │      ├── 992/                                   │  │
│  │  Wildcard SSL   │    │      └── 993/                                   │  │
│  └─────────────────┘    └─────────────────────────────────────────────────┘  │
└──────────────────────────────────────────────────────────────────────────────┘
```

## URL Structure

| Pattern | Example URL |
|---------|-------------|
| Subdomain (recommended) | `https://991.goponents-preview-corp.tangoe.com/getting-started` |
| Path-based (alternative) | `https://goponents-preview-corp.tangoe.com/pr/991/getting-started` |

## IT Request Checklist

Send this to your IT team:

### 1. DNS Configuration

**Option A - Wildcard Subdomain (Recommended):**
```
Type: A Record (or CNAME)
Name: *.goponents-preview-corp
Value: [Preview Server IP]
TTL: 300
```

**Option B - Single Domain (Path-based):**
```
Type: A Record
Name: goponents-preview-corp
Value: [Preview Server IP]
TTL: 300
```

### 2. SSL Certificate

**Option A - Wildcard Certificate:**
- Request wildcard cert for: `*.goponents-preview-corp.tangoe.com`
- Provide cert files to be installed on server

**Option B - Let's Encrypt (Self-managed):**
- Requires DNS TXT record access for wildcard verification
- Or use HTTP challenge for single domain

### 3. Firewall Rules

| Direction | Port | Protocol | Source | Purpose |
|-----------|------|----------|--------|---------|
| Inbound | 443 | TCP | Any | HTTPS traffic |
| Inbound | 80 | TCP | Any | HTTP→HTTPS redirect |
| Inbound | 22 | TCP | GitHub Actions IPs | SSH deployment |

GitHub Actions IP ranges: https://api.github.com/meta (look for `actions` key)

## Server Setup

### Prerequisites

- Ubuntu 20.04+ or RHEL 8+ VM
- Ansible 2.9+ installed locally
- SSH access to the server

### Run Ansible Playbook

```bash
# From repository root
cd .deployment/ansible

# Test connection
ansible -i inventory/hosts.yml preview_servers -m ping

# Run setup playbook
ansible-playbook -i inventory/hosts.yml playbooks/setup-preview-server.yml

# With custom variables
ansible-playbook -i inventory/hosts.yml playbooks/setup-preview-server.yml \
  -e "nodejs_version=18" \
  -e "preview_domain=goponents-preview-corp.tangoe.com"
```

## GitHub Secrets Required

Add these secrets in GitHub repository settings:

| Secret Name | Description | Example |
|-------------|-------------|---------|
| `PREVIEW_SERVER_HOST` | Server hostname or IP | `10.0.0.100` |
| `PREVIEW_SERVER_USER` | SSH username | `deploy` |
| `PREVIEW_SERVER_SSH_KEY` | Private SSH key | `-----BEGIN OPENSSH PRIVATE KEY-----...` |

### Generate SSH Key Pair

```bash
# Generate new key pair
ssh-keygen -t ed25519 -C "github-actions-deploy" -f preview_deploy_key

# Add public key to server's authorized_keys
cat preview_deploy_key.pub >> ~/.ssh/authorized_keys

# Add private key content to GitHub secrets (PREVIEW_SERVER_SSH_KEY)
cat preview_deploy_key
```

## Nginx Routing Logic

The nginx configuration uses regex to extract PR number from subdomain:

```nginx
# Captures PR number into $pr_number variable
server_name ~^(?<pr_number>\d+)\.goponents-preview-corp\.tangoe\.com$;

# Routes to PR-specific directory
root /var/www/pr-previews/$pr_number;

# Angular SPA routing
location / {
    try_files $uri $uri/ /index.html;
}
```

### How it works:

1. Request comes in: `https://991.goponents-preview-corp.tangoe.com/getting-started`
2. Nginx regex matches and extracts: `pr_number = 991`
3. Root becomes: `/var/www/pr-previews/991`
4. Nginx serves: `/var/www/pr-previews/991/index.html`
5. Angular router handles `/getting-started` client-side

## Maintenance

### View Active Previews

```bash
ssh deploy@preview-server "ls -la /var/www/pr-previews/"
```

### Manual Cleanup

```bash
ssh deploy@preview-server "rm -rf /var/www/pr-previews/OLD_PR_NUMBER"
```

### Check Nginx Logs

```bash
# Access logs per PR
ssh deploy@preview-server "tail -f /var/log/nginx/pr-991-access.log"

# Error logs
ssh deploy@preview-server "tail -f /var/log/nginx/pr-preview-error.log"
```

### Automatic Cleanup

A cron job runs daily at 3 AM to remove previews older than 30 days:
```
0 3 * * * /opt/pr-preview-scripts/cleanup-old-prs.sh
```

## Troubleshooting

### Preview not accessible

1. Check if deployment succeeded in GitHub Actions
2. Verify files exist: `ls /var/www/pr-previews/PR_NUMBER/`
3. Check nginx config: `nginx -t`
4. Check nginx logs for errors

### SSL Certificate Issues

```bash
# Check certificate expiry
openssl x509 -in /etc/ssl/certs/goponents-preview.crt -noout -dates

# Test SSL connection
openssl s_client -connect 991.goponents-preview-corp.tangoe.com:443
```

### Angular Routes Return 404

Ensure nginx has `try_files $uri $uri/ /index.html;` in location block.

## Cost Considerations

- **Storage**: Each PR preview ~5-20MB (Angular build)
- **Bandwidth**: Minimal (internal use)
- **Compute**: Single VM can handle 100+ concurrent previews
