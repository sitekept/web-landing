import {
  ArrowRight,
  Calendar,
  ChefHat,
  Clock,
  Mail,
  MapPin,
  Phone,
  Sparkles,
  Star,
} from "lucide-react";
import Link from "next/link";

import { ScrollReveal } from "@/components/scroll-reveal";
import { Button } from "@/components/ui/button";

const collections = [
  {
    title: "Entremets signature",
    note: "Des pièces pensées comme des collections saisonnières.",
    description:
      "Montages précis, textures nettes, glaçages lumineux et équilibre des saveurs pour une lecture plus couture que simplement gourmande.",
    image:
      "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=1400&q=80",
  },
  {
    title: "Pâtisseries individuelles",
    note: "Des formats raffinés pour boutique, réception ou gifting.",
    description:
      "Éclairs, tartelettes, choux et créations courtes avec finitions propres, silhouettes lisibles et goût de maison.",
    image:
      "https://images.unsplash.com/photo-1519864600265-abb23847ef2c?auto=format&fit=crop&w=1400&q=80",
  },
] as const;

const signaturePieces = [
  {
    name: "Opéra Royal",
    detail: "Café grand cru, ganache noire, biscuit Joconde.",
    price: "45€",
  },
  {
    name: "Saint-Honoré Atelier",
    detail: "Vanille, caramel blond, pâte feuilletée croustillante.",
    price: "42€",
  },
  {
    name: "Tarte Yuzu",
    detail: "Agrumes tendus, meringue satinée, pâte fine.",
    price: "7€",
  },
] as const;

const occasions = [
  "Mariages et pièces de réception",
  "Anniversaires et commandes sur mesure",
  "Maisons de luxe, gifting et événements privés",
] as const;

const testimonials = [
  {
    name: "Élise Bernard",
    role: "Commande mariage",
    text: "Le gâteau n’était pas seulement excellent, il donnait la tonalité entière de la réception. Une présence presque statutaire.",
  },
  {
    name: "Maison Valmont",
    role: "Événement privé",
    text: "Une pâtisserie qui comprend le langage du premium: précision, retenue, élégance et impact immédiat sur table.",
  },
] as const;

const gallery = [
  "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1464306076886-debca5e8a6b0?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1586985289906-406988974504?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1571115764595-644a1f56a55c?auto=format&fit=crop&w=1200&q=80",
] as const;

export default function Pattiserie() {
  return (
    <div className="min-h-screen bg-[#120d0a] text-[#f6eee6]">
      <nav className="sticky top-0 z-50 border-b border-white/10 bg-[#120d0a]/92 backdrop-blur">
        <div className="mx-auto grid max-w-7xl grid-cols-[1fr_auto] items-center gap-6 px-4 py-4 sm:px-6 lg:grid-cols-[1fr_auto_1fr] lg:px-8">
          <div className="flex items-center gap-3">
            <ChefHat className="h-5 w-5 text-[#d9b17d]" />
            <div>
              <p className="font-serif text-2xl font-semibold text-[#f6eee6]">
                Pâtisserie Douceur
              </p>
              <p className="text-xs uppercase tracking-[0.3em] text-[#b89469]">
                Maison de création
              </p>
            </div>
          </div>

          <div className="hidden items-center justify-center gap-8 lg:flex">
            <a href="#accueil" className="text-sm text-white/72 hover:text-[#d9b17d]">
              Maison
            </a>
            <a href="#collections" className="text-sm text-white/72 hover:text-[#d9b17d]">
              Collections
            </a>
            <a href="#signature" className="text-sm text-white/72 hover:text-[#d9b17d]">
              Signature
            </a>
            <a href="#contact" className="text-sm text-white/72 hover:text-[#d9b17d]">
              Conciergerie
            </a>
          </div>

          <div className="justify-self-end">
            <Link href="#contact">
              <Button className="bg-[#d9b17d] text-[#1a120d] hover:bg-[#e4bf8f]">
                Commander
              </Button>
            </Link>
          </div>
        </div>
      </nav>

      <section id="accueil" className="border-b border-white/10">
        <div className="mx-auto max-w-7xl px-4 pb-18 pt-10 sm:px-6 lg:px-8 lg:pb-24 lg:pt-14">
          <ScrollReveal distance={18} className="mx-auto max-w-5xl text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-[#6f5738] bg-[#1b140f] px-4 py-2 text-sm text-[#d9b17d]">
              <Sparkles className="h-4 w-4" />
              Artisan pâtissier depuis 1985
            </div>
            <h1 className="mx-auto mt-8 max-w-4xl font-serif text-5xl font-semibold leading-none text-[#f8f1ea] sm:text-6xl lg:text-8xl">
              Une template pensée comme
              <span className="block text-[#d9b17d]">une maison premium</span>
              et non comme un studio ni un commerce local.
            </h1>
            <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-white/68 sm:text-xl">
              Ici, la structure vend la rareté, la signature et la précision.
              On avance par collections, pièces emblématiques, occasions
              d’exception et service de commande sur mesure.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={90} distance={18} className="mt-14">
            <div className="overflow-hidden rounded-[40px] border border-white/10 bg-[#18110d] p-4 shadow-[0_30px_100px_rgba(0,0,0,0.3)]">
              <div className="grid gap-4 lg:grid-cols-[1.1fr_0.9fr]">
                <div
                  className="min-h-[520px] rounded-[32px] bg-cover bg-center"
                  style={{
                    backgroundImage:
                      "linear-gradient(180deg, rgba(18,13,10,0.04), rgba(18,13,10,0.28)), url('https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=1800&q=80')",
                  }}
                />
                <div className="flex flex-col justify-between rounded-[32px] border border-white/8 bg-[#120d0a] p-8">
                  <div>
                    <p className="text-sm uppercase tracking-[0.24em] text-[#b89469]">
                      Maison d&apos;exception
                    </p>
                    <h2 className="mt-5 font-serif text-4xl font-semibold text-[#f8f1ea] sm:text-5xl">
                      Des créations qui tiennent leur place sur une table d’exception.
                    </h2>
                    <p className="mt-6 text-base leading-8 text-white/68">
                      Cette page assume le langage du luxe: moins de blocs,
                      plus de verticalité, plus d’espace, plus de statut.
                    </p>
                  </div>

                  <div className="mt-10 grid gap-4 sm:grid-cols-3">
                    {[
                      ["1985", "naissance de la maison"],
                      ["15+", "distinctions reçues"],
                      ["48h", "pour commande sur mesure"],
                    ].map(([value, label]) => (
                      <div
                        key={label}
                        className="rounded-[24px] border border-white/10 bg-white/[0.03] p-5"
                      >
                        <p className="text-2xl font-semibold text-[#d9b17d]">{value}</p>
                        <p className="mt-1 text-sm text-white/58">{label}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section id="collections" className="bg-[#f4ede5] py-20 text-[#241913]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal distance={18} className="max-w-3xl">
            <p className="text-sm uppercase tracking-[0.24em] text-[#9c7650]">
              Collections
            </p>
            <h2 className="mt-3 font-serif text-4xl font-semibold sm:text-5xl lg:text-6xl">
              Une lecture par univers de création, pas par simple liste de produits.
            </h2>
          </ScrollReveal>

          <div className="mt-14 space-y-10">
            {collections.map((collection, index) => (
              <ScrollReveal
                key={collection.title}
                delay={index * 90}
                distance={18}
                className={`grid gap-6 rounded-[38px] border border-[#e3d6c6] bg-white p-5 shadow-[0_18px_50px_rgba(42,26,16,0.06)] lg:grid-cols-[0.95fr_1.05fr] lg:p-7 ${
                  index % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""
                }`}
              >
                <div
                  className="min-h-[380px] rounded-[30px] bg-cover bg-center"
                  style={{ backgroundImage: `url('${collection.image}')` }}
                />
                <div className="flex flex-col justify-center p-2 sm:p-6">
                  <p className="text-sm uppercase tracking-[0.24em] text-[#9c7650]">
                    {collection.note}
                  </p>
                  <h3 className="mt-4 font-serif text-4xl font-semibold">
                    {collection.title}
                  </h3>
                  <p className="mt-5 max-w-xl text-base leading-8 text-[#5f4b3d]">
                    {collection.description}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section
        id="signature"
        className="border-y border-white/10 bg-[linear-gradient(180deg,#18110d_0%,#120d0a_100%)] py-20"
      >
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
          <ScrollReveal distance={18}>
            <p className="text-sm uppercase tracking-[0.24em] text-[#b89469]">
              Signature
            </p>
            <h2 className="mt-3 font-serif text-4xl font-semibold text-[#f8f1ea] sm:text-5xl">
              Les pièces emblématiques sont montrées comme des icônes de maison.
            </h2>
            <p className="mt-6 max-w-md text-base leading-8 text-white/64">
              Là où `fleuriste` raconte un portfolio éditorial et `boulangerie`
              un commerce de proximité, `pattiserie` doit exprimer une autorité
              plus statutaire, presque cérémonielle.
            </p>
          </ScrollReveal>

          <div className="overflow-hidden rounded-[36px] border border-white/10 bg-white/[0.03]">
            {signaturePieces.map((piece, index) => (
              <ScrollReveal
                key={piece.name}
                delay={index * 70}
                distance={18}
                className="grid gap-4 border-b border-white/8 p-6 last:border-b-0 sm:grid-cols-[1fr_auto]"
              >
                <div>
                  <h3 className="font-serif text-3xl font-semibold text-[#f6eee6]">
                    {piece.name}
                  </h3>
                  <p className="mt-2 text-sm leading-7 text-white/60">{piece.detail}</p>
                </div>
                <div className="self-center text-xl font-semibold text-[#d9b17d]">
                  {piece.price}
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#f4ede5] py-20 text-[#241913]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal distance={18} className="max-w-3xl">
            <p className="text-sm uppercase tracking-[0.24em] text-[#9c7650]">
              Occasions
            </p>
            <h2 className="mt-3 font-serif text-4xl font-semibold sm:text-5xl">
              Une pâtisserie pensée pour les moments qui demandent plus qu’un simple dessert.
            </h2>
          </ScrollReveal>

          <div className="mt-12 grid gap-5 lg:grid-cols-[0.85fr_1.15fr]">
            <ScrollReveal
              distance={18}
              className="rounded-[36px] border border-[#e3d6c6] bg-white p-8 shadow-[0_18px_50px_rgba(42,26,16,0.06)]"
            >
              <p className="text-sm uppercase tracking-[0.24em] text-[#9c7650]">
                Maison
              </p>
              <p className="mt-5 font-serif text-4xl font-semibold">
                Nous travaillons la table, le rythme du repas et la place de la pièce.
              </p>
              <p className="mt-6 text-base leading-8 text-[#5f4b3d]">
                Le site n’est pas structuré comme un menu de boutique. Il met
                d’abord en avant la portée symbolique de la création et le service
                qui l’accompagne.
              </p>
            </ScrollReveal>

            <div className="grid gap-4 sm:grid-cols-3">
              {occasions.map((occasion, index) => (
                <ScrollReveal
                  key={occasion}
                  delay={index * 70}
                  distance={18}
                  className="rounded-[30px] bg-[#1b140f] p-7 text-white shadow-[0_20px_50px_rgba(0,0,0,0.16)]"
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#d9b17d] text-[#1a120d]">
                    0{index + 1}
                  </div>
                  <p className="mt-6 text-lg leading-8 text-white/84">{occasion}</p>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#120d0a] py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal distance={18} className="mx-auto max-w-3xl text-center">
            <p className="text-sm uppercase tracking-[0.24em] text-[#b89469]">
              Galerie
            </p>
            <h2 className="mt-3 font-serif text-4xl font-semibold text-[#f8f1ea] sm:text-5xl">
              Une galerie plus précieuse que démonstrative.
            </h2>
          </ScrollReveal>

          <div className="mt-12 grid gap-4 md:grid-cols-2">
            {gallery.map((image, index) => (
              <ScrollReveal
                key={image}
                delay={(index % 2) * 70}
                distance={18}
                className={`overflow-hidden rounded-[30px] border border-white/10 ${
                  index === 0 ? "md:col-span-2" : ""
                }`}
              >
                <div
                  className={`bg-cover bg-center transition-transform duration-500 hover:scale-[1.03] ${
                    index === 0 ? "h-[420px]" : "h-[300px]"
                  }`}
                  style={{ backgroundImage: `url('${image}')` }}
                />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-white/10 bg-[#1a120d] py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal distance={18} className="max-w-3xl">
            <p className="text-sm uppercase tracking-[0.24em] text-[#b89469]">
              Témoignages
            </p>
            <h2 className="mt-3 font-serif text-4xl font-semibold text-[#f8f1ea] sm:text-5xl">
              Une preuve sociale traitée comme validation de maison.
            </h2>
          </ScrollReveal>

          <div className="mt-12 grid gap-5 md:grid-cols-2">
            {testimonials.map((item, index) => (
              <ScrollReveal
                key={item.name}
                delay={index * 80}
                distance={18}
                className="rounded-[32px] border border-white/8 bg-white/[0.03] p-8"
              >
                <div className="flex gap-1 text-[#d9b17d]">
                  {Array.from({ length: 5 }).map((_, starIndex) => (
                    <Star key={starIndex} className="h-4 w-4 fill-current" />
                  ))}
                </div>
                <p className="mt-6 text-xl leading-9 text-white/82">
                  &quot;{item.text}&quot;
                </p>
                <div className="mt-6">
                  <p className="font-semibold text-[#f8f1ea]">{item.name}</p>
                  <p className="text-sm text-white/56">{item.role}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="bg-[#f4ede5] py-20 text-[#241913]">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal
            distance={18}
            className="rounded-[40px] border border-[#e3d6c6] bg-white p-8 shadow-[0_22px_60px_rgba(42,26,16,0.08)] sm:p-10"
          >
            <div className="grid gap-8 lg:grid-cols-[0.86fr_1.14fr]">
              <div>
                <p className="text-sm uppercase tracking-[0.24em] text-[#9c7650]">
                  Conciergerie
                </p>
                <h2 className="mt-3 font-serif text-4xl font-semibold sm:text-5xl">
                  Commander une création pour une date, un lieu, une table.
                </h2>
                <div className="mt-8 space-y-5 text-sm leading-7 text-[#5f4b3d]">
                  <div className="flex items-start gap-3">
                    <MapPin className="mt-1 h-4 w-4 text-[#9c7650]" />
                    <span>123 Rue de la Gourmandise, 75001 Paris</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Clock className="mt-1 h-4 w-4 text-[#9c7650]" />
                    <span>Mardi - Samedi 7h00 - 19h30, Dimanche 8h00 - 13h00</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Phone className="mt-1 h-4 w-4 text-[#9c7650]" />
                    <span>01 42 33 44 55</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Mail className="mt-1 h-4 w-4 text-[#9c7650]" />
                    <span>contact@patisserie-douceur.fr</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Calendar className="mt-1 h-4 w-4 text-[#9c7650]" />
                    <span>Commandes spéciales à partir de 48h</span>
                  </div>
                </div>
              </div>

              <div className="rounded-[32px] bg-[#18110d] p-8 text-white">
                <p className="text-sm uppercase tracking-[0.24em] text-[#d9b17d]">
                  Ce que vend cette structure
                </p>
                <p className="mt-5 text-base leading-8 text-white/76">
                  Une maison premium qui assume la distinction, la précision et
                  la valeur perçue. Ce n’est ni un site commerce rapide comme
                  `boulangerie`, ni un portfolio studio comme `fleuriste`.
                </p>
                <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                  <Button className="bg-[#d9b17d] text-[#1a120d] hover:bg-[#e4bf8f]">
                    Demander une création
                  </Button>
                  <Button
                    variant="outline"
                    className="border-white/30 bg-transparent text-white hover:bg-white/10"
                  >
                    Prendre rendez-vous
                  </Button>
                </div>
                <Link
                  href="#collections"
                  className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-[#d9b17d]"
                >
                  Revoir les collections
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <footer className="border-t border-white/10 bg-[#120d0a] py-12">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 md:grid-cols-3 lg:px-8">
          <div>
            <div className="flex items-center gap-3">
              <ChefHat className="h-5 w-5 text-[#d9b17d]" />
              <span className="font-serif text-2xl font-semibold text-[#f8f1ea]">
                Pâtisserie Douceur
              </span>
            </div>
            <p className="mt-4 text-sm leading-7 text-white/56">
              Maison de création pâtissière pour tables d’exception, gifting
              premium et commandes sur mesure.
            </p>
          </div>
          <div>
            <p className="font-semibold text-[#f8f1ea]">Navigation</p>
            <div className="mt-4 space-y-2 text-sm text-white/56">
              <a href="#collections" className="block hover:text-[#d9b17d]">
                Collections
              </a>
              <a href="#signature" className="block hover:text-[#d9b17d]">
                Signature
              </a>
              <a href="#contact" className="block hover:text-[#d9b17d]">
                Conciergerie
              </a>
            </div>
          </div>
          <div>
            <p className="font-semibold text-[#f8f1ea]">Positionnement</p>
            <p className="mt-4 text-sm leading-7 text-white/56">
              Une architecture plus statutaire, plus sombre et plus cérémonielle
              que les deux autres templates.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
