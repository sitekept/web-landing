#!/usr/bin/env node
/**
 * Garde-fou routes de démo / registre des templates.
 *
 * L'en-tête `X-Robots-Tag: noindex, follow` des démos est posé par `headers()`
 * de `next.config.ts`, à partir des slugs du registre
 * (`src/content/templates/registry.ts`). Un dossier de route de démo absent du
 * registre serait donc servi SANS `noindex`. Ce script compare les dossiers :
 *
 *   - `src/app/(demos)/`        (démos françaises, `/<slug>`)
 *   - `src/app/(demos-en)/en/`  (démos anglaises, `/en/<slug>`)
 *
 * aux slugs du registre (`routedTemplates` + `nonTemplateDemos`, soit
 * `DEMO_SLUGS`) et sort en erreur (code 1) pour :
 *   1. un dossier de route sans entrée au registre (il ne serait pas `noindex`) ;
 *   2. un template routé sans dossier FR ou sans dossier EN ;
 *   3. une entrée de `nonTemplateDemos` sans dossier de route.
 *
 * Le registre est lu par import du fichier TypeScript lui-même (type stripping
 * de Node >= 22.6 : le registre ne contient que des types importés, aucun code
 * d'alias `@/`). Sur Node 22.6 à 22.17, le script se relance seul avec
 * `--experimental-strip-types`. Aucune dépendance. Usage : `pnpm check:routes`.
 */
import { spawnSync } from "node:child_process";
import { existsSync, readdirSync } from "node:fs";
import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const registryPath = path.join(root, "src/content/templates/registry.ts");
const frDir = path.join(root, "src/app/(demos)");
const enDir = path.join(root, "src/app/(demos-en)/en");
const projectsDir = path.join(root, "src/app/(projects)");

async function loadRegistry() {
  // Le registre n'a pas de « type » de module : Node le réanalyse en ES module
  // et le dit sur stderr. L'avertissement est sans objet ici.
  process.removeAllListeners("warning");
  try {
    return await import(pathToFileURL(registryPath).href);
  } catch (error) {
    const flagged = process.execArgv.includes("--experimental-strip-types");
    if (error?.code === "ERR_UNKNOWN_FILE_EXTENSION" && !flagged) {
      const run = spawnSync(
        process.execPath,
        ["--experimental-strip-types", "--no-warnings", ...process.argv.slice(1)],
        { stdio: "inherit" }
      );
      process.exit(run.status ?? 1);
    }
    console.error(
      `KO  impossible de lire le registre (${registryPath}) : ${error?.message ?? error}\n` +
        "    Node >= 22.6 est requis (type stripping)."
    );
    process.exit(1);
  }
}

/** Dossiers de route d'un dossier (hors dossiers privés `_x`). */
function routeFolders(dir) {
  if (!existsSync(dir)) return [];
  return readdirSync(dir, { withFileTypes: true })
    .filter((entry) => entry.isDirectory() && !entry.name.startsWith("_"))
    .map((entry) => entry.name);
}

const { routedTemplates, nonTemplateDemos } = await loadRegistry();
const routedSlugs = routedTemplates.map((entry) => entry.slug);
const demoSlugs = new Set([...routedSlugs, ...nonTemplateDemos.map((d) => d.slug)]);

const errors = [];
const rel = (p) => path.relative(root, p);

for (const [label, dir, urlPrefix] of [
  ["FR", frDir, "/"],
  ["EN", enDir, "/en/"],
]) {
  for (const name of routeFolders(dir)) {
    if (!demoSlugs.has(name)) {
      errors.push(
        `Dossier de route sans entrée au registre (${label}) : ${rel(dir)}/${name}\n` +
          `    ${urlPrefix}${name} serait servi SANS « X-Robots-Tag: noindex, follow ».\n` +
          `    Ajoutez « ${name} » au registre (src/content/templates/registry.ts), ou retirez le dossier.`
      );
    }
  }
}

const frFolders = new Set(routeFolders(frDir));
const enFolders = new Set(routeFolders(enDir));
for (const slug of routedSlugs) {
  if (!frFolders.has(slug)) {
    errors.push(`Template routé sans dossier FR : attendu ${rel(frDir)}/${slug}`);
  }
  if (!enFolders.has(slug)) {
    errors.push(`Template routé sans dossier EN : attendu ${rel(enDir)}/${slug}`);
  }
}

const projectFolders = new Set(routeFolders(projectsDir));
for (const { slug, kind } of nonTemplateDemos) {
  if (!frFolders.has(slug) && !projectFolders.has(slug)) {
    errors.push(
      `Entrée « ${slug} » (${kind}) de nonTemplateDemos sans dossier de route : ` +
        `attendu ${rel(frDir)}/${slug} ou ${rel(projectsDir)}/${slug}`
    );
  }
}

if (errors.length > 0) {
  console.error(`KO  ${errors.length} écart(s) entre les routes de démo et le registre :\n`);
  for (const message of errors) console.error(`  - ${message}\n`);
  process.exit(1);
}

console.log(
  `OK  ${routedSlugs.length} templates routés (FR + EN) et ${nonTemplateDemos.length} démos hors template : ` +
    "chaque dossier de route de démo a son entrée au registre."
);
