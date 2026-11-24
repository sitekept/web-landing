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
check /osteopathe yes; check /osteopathe/consultations yes
check /en/osteopathe yes; check /en/osteopathe/consultations yes
check /reparation-mobile yes; check /reparation-mobile/faq yes
check /en/reparation-mobile yes; check /en/reparation-mobile/faq yes
check /createur-culinaire yes; check /createur-culinaire/creations yes
check /en/createur-culinaire yes; check /en/createur-culinaire/creations yes
check /coffee-shop yes; check /coffee-shop/carte yes
check /en/coffee-shop yes; check /en/coffee-shop/carte yes
check /spa-massage yes; check /spa-massage/soins yes
check /en/spa-massage yes; check /en/spa-massage/soins yes
check /agence-immobiliere yes; check /agence-immobiliere/biens/appartement-vue-lac yes
check /en/agence-immobiliere yes; check /en/agence-immobiliere/biens/appartement-vue-lac yes
check /photographe yes; check /photographe/portfolio yes
check /en/photographe yes; check /en/photographe/portfolio yes
check /plombier-chauffagiste yes; check /plombier-chauffagiste/depannages yes
check /en/plombier-chauffagiste yes; check /en/plombier-chauffagiste/depannages yes
check /expert-comptable yes; check /expert-comptable/honoraires yes
check /en/expert-comptable yes; check /en/expert-comptable/honoraires yes
check /garage-auto yes; check /garage-auto/prestations yes
check /en/garage-auto yes; check /en/garage-auto/prestations yes
check /e-commerce yes; check /e-commerce/produit/bougie-ambre yes; check /e-commerce/crm/stocks yes
check /en/e-commerce yes; check /en/e-commerce/produit/bougie-ambre yes; check /en/e-commerce/crm/stocks yes
check /menage-nettoyage yes; check /menage-nettoyage/formules yes
check /en/menage-nettoyage yes; check /en/menage-nettoyage/formules yes
check /cabinet-avocat yes; check /cabinet-avocat/expertises yes
check /en/cabinet-avocat yes; check /en/cabinet-avocat/expertises yes
check /architecte-interieur yes; check /architecte-interieur/projets yes
check /en/architecte-interieur yes; check /en/architecte-interieur/projets yes
check /restaurant-bistrot yes; check /restaurant-bistrot/menu yes
check /en/restaurant-bistrot yes; check /en/restaurant-bistrot/menu yes
check /salon-coiffure yes; check /salon-coiffure/prestations yes
check /en/salon-coiffure yes; check /en/salon-coiffure/prestations yes
check /avocate yes; check /avocate/expertises yes
check /en/avocate yes; check /en/avocate/expertises yes
check /boulangerie yes
check /en/boulangerie yes
check /fleuriste yes
check /en/fleuriste yes
check /ordinateur yes
check /en/ordinateur yes
check /patisserie yes
check /en/patisserie yes
check /en no
check /templates no; check /en/templates no
exit $fail
