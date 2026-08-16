"use client";

import Image from "next/image";
import { useEffect, useMemo, useState } from "react";
import styles from "./je.module.css";

function cx(...classNames: Array<string | false>): string {
  return classNames
    .filter((className): className is string => Boolean(className))
    .map((className) => styles[className])
    .join(" ");
}

type Tone = "bleu" | "naturel" | "profond" | "audacieux" | "neutre";

type Logo = {
  id: number;
  name: string;
  file: string;
  tone: Tone;
  palette: string;
};

const logos: Logo[] = [
  {
    id: 1,
    name: "Couture parisienne",
    file: "logo-01-couture-parisienne.jpg",
    tone: "bleu",
    palette: "Bleu ciel · Ivoire",
  },
  {
    id: 2,
    name: "Minimal contemporain",
    file: "logo-02-minimal-contemporain.jpg",
    tone: "bleu",
    palette: "Bleu ciel · Ivoire",
  },
  {
    id: 3,
    name: "Signature romantique",
    file: "logo-03-signature-romantique.jpg",
    tone: "bleu",
    palette: "Bleu ciel · Beige",
  },
  {
    id: 4,
    name: "Médaillon botanique",
    file: "logo-04-medaillon-botanique.jpg",
    tone: "bleu",
    palette: "Bleu poudré · Ivoire",
  },
  {
    id: 5,
    name: "Art déco Riviera",
    file: "logo-05-art-deco-riviera.jpg",
    tone: "bleu",
    palette: "Bleu ciel · Sable",
  },
  {
    id: 6,
    name: "Emblème organique",
    file: "logo-06-embleme-organique.jpg",
    tone: "bleu",
    palette: "Bleu ciel · Beige",
  },
  {
    id: 7,
    name: "Héritage château",
    file: "logo-07-heritage-chateau.jpg",
    tone: "bleu",
    palette: "Bleu encre · Ivoire",
  },
  {
    id: 8,
    name: "Typographique mode",
    file: "logo-08-typographique-mode.jpg",
    tone: "bleu",
    palette: "Bleu grisé · Ivoire",
  },
  {
    id: 9,
    name: "Aquarelle couture",
    file: "logo-09-aquarelle-couture.jpg",
    tone: "bleu",
    palette: "Aquarelle bleue · Sable",
  },
  {
    id: 10,
    name: "Porcelaine française",
    file: "logo-10-porcelaine-francaise.jpg",
    tone: "bleu",
    palette: "Bleu porcelaine · Crème",
  },
  {
    id: 11,
    name: "Ruban monoline",
    file: "logo-11-ruban-monoline.jpg",
    tone: "bleu",
    palette: "Bleu ciel · Ivoire",
  },
  {
    id: 12,
    name: "Méditerranée graphique",
    file: "logo-12-mediterranee-graphique.jpg",
    tone: "bleu",
    palette: "Azur · Sable",
  },
  {
    id: 13,
    name: "Belle Époque",
    file: "logo-13-belle-epoque.jpg",
    tone: "bleu",
    palette: "Bleu fané · Beige",
  },
  {
    id: 14,
    name: "Modernisme suisse",
    file: "logo-14-modernisme-suisse.jpg",
    tone: "bleu",
    palette: "Bleu franc · Sable",
  },
  {
    id: 15,
    name: "Céleste minimal",
    file: "logo-15-celeste-minimal.jpg",
    tone: "bleu",
    palette: "Bleu céleste · Ivoire",
  },
  {
    id: 16,
    name: "Arches contemporaines",
    file: "logo-16-arches-contemporaines.jpg",
    tone: "bleu",
    palette: "Bleu ciel · Taupe",
  },
  {
    id: 17,
    name: "Sauge & champagne",
    file: "logo-17-sauge-champagne.jpg",
    tone: "naturel",
    palette: "Sauge · Champagne",
  },
  {
    id: 18,
    name: "Terracotta solaire",
    file: "logo-18-terracotta-rose-poudre.jpg",
    tone: "naturel",
    palette: "Terracotta · Rose poudré",
  },
  {
    id: 19,
    name: "Bordeaux éditorial",
    file: "logo-19-bordeaux-vieux-rose.jpg",
    tone: "profond",
    palette: "Bordeaux · Vieux rose",
  },
  {
    id: 20,
    name: "Vert forêt géométrique",
    file: "logo-20-vert-foret-ivoire.jpg",
    tone: "profond",
    palette: "Vert forêt · Ivoire",
  },
  {
    id: 21,
    name: "Lavande nocturne",
    file: "logo-21-lavande-nacree.jpg",
    tone: "profond",
    palette: "Lavande · Prune",
  },
  {
    id: 22,
    name: "Jaune beurre moderne",
    file: "logo-22-jaune-beurre-bleu-poudre.jpg",
    tone: "audacieux",
    palette: "Jaune beurre · Bleu poudre",
  },
  {
    id: 23,
    name: "Corail & cobalt",
    file: "logo-23-corail-cobalt.jpg",
    tone: "audacieux",
    palette: "Cobalt · Corail",
  },
  {
    id: 24,
    name: "Quiet luxury",
    file: "logo-24-espresso-taupe.jpg",
    tone: "neutre",
    palette: "Espresso · Taupe",
  },
  {
    id: 25,
    name: "Monochrome couture",
    file: "logo-25-monochrome-couture.jpg",
    tone: "neutre",
    palette: "Noir encre · Ivoire",
  },
  {
    id: 26,
    name: "Paon & abricot",
    file: "logo-26-paon-abricot.jpg",
    tone: "audacieux",
    palette: "Bleu paon · Abricot",
  },
  {
    id: 27,
    name: "Marine & rouille",
    file: "logo-27-marine-rouille.jpg",
    tone: "profond",
    palette: "Marine · Rouille",
  },
  {
    id: 28,
    name: "Pistache & lilas",
    file: "logo-28-pistache-lilas.jpg",
    tone: "audacieux",
    palette: "Pistache · Lilas",
  },
  {
    id: 29,
    name: "Rouge pop",
    file: "logo-29-rouge-pop.jpg",
    tone: "audacieux",
    palette: "Vermillon · Rose",
  },
  {
    id: 30,
    name: "Bleu glacier",
    file: "logo-30-bleu-glacier.jpg",
    tone: "bleu",
    palette: "Bleu glacier · Argent",
  },
  {
    id: 31,
    name: "Vitrail aubergine",
    file: "logo-31-aubergine-moutarde.jpg",
    tone: "profond",
    palette: "Aubergine · Moutarde",
  },
  {
    id: 32,
    name: "Bleu profond inversé",
    file: "logo-32-blanc-bleu-profond.jpg",
    tone: "bleu",
    palette: "Bleu profond · Blanc",
  },
  {
    id: 33,
    name: "Ligature éditoriale",
    file: "logo-33-ligature-editoriale.jpg",
    tone: "bleu",
    palette: "Outremer · Parchemin · Oxblood",
  },
  {
    id: 34,
    name: "Anémone linéaire",
    file: "logo-34-anemone-lineaire.jpg",
    tone: "naturel",
    palette: "Céladon · Abricot · Aubergine",
  },
  {
    id: 35,
    name: "Bauhaus joyeux",
    file: "logo-35-bauhaus-joyeux.jpg",
    tone: "audacieux",
    palette: "Cobalt · Vermillon · Jaune beurre",
  },
  {
    id: 36,
    name: "Céleste nocturne",
    file: "logo-36-celeste-nocturne.jpg",
    tone: "profond",
    palette: "Bleu nuit · Argent · Lavande",
  },
  {
    id: 37,
    name: "Monoline espresso",
    file: "logo-37-monoline-espresso.jpg",
    tone: "neutre",
    palette: "Espresso · Sauge · Cuivre",
  },
  {
    id: 38,
    name: "Gravure prune",
    file: "logo-38-gravure-prune.jpg",
    tone: "profond",
    palette: "Prune · Pistache · Parchemin",
  },
  {
    id: 39,
    name: "Wordmark mode",
    file: "logo-39-wordmark-mode.jpg",
    tone: "neutre",
    palette: "Noir encre · Bleu vif · Tangerine",
  },
  {
    id: 40,
    name: "Riviera 70",
    file: "logo-40-riviera-70.jpg",
    tone: "audacieux",
    palette: "Pétrole · Orange brûlé · Pistache",
  },
  {
    id: 41,
    name: "Encre minimale",
    file: "logo-41-encre-minimale.jpg",
    tone: "neutre",
    palette: "Noir carbone · Ivoire · Vermillon",
  },
  {
    id: 42,
    name: "Collage contemporain",
    file: "logo-42-collage-contemporain.jpg",
    tone: "audacieux",
    palette: "Lilas · Sarcelle · Corail",
  },
  {
    id: 43,
    name: "Enluminure moderne",
    file: "logo-43-enluminure-moderne.jpg",
    tone: "bleu",
    palette: "Lapis · Safran · Bordeaux",
  },
  {
    id: 44,
    name: "Brutaliste graphique",
    file: "logo-44-brutaliste.jpg",
    tone: "audacieux",
    palette: "Noir · Chartreuse · Rose poudre",
  },
  {
    id: 45,
    name: "Geste lapis",
    file: "logo-45-geste-lapis.jpg",
    tone: "bleu",
    palette: "Lapis · Ivoire · Cuivre",
  },
  {
    id: 46,
    name: "Esperluette sculpturale",
    file: "logo-46-ampersand-sculptural.jpg",
    tone: "profond",
    palette: "Rouge cerise · Blush · Chocolat",
  },
  {
    id: 47,
    name: "Ruban géométrique",
    file: "logo-47-ruban-geometrique.jpg",
    tone: "bleu",
    palette: "Bleu poudre · Cacao · Ivoire",
  },
  {
    id: 48,
    name: "Méditerranée modulaire",
    file: "logo-48-mediterranee-modulaire.jpg",
    tone: "audacieux",
    palette: "Écume · Cobalt · Terracotta",
  },
  {
    id: 49,
    name: "Sceau artisan",
    file: "logo-49-sceau-artisan.jpg",
    tone: "naturel",
    palette: "Brique · Avoine · Charbon",
  },
  {
    id: 50,
    name: "Douceur contemporaine",
    file: "logo-50-douceur-contemporaine.jpg",
    tone: "naturel",
    palette: "Jaune beurre · Lilas · Marine",
  },
  {
    id: 51,
    name: "Souffle bleu",
    file: "logo-51-souffle-bleu.jpg",
    tone: "bleu",
    palette: "Bleu brume · Ivoire · Beige",
  },
  {
    id: 52,
    name: "Ligne partagée",
    file: "logo-52-ligne-partagee.jpg",
    tone: "neutre",
    palette: "Bleu poudre · Taupe · Blanc craie",
  },
  {
    id: 53,
    name: "Serif poudrée",
    file: "logo-53-serif-poudree.jpg",
    tone: "naturel",
    palette: "Lilas fumé · Crème · Sauge grisée",
  },
  {
    id: 54,
    name: "Italique rose",
    file: "logo-54-italique-rose.jpg",
    tone: "naturel",
    palette: "Rose poudré · Taupe · Pierre",
  },
  {
    id: 55,
    name: "Monogramme voile",
    file: "logo-55-monogramme-voile.jpg",
    tone: "bleu",
    palette: "Bleu poudre · Sable · Ardoise",
  },
  {
    id: 56,
    name: "Signature brume",
    file: "logo-56-signature-brume.jpg",
    tone: "bleu",
    palette: "Bleu gris · Ivoire · Biscuit",
  },
  {
    id: 57,
    name: "Serif canard",
    file: "logo-57-serif-canard.jpg",
    tone: "bleu",
    palette: "Bleu œuf de canard · Ivoire · Champignon",
  },
  {
    id: 58,
    name: "Espacement perle",
    file: "logo-58-espacement-perle.jpg",
    tone: "neutre",
    palette: "Sable pâle · Bleu gris · Blush",
  },
  {
    id: 59,
    name: "Carré poudré",
    file: "logo-59-carre-poudre.jpg",
    tone: "bleu",
    palette: "Bleu poudre · Crème · Charbon doux",
  },
  {
    id: 60,
    name: "Ligature discrète",
    file: "logo-60-ligature-discrete.jpg",
    tone: "bleu",
    palette: "Bleu français · Ivoire · Grège",
  },
  {
    id: 61,
    name: "Sans humaniste",
    file: "logo-61-sans-humaniste.jpg",
    tone: "bleu",
    palette: "Bleu poussière · Biscuit · Marine",
  },
  {
    id: 62,
    name: "Verticale ivoire",
    file: "logo-62-verticale-ivoire.jpg",
    tone: "naturel",
    palette: "Ivoire · Bleu poudre · Pierre",
  },
  {
    id: 63,
    name: "Petites capitales",
    file: "logo-63-petites-capitales.jpg",
    tone: "bleu",
    palette: "Pervenche · Ivoire · Lin",
  },
  {
    id: 64,
    name: "Serif organique",
    file: "logo-64-serif-organique.jpg",
    tone: "naturel",
    palette: "Argile · Bleu nuage · Mauve",
  },
  {
    id: 65,
    name: "Monogramme filaire",
    file: "logo-65-monogramme-filaire.jpg",
    tone: "bleu",
    palette: "Bleu poudre · Taupe · Ivoire",
  },
  {
    id: 66,
    name: "Décalage doux",
    file: "logo-66-decalage-doux.jpg",
    tone: "bleu",
    palette: "Bleu bleuet · Sable · Ivoire",
  },
  {
    id: 67,
    name: "Esperluette sable",
    file: "logo-67-esperluette-sable.jpg",
    tone: "naturel",
    palette: "Bleu gris · Sable · Blush",
  },
  {
    id: 68,
    name: "Condensée brume",
    file: "logo-68-condensee-brume.jpg",
    tone: "bleu",
    palette: "Bleu fumé · Beige · Craie",
  },
  {
    id: 69,
    name: "Hairline acier",
    file: "logo-69-hairline-acier.jpg",
    tone: "bleu",
    palette: "Bleu acier · Ivoire · Amande",
  },
  {
    id: 70,
    name: "Slab poudrée",
    file: "logo-70-slab-poudree.jpg",
    tone: "naturel",
    palette: "Bleu gris · Avoine · Rose poudré",
  },
  {
    id: 71,
    name: "Courbes ouvertes",
    file: "logo-71-courbes-ouvertes.jpg",
    tone: "bleu",
    palette: "Bleu poudre · Taupe · Ivoire",
  },
  {
    id: 72,
    name: "Duo italique",
    file: "logo-72-duo-italique.jpg",
    tone: "naturel",
    palette: "Mauve poussière · Bleu gris · Beige",
  },
  {
    id: 73,
    name: "Écho typographique",
    file: "logo-73-echo-typographique.jpg",
    tone: "neutre",
    palette: "Bleu gris · Sable · Ivoire",
  },
  {
    id: 74,
    name: "Contour EJ",
    file: "logo-74-contour-ej.jpg",
    tone: "bleu",
    palette: "Bleu pâle · Taupe · Crème",
  },
];

const logoIds = new Set(logos.map((logo) => logo.id));

function readSavedFavorites(): number[] {
  const saved = window.localStorage.getItem("ej-logo-favorites");

  if (!saved) {
    return [];
  }

  try {
    const parsed: unknown = JSON.parse(saved);

    if (!Array.isArray(parsed)) {
      window.localStorage.removeItem("ej-logo-favorites");
      return [];
    }

    return [
      ...new Set(
        parsed.filter(
          (id): id is number =>
            typeof id === "number" && Number.isInteger(id) && logoIds.has(id)
        )
      ),
    ];
  } catch {
    window.localStorage.removeItem("ej-logo-favorites");
    return [];
  }
}

const filters: { id: Tone | "all" | "favorites"; label: string }[] = [
  { id: "all", label: "Tous les logos" },
  { id: "bleu", label: "Bleus & ivoire" },
  { id: "naturel", label: "Naturels" },
  { id: "profond", label: "Tons profonds" },
  { id: "audacieux", label: "Audacieux" },
  { id: "neutre", label: "Neutres" },
  { id: "favorites", label: "Mes favoris" },
];

export function WeddingLogoGallery() {
  const [filter, setFilter] = useState<(typeof filters)[number]["id"]>("all");
  const [activeId, setActiveId] = useState<number | null>(null);
  const [favorites, setFavorites] = useState<number[]>([]);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    setFavorites(readSavedFavorites());

    const hashId = Number(window.location.hash.replace("#logo-", ""));
    if (logos.some((logo) => logo.id === hashId)) setActiveId(hashId);
  }, []);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setActiveId(null);
      if (activeId === null) return;
      if (event.key === "ArrowRight") moveActive(1);
      if (event.key === "ArrowLeft") moveActive(-1);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  });

  const visibleLogos = useMemo(() => {
    if (filter === "all") return logos;
    if (filter === "favorites")
      return logos.filter((logo) => favorites.includes(logo.id));
    return logos.filter((logo) => logo.tone === filter);
  }, [filter, favorites]);

  const activeLogo = logos.find((logo) => logo.id === activeId) ?? null;

  function toggleFavorite(id: number) {
    setFavorites((current) => {
      const next = current.includes(id)
        ? current.filter((item) => item !== id)
        : [...current, id];
      window.localStorage.setItem("ej-logo-favorites", JSON.stringify(next));
      return next;
    });
  }

  function openLogo(id: number) {
    setActiveId(id);
    window.history.replaceState(
      null,
      "",
      `#logo-${String(id).padStart(2, "0")}`
    );
  }

  function closeLogo() {
    setActiveId(null);
    window.history.replaceState(null, "", window.location.pathname);
  }

  function moveActive(delta: number) {
    if (activeId === null) return;
    const currentIndex = logos.findIndex((logo) => logo.id === activeId);
    const nextIndex = (currentIndex + delta + logos.length) % logos.length;
    openLogo(logos[nextIndex].id);
  }

  async function copyLogoLink() {
    if (!activeLogo) return;
    const url = `${window.location.origin}${window.location.pathname}#logo-${String(activeLogo.id).padStart(2, "0")}`;
    await navigator.clipboard.writeText(url);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1800);
  }

  return (
    <main className={cx("page")}>
      <header className={cx("site-header")}>
        <a className={cx("brand")} href="#top" aria-label="Retour en haut">
          <span className={cx("brand-mark")}>EJ</span>
          <span className={cx("brand-name")}>
            Emmannuelle <i>&</i> Joseph
          </span>
        </a>
        <div className={cx("header-meta")}>
          <span>Le carnet du mariage</span>
          <span className={cx("meta-dot")} aria-hidden="true" />
          <span>{logos.length} propositions</span>
        </div>
      </header>

      <section className={cx("hero")} id="top">
        <p className={cx("eyebrow")}>Direction artistique · Chapitre 01</p>
        <h1>
          Notre collection
          <br />
          de <em>logos</em>
        </h1>
        <div className={cx("hero-bottom")}>
          <p className={cx("intro")}>
            Un espace pour regarder, comparer et choisir l’identité qui
            accompagnera notre mariage.
          </p>
          <p className={cx("hint")}>
            <span>↓</span> Cliquez sur un logo pour l’agrandir
          </p>
        </div>
      </section>

      <section className={cx("collection")} aria-labelledby="collection-title">
        <div className={cx("collection-heading")}>
          <div>
            <p className={cx("section-index")}>01 / Sélection</p>
            <h2 id="collection-title">Les propositions</h2>
          </div>
          <p className={cx("result-count")}>
            {visibleLogos.length.toString().padStart(2, "0")} affichées
          </p>
        </div>

        <div
          className={cx("filter-bar")}
          role="group"
          aria-label="Filtrer les logos"
        >
          {filters.map((item) => (
            <button
              className={cx("filter", filter === item.id && "active")}
              key={item.id}
              onClick={() => setFilter(item.id)}
              type="button"
            >
              {item.label}
              {item.id === "favorites" && favorites.length > 0 && (
                <span>{favorites.length}</span>
              )}
            </button>
          ))}
        </div>

        {visibleLogos.length > 0 ? (
          <div className={cx("logo-grid")}>
            {visibleLogos.map((logo) => (
              <article
                className={cx("logo-card")}
                key={logo.id}
                id={`card-${logo.id}`}
              >
                <button
                  className={cx("image-button")}
                  onClick={() => openLogo(logo.id)}
                  type="button"
                  aria-label={`Agrandir ${logo.name}`}
                >
                  <Image
                    src={`/je/logos/${logo.file}`}
                    alt={`Proposition ${logo.id} — ${logo.name}`}
                    fill
                    sizes="(max-width: 420px) 100vw, (max-width: 760px) 50vw, (max-width: 1050px) 33vw, 25vw"
                  />
                  <span className={cx("zoom-label")}>Voir en grand ↗</span>
                </button>
                <div className={cx("card-copy")}>
                  <div className={cx("card-title-row")}>
                    <span className={cx("card-number")}>
                      {String(logo.id).padStart(2, "0")}
                    </span>
                    <button
                      className={cx(
                        "favorite",
                        favorites.includes(logo.id) && "active"
                      )}
                      onClick={() => toggleFavorite(logo.id)}
                      type="button"
                      aria-label={
                        favorites.includes(logo.id)
                          ? `Retirer ${logo.name} des favoris`
                          : `Ajouter ${logo.name} aux favoris`
                      }
                      aria-pressed={favorites.includes(logo.id)}
                    >
                      {favorites.includes(logo.id) ? "♥" : "♡"}
                    </button>
                  </div>
                  <h3>{logo.name}</h3>
                  <p>{logo.palette}</p>
                </div>
              </article>
            ))}
          </div>
        ) : (
          <div className={cx("empty-state")}>
            <span>♡</span>
            <h3>Votre sélection est encore vide</h3>
            <p>Ajoutez des favoris depuis la galerie pour les retrouver ici.</p>
            <button type="button" onClick={() => setFilter("all")}>
              Voir tous les logos
            </button>
          </div>
        )}
      </section>

      <footer className={cx("footer")}>
        <span className={cx("footer-mark")}>
          E <i>&</i> J
        </span>
        <p>
          Un mariage en préparation,
          <br />
          une identité à imaginer.
        </p>
        <a href="#top">Retour en haut ↑</a>
      </footer>

      {activeLogo && (
        <div
          className={cx("modal")}
          role="dialog"
          aria-modal="true"
          aria-label={`Logo ${activeLogo.id} — ${activeLogo.name}`}
        >
          <button
            className={cx("modal-backdrop")}
            onClick={closeLogo}
            aria-label="Fermer"
            type="button"
          />
          <div className={cx("modal-panel")}>
            <div className={cx("modal-topbar")}>
              <div>
                <span>
                  Proposition {String(activeLogo.id).padStart(2, "0")}
                </span>
                <strong>{activeLogo.name}</strong>
              </div>
              <button
                className={cx("close-button")}
                onClick={closeLogo}
                type="button"
                aria-label="Fermer la fenêtre"
              >
                ×
              </button>
            </div>
            <div className={cx("modal-image-wrap")}>
              <Image
                src={`/je/logos/${activeLogo.file}`}
                alt={`Logo ${activeLogo.name} en grand`}
                fill
                sizes="94vw"
              />
            </div>
            <div className={cx("modal-actions")}>
              <button type="button" onClick={() => moveActive(-1)}>
                ← Précédent
              </button>
              <div className={cx("modal-center-actions")}>
                <button
                  className={cx(
                    favorites.includes(activeLogo.id) && "selected"
                  )}
                  type="button"
                  onClick={() => toggleFavorite(activeLogo.id)}
                >
                  {favorites.includes(activeLogo.id)
                    ? "♥ Favori"
                    : "♡ Ajouter aux favoris"}
                </button>
                <button type="button" onClick={copyLogoLink}>
                  {copied ? "Lien copié ✓" : "Partager ce logo"}
                </button>
              </div>
              <button type="button" onClick={() => moveActive(1)}>
                Suivant →
              </button>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
