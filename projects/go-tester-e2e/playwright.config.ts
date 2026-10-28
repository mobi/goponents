import { defineConfig, devices } from '@playwright/test';
import { resolve } from 'node:path';

export default defineConfig({
  testDir: './src',
  testMatch: '**/*.e2e-spec.ts',
  outputDir: '../../test-results/go-tester-e2e',
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: 1,
  reporter: 'list',
  use: {
    baseURL: 'http://127.0.0.1:4317',
    trace: 'retain-on-failure'
  },
  projects: [{
    name: 'chromium',
    use: { ...devices['Desktop Chrome'] }
  }],
  webServer: {
    command: 'npm run tester -- --host=127.0.0.1 --port=4317',
    cwd: resolve(__dirname, '../..'),
    url: 'http://127.0.0.1:4317',
    reuseExistingServer: false,
    timeout: 120000
  }
});