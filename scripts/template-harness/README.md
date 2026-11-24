# Harnais de non-régression des templates

Outil de vérification des démos (`/<slug>`, `/en/<slug>`) : il compare le texte rendu de chaque route avant et après un changement, et contrôle les en-têtes `X-Robots-Tag`. Il ne dépend d'aucun paquet (Node 18+, `curl`).

| Fichier | Rôle |
|---|---|
| `routes.txt` | Routes à capturer, une par ligne : `catégorie<TAB>chemin`. Catégories : `demo`, `demo-en`, `marketing`, `internal`. |
| `snapshot.mjs` | Récupère chaque route et écrit un fichier texte par route : statut, `<title>`, nombre de `<h1>`, `lang`, balise `robots`, puis le texte visible, un bloc par ligne. Sort en erreur si une route ne répond pas 200. |
| `headers.sh` | Vérifie `X-Robots-Tag` : `noindex, follow` sur les démos FR et EN, rien sur `/templates`, `/en` et `/en/templates`. Sort en erreur au premier écart. |
| `../check-template-routes.mjs` | Garde-fou routes / registre (voir « Garde-fou » plus bas). `pnpm check:routes`. |

Règles : ne jamais construire dans le dépôt, ne jamais écrire un snapshot dans le dépôt, ne jamais tuer un processus qu'on n'a pas lancé.

## Procédure

Dans ce qui suit, `$REPO` est la racine du dépôt, `$WORK` un dossier de travail hors dépôt, `$PORT` un port libre (vérifiez-le avec `lsof -i :$PORT`).

### 1. Copie isolée et build

```bash
D="$WORK/app"
mkdir -p "$D"
rsync -a \
  --exclude .git --exclude .next --exclude node_modules --exclude '.env*' \
  --exclude .ruv-swarm --exclude sakhli \
  "$REPO"/ "$D"/
ln -s "$REPO/node_modules" "$D/node_modules"
cd "$D" && pnpm build
```

Pour une baseline, remplacez le `rsync` par l'export d'un commit de référence : `git -C "$REPO" archive <sha> | tar -x -C "$D"` (puis le même lien `node_modules`).

### 2. Serveur

```bash
cd "$D" && pnpm start -p "$PORT" &
echo $!   # notez le PID : c'est lui qu'on arrête à la fin
```

### 3. Snapshot

Depuis le dépôt, vers un dossier hors dépôt :

```bash
cd "$REPO"
node scripts/template-harness/snapshot.mjs "http://localhost:$PORT" "$WORK/snap"
# équivalent : pnpm harness:snapshot "http://localhost:$PORT" "$WORK/snap"
```

Un fichier par route (`dentiste__soins.txt`, `en__dentiste.txt`…), nommé d'après le chemin.

### 4. Diff contre la baseline

La baseline se prend de la même façon (copie isolée, build, serveur, snapshot) sur un commit de référence, vers un autre dossier :

```bash
node scripts/template-harness/snapshot.mjs "http://localhost:$PORT_BASE" "$WORK/snap-base"
diff -r "$WORK/snap-base" "$WORK/snap"
```

Pour une factorisation pure, la diff est vide. Sinon, chaque ligne doit s'expliquer par un changement voulu (texte, `<title>`, `H1`, `ROBOTS`). Si la baseline précède l'ajout de routes (par exemple `/en/…`), ces fichiers n'existent que d'un côté : comparez les fichiers communs, ou prenez la baseline avec le `routes.txt` du commit de référence.

### 5. En-têtes

```bash
bash scripts/template-harness/headers.sh "http://localhost:$PORT"
# équivalent : pnpm harness:headers "http://localhost:$PORT"
```

Toutes les lignes doivent commencer par `OK`.

### 6. Arrêt

Arrêtez le serveur que vous avez lancé, par son PID (`kill <pid>`), puis supprimez la copie isolée si elle ne sert plus.

## Garde-fou routes / registre (`pnpm check:routes`)

`X-Robots-Tag: noindex, follow` n'est plus posé par un middleware mais par `headers()` de `next.config.ts`, à partir des slugs du registre (`demoNoindexHeaders` dans `src/lib/public-template-routes.ts`, un motif `/:slug(a|b|c)/:path*` pour le français, un autre sous `/en`). Un dossier de route de démo absent du registre serait donc servi **sans** `noindex`. `scripts/check-template-routes.mjs` (Node >= 22.6, sans dépendance, sans build, rapide) compare les dossiers de `src/app/(demos)/` et `src/app/(demos-en)/en/` aux slugs du registre (`routedTemplates` + `nonTemplateDemos`) et sort en erreur (code 1, message en clair) pour :

- un dossier de route sans entrée au registre (français ou anglais) ;
- un template routé sans dossier FR ou sans dossier EN ;
- une entrée de `nonTemplateDemos` sans dossier de route (`(demos)` ou `(projects)`).

Il lit `src/content/templates/registry.ts` par import direct (type stripping de Node ; sur Node 22.6 à 22.17 il se relance seul avec `--experimental-strip-types`), sans réimplémenter le registre. À lancer avant chaque commit qui ajoute ou renomme un dossier de démo ; en cas d'ajout d'un template, le faire passer avant `bash scripts/template-harness/headers.sh`.

Le garde-fou ne remplace pas `headers.sh`, qui contrôle l'en-tête réellement servi par un build.

## Faire évoluer `routes.txt`

- Un nouveau template ajoute ses routes FR (`demo`) et EN (`demo-en`) : une ligne par page, y compris les pages de détail.
- Les chemins sont ceux servis par Next (`/en/<slug>/<page>`), sans barre finale.
- `headers.sh` liste en dur quelques routes représentatives ; ajoutez-y le nouveau slug (FR et EN) quand un template est créé.
