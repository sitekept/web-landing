#!/usr/bin/env bash
# Usage: headers.sh <baseUrl>
base="${1:?baseUrl}"; fail=0
check() { # path expected(yes|no)
  local h; h=$(curl -s -D - -o /dev/null "$base$1" | tr -d '\r' | grep -i '^x-robots-tag:' || true)
  if [ "$2" = yes ]; then
    if [ "$h" = "$(printf 'x-robots-tag: noindex, follow')" ] || echo "$h" | grep -qiE '^x-robots-tag: noindex, follow$'; then echo "OK  $1 -> $h"; else echo "KO  $1 expected noindex, follow, got: '${h}'"; fail=1; fi
  else
    if [ -z "$h" ]; then echo "OK  $1 -> (no X-Robots-Tag)"; else echo "KO  $1 expected none, got: $h"; fail=1; fi
  fi
}
check /dentiste yes; check /dentiste/soins yes; check /pattiserie yes; check /avocate yes
check /en/dentiste yes; check /en/dentiste/soins yes
check /electricien yes; check /electricien/prestations yes
check /en/electricien yes; check /en/electricien/prestations yes
check /en no
check /templates no; check /en/templates no
exit $fail
