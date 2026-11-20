#!/usr/bin/env node
// Usage: node snapshot.mjs <baseUrl> <outDir>
import { readFileSync, writeFileSync, mkdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const [base, out] = process.argv.slice(2);
if (!base || !out) {
  console.error("usage: snapshot.mjs <baseUrl> <outDir>");
  process.exit(2);
}
const here = dirname(fileURLToPath(import.meta.url));
const routes = readFileSync(join(here, "routes.txt"), "utf8")
  .split("\n")
  .filter(Boolean)
  .map((l) => {
    const [cat, path] = l.split("\t");
    return { cat, path };
  });
mkdirSync(out, { recursive: true });

const ENT = {
  amp: "&",
  lt: "<",
  gt: ">",
  quot: '"',
  apos: "'",
  nbsp: " ",
  laquo: "«",
  raquo: "»",
};
const decode = (s) =>
  s
    .replace(/&#x([0-9a-f]+);/gi, (_, h) =>
      String.fromCodePoint(parseInt(h, 16))
    )
    .replace(/&#(\d+);/g, (_, d) => String.fromCodePoint(+d))
    .replace(/&([a-z]+);/gi, (m, n) => ENT[n.toLowerCase()] ?? m);
const BLOCK =
  "address|article|aside|blockquote|br|dd|details|div|dl|dt|fieldset|figcaption|figure|footer|form|h[1-6]|header|hr|li|main|nav|ol|p|pre|section|summary|table|tbody|td|tfoot|th|thead|tr|ul|button|a|label|option|select|textarea";

let bad = 0;
for (const { cat, path } of routes) {
  let status = 0,
    html = "";
  try {
    const r = await fetch(base + path, { redirect: "manual" });
    status = r.status;
    html = await r.text();
  } catch (e) {
    html = String(e);
  }
  if (status !== 200) {
    bad++;
    console.error(`KO ${status} ${path}`);
  }
  const title = decode(
    (html.match(/<title[^>]*>([\s\S]*?)<\/title>/i)?.[1] ?? "").trim()
  );
  const h1 = (html.match(/<h1[\s>]/gi) ?? []).length;
  const lang = html.match(/<html[^>]*\slang="([^"]*)"/i)?.[1] ?? "";
  const robots = [...html.matchAll(/<meta[^>]*name="robots"[^>]*>/gi)]
    .map((m) => m[0].match(/content="([^"]*)"/i)?.[1] ?? "")
    .join(" | ");
  const body = (html.match(/<body[\s\S]*<\/body>/i)?.[0] ?? html)
    .replace(/<script[\s\S]*?<\/script>/gi, "")
    .replace(/<style[\s\S]*?<\/style>/gi, "")
    .replace(/<noscript[\s\S]*?<\/noscript>/gi, "")
    .replace(/<!--[\s\S]*?-->/g, "")
    .replace(new RegExp(`</?(?:${BLOCK})\\b[^>]*>`, "gi"), "\n")
    .replace(/<[^>]+>/g, "");
  const text = decode(body)
    .split("\n")
    .map((l) => l.replace(/\s+/g, " ").trim())
    .filter(Boolean)
    .join("\n");
  const name =
    (path === "/" ? "_root" : path.slice(1).replace(/\//g, "__")) + ".txt";
  writeFileSync(
    join(out, name),
    `CATEGORY: ${cat}\nPATH: ${path}\nSTATUS: ${status}\nTITLE: ${title}\nH1: ${h1}\nLANG: ${lang}\nROBOTS: ${robots}\n---\n${text}\n`
  );
}
console.log(`${routes.length} routes, ${bad} non-200`);
process.exit(bad ? 1 : 0);
