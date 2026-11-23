param([string]$CheckoutPath = (Join-Path $PSScriptRoot '../../github-pages'))
$ErrorActionPreference = 'Stop'
$sourceDirectory = (Resolve-Path -LiteralPath (Join-Path $PSScriptRoot '../dist')).Path
$targetDirectory = (Resolve-Path -LiteralPath $CheckoutPath).Path
if (-not (Test-Path -LiteralPath (Join-Path $targetDirectory '.git'))) {
    throw 'Clone oba-abdel/oba-abdel.github.io into the destination before publishing.'
}
$remoteUrl = git -C $targetDirectory remote get-url origin
if ($LASTEXITCODE -ne 0 -or $remoteUrl -ne 'https://github.com/oba-abdel/oba-abdel.github.io.git') {
    throw 'The destination must be the dedicated GitHub Pages checkout.'
}
Copy-Item -Path (Join-Path $sourceDirectory '*') -Destination $targetDirectory -Recurse -Force
Set-Content -LiteralPath (Join-Path $targetDirectory '.nojekyll') -Value '' -NoNewline
git -C $targetDirectory add --all
if ($LASTEXITCODE -ne 0) { throw 'Git staging failed.' }
git -C $targetDirectory diff --cached --quiet
if ($LASTEXITCODE -eq 1) {
    git -C $targetDirectory commit -m 'Publish current portfolio and CV'
    if ($LASTEXITCODE -ne 0) { throw 'Git commit failed.' }
} elseif ($LASTEXITCODE -ne 0) {
    throw 'Could not inspect staged changes.'
}
git -C $targetDirectory push origin HEAD:main
if ($LASTEXITCODE -ne 0) { throw 'GitHub Pages source push failed.' }
