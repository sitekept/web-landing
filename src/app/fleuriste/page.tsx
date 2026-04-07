import {
  ArrowRight,
  Calendar,
  Flower,
  Mail,
  MapPin,
  Phone,
  Sparkles,
  Star,
} from "lucide-react";
import Link from "next/link";

import { ScrollReveal } from "@/components/scroll-reveal";
import { Button } from "@/components/ui/button";

const floralStories = [
  {
    eyebrow: "Mariages",
    title: "Des fleurs pensées comme une mise en scène sensible.",
    description:
      "Bouquet, cérémonie, dîner, détails de table et silhouettes florales: chaque ensemble est composé comme un récit visuel cohérent plutôt que comme une simple sélection de produits.",
    image:
      "https://images.unsplash.com/photo-1519378058457-4c29a0a2efac?auto=format&fit=crop&w=1400&q=80",
  },
  {
    eyebrow: "Réceptions privées",
    title: "Une esthétique plus intime, plus texturée, plus vivante.",
    description:
      "Nous jouons les couleurs, les volumes et les respirations pour créer des tables, des entrées et des décors qui élèvent tout de suite la perception d’un lieu.",
    image:
      "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=1400&q=80",
  },
  {
    eyebrow: "Marques & lieux",
    title: "Un fleurissement de marque qui soutient vraiment l’image.",
    description:
      "Studios, hôtels, boutiques et lancements de collection: les compositions servent l’univers visuel, la photo et l’expérience sur place avec un vrai sens du rythme.",
    image:
      "https://images.unsplash.com/photo-1468327768560-75b778cbb551?auto=format&fit=crop&w=1400&q=80",
  },
] as const;

const studioNotes = [
  "Palette pensée autour de votre lieu et de votre lumière.",
  "Sélection saisonnière pour un rendu plus juste et plus vivant.",
  "Installation sur site avec regard direction artistique.",
] as const;

const gallery = [
  "https://images.unsplash.com/photo-1487070183336-b863922373d4?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1520763185298-1b434c919102?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1468327768560-75b778cbb551?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1519378058457-4c29a0a2efac?auto=format&fit=crop&w=900&q=80",
] as const;

const testimonials = [
  {
    name: "Claire & Hugo",
    role: "Mariage au château",
    text: "Tout semblait naturel, élégant, parfaitement à sa place. On avait l’impression que le lieu avait toujours dû ressembler à ça.",
  },
  {
    name: "Maison Orphée",
    role: "Lancement de marque",
    text: "Le studio a créé une ambiance immédiatement premium. Les compositions tenaient autant du décor que du langage visuel.",
  },
] as const;

export default function Fleuriste() {
  return (
    <div className="min-h-screen bg-[#f4efe8] text-[#314038]">
      <nav className="sticky top-0 z-50 border-b border-[#ddd3c7] bg-[#f4efe8]/90 backdrop-blur">
        <div className="mx-auto grid max-w-7xl grid-cols-[1fr_auto] items-center gap-6 px-4 py-4 sm:px-6 lg:grid-cols-[1fr_auto_1fr] lg:px-8">
          <div className="flex items-center gap-3">
            <Flower className="h-5 w-5 text-[#6f8672]" />
            <div>
              <p className="font-serif text-2xl font-semibold text-[#314038]">
                Fleurs d&apos;Émeraude
              </p>
              <p className="text-xs uppercase tracking-[0.3em] text-[#8f7561]">
                Atelier floral
              </p>
            </div>
          </div>

          <div className="hidden items-center justify-center gap-8 lg:flex">
            <a href="#accueil" className="text-sm hover:text-[#8f7561]">
              Édito
            </a>
            <a href="#projets" className="text-sm hover:text-[#8f7561]">
              Projets
            </a>
            <a href="#atelier" className="text-sm hover:text-[#8f7561]">
              Atelier
            </a>
            <a href="#contact" className="text-sm hover:text-[#8f7561]">
              Contact
            </a>
          </div>

          <div className="justify-self-end">
            <Link href="#contact">
              <Button className="bg-[#314038] text-white hover:bg-[#243029]">
                Demander un devis
              </Button>
            </Link>
          </div>
        </div>
      </nav>

      <section id="accueil" className="border-b border-[#ddd3c7]">
        <div className="mx-auto max-w-7xl px-4 pb-14 pt-12 sm:px-6 lg:px-8 lg:pb-20 lg:pt-16">
          <ScrollReveal distance={18} className="mx-auto max-w-5xl text-center">
            <div className="inline-flex items-center gap-2 whitespace-nowrap rounded-full border border-[#d8cdc0] bg-white/70 px-3 py-1.5 text-xs text-[#8f7561] sm:text-sm">
              <Sparkles className="h-4 w-4" />
              Studio floral mariages, réceptions et marques
            </div>
            <h1 className="mx-auto mt-8 max-w-4xl font-serif text-5xl font-semibold leading-none text-[#314038] sm:text-6xl lg:text-8xl">
              Une template qui se lit comme un
              <span className="block text-[#b67a84]">portfolio éditorial</span>
              et non comme une boutique locale.
            </h1>
            <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-[#57665d] sm:text-xl">
              L’objectif ici est de vendre une direction artistique, une sensibilité
              et une capacité à sublimer un événement. La structure assume la
              narration, l’image et la respiration.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link href="#projets">
                <Button className="bg-[#314038] px-5 text-sm text-white hover:bg-[#243029]">
                  Explorer les projets
                </Button>
              </Link>
              <Link href="#contact">
                <Button
                  variant="outline"
                  className="border-[#cbb9a5] bg-white px-5 text-sm text-[#314038] hover:bg-[#f8f3ec]"
                >
                  Réserver un rendez-vous
                </Button>
              </Link>
            </div>
          </ScrollReveal>

          <ScrollReveal
            delay={90}
            distance={18}
            className="mt-12 grid gap-4 lg:grid-cols-[0.8fr_1.15fr_0.8fr]"
          >
            <div className="grid gap-4">
              <div className="rounded-[30px] border border-[#ddd3c7] bg-white p-6 shadow-[0_18px_50px_rgba(63,53,43,0.05)]">
                <p className="text-sm uppercase tracking-[0.22em] text-[#8f7561]">
                  Vision
                </p>
                <p className="mt-4 font-serif text-3xl leading-tight text-[#314038]">
                  Des fleurs pensées pour le regard, le lieu et la mémoire visuelle.
                </p>
              </div>
              <div
                className="min-h-[260px] rounded-[30px] bg-cover bg-center"
                style={{
                  backgroundImage:
                    "url('https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=1200&q=80')",
                }}
              />
            </div>

            <div
              className="min-h-[640px] rounded-[36px] bg-cover bg-center shadow-[0_30px_90px_rgba(63,53,43,0.12)]"
              style={{
                backgroundImage:
                  "linear-gradient(180deg, rgba(49,64,56,0.06), rgba(49,64,56,0.2)), url('https://images.unsplash.com/photo-1487070183336-b863922373d4?auto=format&fit=crop&w=1600&q=80')",
              }}
            />

            <div className="grid gap-4">
              <div
                className="min-h-[240px] rounded-[30px] bg-cover bg-center"
                style={{
                  backgroundImage:
                    "url('https://images.unsplash.com/photo-1468327768560-75b778cbb551?auto=format&fit=crop&w=1200&q=80')",
                }}
              />
              <div className="rounded-[30px] bg-[#314038] p-6 text-white shadow-[0_18px_50px_rgba(63,53,43,0.12)]">
                <p className="text-sm uppercase tracking-[0.22em] text-[#dbc9b8]">
                  Positionnement
                </p>
                <p className="mt-4 text-base leading-8 text-white/82">
                  Cette page vend du sur-mesure haut de gamme. Aucun ton “commerce
                  de quartier”, aucun bloc utilitaire en vitrine: tout est pensé
                  pour évoquer un atelier créatif et premium.
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section id="projets" className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal distance={18} className="max-w-3xl">
            <p className="text-sm uppercase tracking-[0.24em] text-[#8f7561]">
              Projets & univers
            </p>
            <h2 className="mt-3 font-serif text-4xl font-semibold text-[#314038] sm:text-5xl lg:text-6xl">
              Des bandes éditoriales qui racontent une approche plus qu’un catalogue.
            </h2>
          </ScrollReveal>

          <div className="mt-14 space-y-10">
            {floralStories.map((story, index) => (
              <ScrollReveal
                key={story.title}
                delay={index * 80}
                distance={18}
                className={`grid gap-6 overflow-hidden rounded-[36px] border border-[#e3d9cd] bg-[#f8f3ec] p-5 lg:grid-cols-[1.05fr_0.95fr] lg:p-7 ${
                  index % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""
                }`}
              >
                <div
                  className="min-h-[380px] rounded-[30px] bg-cover bg-center"
                  style={{ backgroundImage: `url('${story.image}')` }}
                />
                <div className="flex flex-col justify-center p-2 sm:p-6">
                  <p className="text-sm uppercase tracking-[0.24em] text-[#b67a84]">
                    {story.eyebrow}
                  </p>
                  <h3 className="mt-4 font-serif text-4xl font-semibold leading-tight text-[#314038]">
                    {story.title}
                  </h3>
                  <p className="mt-5 max-w-xl text-base leading-8 text-[#57665d]">
                    {story.description}
                  </p>
                  <Link
                    href="#contact"
                    className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-[#314038]"
                  >
                    Échanger sur ce type de projet
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section id="atelier" className="border-y border-[#ddd3c7] bg-[#efe6dc] py-20">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
          <ScrollReveal distance={18}>
            <p className="text-sm uppercase tracking-[0.24em] text-[#8f7561]">
              Atelier
            </p>
            <h2 className="mt-3 font-serif text-4xl font-semibold text-[#314038] sm:text-5xl">
              Une section pensée comme une note de studio, pas comme une liste de services.
            </h2>
            <p className="mt-6 max-w-md text-base leading-8 text-[#57665d]">
              Là où `boulangerie` pousse l’efficacité, `fleuriste` assume la
              direction artistique: plus d’espace, plus de récit, plus de mise
              en scène, moins de blocs “utilitaires”.
            </p>
          </ScrollReveal>

          <div className="grid gap-4">
            {studioNotes.map((note, index) => (
              <ScrollReveal
                key={note}
                delay={index * 90}
                distance={18}
                className="rounded-[30px] border border-white/60 bg-white/80 p-7 shadow-[0_18px_50px_rgba(63,53,43,0.05)]"
              >
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#314038] text-sm font-semibold text-white">
                    0{index + 1}
                  </div>
                  <p className="pt-1 text-base leading-8 text-[#4f5f56]">{note}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal distance={18} className="max-w-3xl">
            <p className="text-sm uppercase tracking-[0.24em] text-[#8f7561]">
              Galerie
            </p>
            <h2 className="mt-3 font-serif text-4xl font-semibold text-[#314038] sm:text-5xl">
              Un rythme visuel plus libre, plus proche d’un moodboard de studio.
            </h2>
          </ScrollReveal>

          <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-12">
            {gallery.map((image, index) => (
              <ScrollReveal
                key={image}
                delay={(index % 3) * 70}
                distance={18}
                className={`overflow-hidden rounded-[28px] ${
                  index === 0 || index === 4
                    ? "lg:col-span-7"
                    : index === 1 || index === 3
                      ? "lg:col-span-5"
                      : "lg:col-span-4"
                } ${index === 0 || index === 2 ? "lg:row-span-2" : ""}`}
              >
                <div
                  className={`bg-cover bg-center transition-transform duration-500 hover:scale-[1.03] ${
                    index === 0 || index === 2 ? "h-[420px]" : "h-[260px]"
                  }`}
                  style={{ backgroundImage: `url('${image}')` }}
                />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#314038] py-20 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal distance={18} className="mx-auto max-w-4xl text-center">
            <p className="text-sm uppercase tracking-[0.24em] text-[#dbc9b8]">
              Témoignages
            </p>
            <h2 className="mt-3 font-serif text-4xl font-semibold sm:text-5xl">
              Une preuve sociale qui prolonge l’univers, pas un simple bloc d’avis.
            </h2>
          </ScrollReveal>

          <div className="mt-12 grid gap-5 md:grid-cols-2">
            {testimonials.map((item, index) => (
              <ScrollReveal
                key={item.name}
                delay={index * 80}
                distance={18}
                className="rounded-[32px] border border-white/10 bg-white/8 p-8 backdrop-blur"
              >
                <div className="flex gap-1 text-[#efc4ca]">
                  {Array.from({ length: 5 }).map((_, starIndex) => (
                    <Star key={starIndex} className="h-4 w-4 fill-current" />
                  ))}
                </div>
                <p className="mt-6 text-xl leading-9 text-white/84">
                  &quot;{item.text}&quot;
                </p>
                <div className="mt-6">
                  <p className="font-semibold">{item.name}</p>
                  <p className="text-sm text-white/64">{item.role}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="bg-[#f4efe8] py-20">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal
            distance={18}
            className="rounded-[38px] border border-[#ddd3c7] bg-white p-8 shadow-[0_22px_60px_rgba(63,53,43,0.06)] sm:p-10"
          >
            <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
              <div>
                <p className="text-sm uppercase tracking-[0.24em] text-[#8f7561]">
                  Contact studio
                </p>
                <h2 className="mt-3 font-serif text-4xl font-semibold text-[#314038] sm:text-5xl">
                  Réserver une conversation créative.
                </h2>
                <div className="mt-8 space-y-5 text-sm leading-7 text-[#57665d]">
                  <div className="flex items-start gap-3">
                    <MapPin className="mt-1 h-4 w-4 text-[#b67a84]" />
                    <span>45 Avenue des Jardins, 69003 Lyon</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Phone className="mt-1 h-4 w-4 text-[#b67a84]" />
                    <span>04 78 95 12 34</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Mail className="mt-1 h-4 w-4 text-[#b67a84]" />
                    <span>contact@fleurs-emeraude.fr</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Calendar className="mt-1 h-4 w-4 text-[#b67a84]" />
                    <span>Rendez-vous conseil sous 24h ouvrées</span>
                  </div>
                </div>
              </div>

              <div className="rounded-[30px] bg-[#e7d6c5] p-7">
                <p className="text-sm uppercase tracking-[0.24em] text-[#8f7561]">
                  Ce que vend ce template
                </p>
                <p className="mt-4 text-base leading-8 text-[#3f5047]">
                  Un atelier floral haut de gamme, des projets sur mesure, une
                  lecture éditoriale, des images mises en scène et un rapport plus
                  sensible au client. C’est volontairement à l’opposé du rythme
                  commerçant de `boulangerie`.
                </p>
                <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                  <Button size="lg" className="bg-[#314038] text-white hover:bg-[#243029]">
                    Demander un devis
                  </Button>
                  <Button
                    variant="outline"
                    size="lg"
                    className="border-[#314038] bg-transparent text-[#314038] hover:bg-white/60"
                  >
                    Planifier un appel
                  </Button>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <footer className="border-t border-[#ddd3c7] bg-white py-12">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 md:grid-cols-3 lg:px-8">
          <div>
            <div className="flex items-center gap-3">
              <Flower className="h-5 w-5 text-[#6f8672]" />
              <span className="font-serif text-2xl font-semibold text-[#314038]">
                Fleurs d&apos;Émeraude
              </span>
            </div>
            <p className="mt-4 text-sm leading-7 text-[#57665d]">
              Atelier floral éditorial pour mariages, réceptions privées et
              projets de marque.
            </p>
          </div>
          <div>
            <p className="font-semibold text-[#314038]">Navigation</p>
            <div className="mt-4 space-y-2 text-sm text-[#57665d]">
              <a href="#projets" className="block hover:text-[#8f7561]">
                Projets
              </a>
              <a href="#atelier" className="block hover:text-[#8f7561]">
                Atelier
              </a>
              <a href="#contact" className="block hover:text-[#8f7561]">
                Contact
              </a>
            </div>
          </div>
          <div>
            <p className="font-semibold text-[#314038]">Narration</p>
            <p className="mt-4 text-sm leading-7 text-[#57665d]">
              Une structure magazine et portfolio, plus contemplative et plus
              haut de gamme que les templates centrées utilité.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
