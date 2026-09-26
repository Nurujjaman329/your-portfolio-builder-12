#!/usr/bin/env bash
# Render resume.html -> PDF with headless Chrome, then copy it to the two
# locations the site serves it from.
#
# Usage:  bash resume-print/build.sh
#
# Chrome is used (not a PDF library) because it is what produced the original
# file, and it embeds font subsets + real link annotations that ATS parsers and
# humans both read correctly.

set -euo pipefail

here="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
root="$(dirname "$here")"
src="$here/resume.html"
out="$here/MD_Nurujjaman_Resume.pdf"

chrome=""
for c in \
  "/c/Program Files/Google/Chrome/Application/chrome.exe" \
  "/c/Program Files (x86)/Google/Chrome/Application/chrome.exe" \
  "/c/Program Files/Microsoft/Edge/Application/msedge.exe" \
  "/c/Program Files (x86)/Microsoft/Edge/Application/msedge.exe" \
  "$(command -v google-chrome || true)" \
  "$(command -v chromium || true)"
do
  if [ -n "$c" ] && [ -x "$c" ]; then chrome="$c"; break; fi
done

if [ -z "$chrome" ]; then
  echo "error: no Chrome/Edge binary found" >&2
  exit 1
fi

# Windows Chrome needs a Windows-style file:// URL for the input path.
if command -v cygpath >/dev/null 2>&1; then
  src_url="file:///$(cygpath -w "$src" | tr '\\' '/')"
  out_arg="$(cygpath -w "$out")"
else
  src_url="file://$src"
  out_arg="$out"
fi

"$chrome" \
  --headless \
  --disable-gpu \
  --no-pdf-header-footer \
  --print-to-pdf="$out_arg" \
  "$src_url"

cp "$out" "$root/MD_Nurujjaman_Resume.pdf"
cp "$out" "$root/public/resume.pdf"

echo "built: $out"
echo "  -> $root/MD_Nurujjaman_Resume.pdf"
echo "  -> $root/public/resume.pdf"
