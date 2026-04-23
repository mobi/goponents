$ErrorActionPreference = 'Stop'

$root = 'projects/go-style-guide/src/app'
$files = Get-ChildItem -Path $root -Recurse -Include *.html

$changed = 0
$blocks = 0

foreach ($file in $files) {
    $text = [System.IO.File]::ReadAllText($file.FullName)
    $original = $text

    # Matches <code ...>\s*</code> where attributes contain [highlight]="X".
    $pattern = '(?s)<code\b([^>]*?)>\s*</code>'
    $text = [regex]::Replace($text, $pattern, {
        param($m)
        $attrs = $m.Groups[1].Value
        if ($attrs -notmatch '\[highlight\]') { return $m.Value }

        $highlightMatch = [regex]::Match($attrs, '\[highlight\]="([^"]+)"')
        if (-not $highlightMatch.Success) { return $m.Value }
        $content = $highlightMatch.Groups[1].Value

        $langMatch = [regex]::Match($attrs, "\[languages\]=""\['([a-z]+)'\]""")
        $language = if ($langMatch.Success) { $langMatch.Groups[1].Value } else { 'html' }

        $classMatch = [regex]::Match($attrs, 'class="([^"]*)"')
        $cssClass = if ($classMatch.Success) { $classMatch.Groups[1].Value } else { '' }

        $out = "<app-code-block [content]=""$content"" language=""$language"""
        if ($cssClass) { $out += " codeClass=""$cssClass""" }
        $out += '></app-code-block>'
        return $out
    })

    if ($text -ne $original) {
        [System.IO.File]::WriteAllText($file.FullName, $text)
        $changed++
        $diffCount = ([regex]::Matches($original, '<code\b[^>]*\[highlight\]')).Count
        $blocks += $diffCount
        Write-Host "updated $($file.FullName) ($diffCount blocks)"
    }
}

Write-Host ""
Write-Host "Files changed: $changed"
Write-Host "Blocks migrated: $blocks"
