import {
  ArrowRight,
  Award,
  Calendar,
  Clock,
  Gift,
  MapPin,
  Phone,
  Sparkles,
  Star,
  Users,
  Wheat,
} from "lucide-react";
import Link from "next/link";

import { ScrollReveal } from "@/components/scroll-reveal";
import { Button } from "@/components/ui/button";

const dailyProducts = [
  {
    name: "Baguette Tradition",
    description: "Levain naturel, croûte dorée, mie alvéolée.",
    price: "1,30€",
    image:
      "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "Pain de Campagne",
    description: "Fermentation lente et croûte épaisse.",
    price: "4,50€",
    image:
      "https://images.unsplash.com/photo-1549931319-a545dcf3bc73?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "Croissant Pur Beurre",
    description: "Feuilletage croustillant et coeur fondant.",
    price: "1,20€",
    image:
      "https://images.unsplash.com/photo-1555507036-ab794f4afe7a?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "Chausson aux Pommes",
    description: "Compote maison, cannelle douce, pâte brillante.",
    price: "2,50€",
    image:
      "https://images.unsplash.com/photo-1608039829572-78524f79c4c7?auto=format&fit=crop&w=900&q=80",
  },
] as const;

const trustPoints = [
  {
    title: "Fabrication maison",
    text: "Chaque fournée est préparée sur place, tôt le matin, avec des méthodes artisanales assumées.",
    icon: Award,
  },
  {
    title: "Vie de quartier",
    text: "Une adresse pensée pour le quotidien, les habitudes locales et les commandes familiales.",
    icon: Users,
  },
  {
    title: "Commandes spéciales",
    text: "Brunchs, événements, plateaux et grandes quantités préparés sur demande.",
    icon: Calendar,
  },
] as const;

const services = [
  {
    title: "Petit-déjeuner de bureau",
    text: "Assortiments de viennoiseries et pains frais livrés pour vos équipes.",
    icon: Gift,
  },
  {
    title: "Buffets & événements",
    text: "Formules sur mesure pour anniversaires, baptêmes et réceptions.",
    icon: Sparkles,
  },
  {
    title: "Retrait express",
    text: "Réservation simple par téléphone pour éviter les ruptures du matin.",
    icon: Phone,
  },
] as const;

const testimonials = [
  {
    name: "Françoise Martin",
    text: "La meilleure boulangerie du quartier. Tout donne envie, et on sent le vrai travail artisanal.",
    role: "Cliente fidèle",
  },
  {
    name: "Philippe Dubois",
    text: "Le pain de campagne est superbe et les viennoiseries du matin sont toujours impeccables.",
    role: "Habitué du samedi",
  },
] as const;

export default function Boulangerie() {
  return (
    <div className="min-h-screen bg-[#fffaf2] text-[#4f2e18]">
      <div className="border-b border-amber-200 bg-[#4f2e18] px-4 py-3 text-sm text-amber-50">
        <div className="mx-auto flex max-w-7xl flex-col gap-2 sm:flex-row sm:items-center sm:justify-between sm:px-2">
          <p>Commande spéciale sous 48h pour événements et buffets.</p>
          <div className="flex items-center gap-4 text-amber-100/90">
            <span>Mar - Sam 6h30 - 19h30</span>
            <span>Dim 7h00 - 13h00</span>
          </div>
        </div>
      </div>

      <nav className="sticky top-0 z-50 border-b border-amber-200 bg-[#fffaf2]/95 backdrop-blur">
        <div className="mx-auto flex h-18 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3">
            <div className="rounded-full bg-amber-100 p-2">
              <Wheat className="h-6 w-6 text-orange-600" />
            </div>
            <div>
              <p className="font-serif text-2xl font-bold text-[#6b3b16]">
                Le Fournil d&apos;Or
              </p>
              <p className="text-xs uppercase tracking-[0.24em] text-orange-600">
                Boulangerie artisanale
              </p>
            </div>
          </div>
          <div className="hidden items-center gap-8 md:flex">
            <a href="#accueil" className="text-sm font-medium hover:text-orange-600">
              Accueil
            </a>
            <a href="#vitrine" className="text-sm font-medium hover:text-orange-600">
              Vitrine du jour
            </a>
            <a href="#services" className="text-sm font-medium hover:text-orange-600">
              Services
            </a>
            <a href="#contact" className="text-sm font-medium hover:text-orange-600">
              Contact
            </a>
          </div>
        </div>
      </nav>

      <section id="accueil" className="border-b border-amber-200 bg-[#fff7eb]">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 lg:grid-cols-[0.95fr_1.05fr] lg:items-start lg:px-8 lg:py-18">
          <ScrollReveal distance={20}>
            <div className="inline-flex items-center gap-2 rounded-full border border-orange-200 bg-white px-4 py-2 text-sm font-medium text-orange-600">
              <Sparkles className="h-4 w-4" />
              Votre fournil de quartier depuis 1978
            </div>
            <h1 className="mt-6 max-w-xl font-serif text-5xl font-bold leading-none text-[#5f3416] sm:text-6xl">
              Le commerce
              <span className="mt-2 block text-orange-500">qui donne faim</span>
              dès le trottoir.
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-8 text-[#6f4730]/80">
              Une structure pensée comme un site de commerce local qui vend
              immédiatement la proximité, la régularité et le plaisir du produit
              frais. Ici, on pousse la visite en boutique et la commande rapide.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Link href="#vitrine">
                <Button
                  size="lg"
                  className="bg-orange-600 px-8 text-white hover:bg-orange-700"
                >
                  Voir la vitrine du jour
                </Button>
              </Link>
              <Link href="#contact">
                <Button
                  variant="outline"
                  size="lg"
                  className="border-orange-200 bg-white text-[#5f3416] hover:bg-orange-50"
                >
                  Préparer une commande
                </Button>
              </Link>
            </div>

            <div className="mt-10 grid gap-4 sm:grid-cols-3">
              {[
                ["6h30", "Ouverture du fournil"],
                ["7j/7", "Pains et viennoiseries"],
                ["48h", "Commandes événementielles"],
              ].map(([value, label]) => (
                <div
                  key={label}
                  className="rounded-[24px] border border-amber-200 bg-white p-5 shadow-sm"
                >
                  <div className="text-2xl font-bold text-orange-600">{value}</div>
                  <div className="mt-1 text-sm text-[#6f4730]/70">{label}</div>
                </div>
              ))}
            </div>
          </ScrollReveal>

          <ScrollReveal className="grid gap-4 lg:grid-cols-[0.52fr_0.48fr]" delay={90}>
            <div
              className="min-h-[540px] overflow-hidden rounded-[32px] bg-cover bg-center shadow-[0_30px_90px_rgba(120,53,15,0.16)]"
              style={{
                backgroundImage:
                  "linear-gradient(180deg, rgba(79,46,24,0.08), rgba(79,46,24,0.36)), url('https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=1500&q=80')",
              }}
            />
            <div className="space-y-4">
              <div className="rounded-[30px] bg-[#6b3b16] p-6 text-white shadow-[0_22px_60px_rgba(120,53,15,0.22)]">
                <p className="text-sm uppercase tracking-[0.22em] text-orange-200">
                  Aujourd&apos;hui
                </p>
                <div className="mt-4 space-y-3">
                  {dailyProducts.slice(0, 3).map((item) => (
                    <div
                      key={item.name}
                      className="flex items-center justify-between border-b border-white/10 pb-3 last:border-b-0 last:pb-0"
                    >
                      <div>
                        <p className="font-semibold">{item.name}</p>
                        <p className="text-sm text-white/70">{item.description}</p>
                      </div>
                      <span className="text-sm font-bold text-orange-200">
                        {item.price}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-[30px] border border-amber-200 bg-white p-6 shadow-sm">
                <p className="text-sm uppercase tracking-[0.22em] text-orange-600">
                  Infos pratiques
                </p>
                <div className="mt-4 space-y-4 text-sm text-[#6f4730]/80">
                  <div className="flex items-start gap-3">
                    <MapPin className="mt-0.5 h-4 w-4 text-orange-600" />
                    <span>12 Place du Marché, Bordeaux</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Clock className="mt-0.5 h-4 w-4 text-orange-600" />
                    <span>Mar - Sam 6h30 - 19h30, Dim 7h00 - 13h00</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Phone className="mt-0.5 h-4 w-4 text-orange-600" />
                    <span>05 56 78 90 12</span>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section id="vitrine" className="bg-white py-18">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal className="mb-10 flex items-end justify-between gap-6">
            <div className="max-w-2xl">
              <p className="text-sm uppercase tracking-[0.24em] text-orange-600">
                Vitrine du jour
              </p>
              <h2 className="mt-3 font-serif text-4xl font-bold text-[#5f3416] sm:text-5xl">
                Les produits qui font entrer en boutique.
              </h2>
            </div>
            <Link
              href="#contact"
              className="hidden items-center gap-2 text-sm font-semibold text-orange-600 lg:inline-flex"
            >
              Commander un assortiment
              <ArrowRight className="h-4 w-4" />
            </Link>
          </ScrollReveal>

          <div className="grid gap-5 lg:grid-cols-4">
            {dailyProducts.map((item, index) => (
              <ScrollReveal
                key={item.name}
                delay={index * 70}
                distance={18}
                className="overflow-hidden rounded-[28px] border border-amber-100 bg-[#fffaf2] shadow-sm"
              >
                <div
                  className="h-56 bg-cover bg-center"
                  style={{ backgroundImage: `url('${item.image}')` }}
                />
                <div className="p-5">
                  <div className="flex items-start justify-between gap-4">
                    <h3 className="font-serif text-2xl font-semibold text-[#5f3416]">
                      {item.name}
                    </h3>
                    <span className="rounded-full bg-orange-100 px-3 py-1 text-sm font-bold text-orange-700">
                      {item.price}
                    </span>
                  </div>
                  <p className="mt-3 text-sm leading-7 text-[#6f4730]/75">
                    {item.description}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-amber-200 bg-[#fff4df] py-18">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.95fr_1.05fr] lg:px-8">
          <ScrollReveal distance={24}>
            <p className="text-sm uppercase tracking-[0.24em] text-orange-600">
              Pourquoi revenir
            </p>
            <h2 className="mt-3 font-serif text-4xl font-bold text-[#5f3416] sm:text-5xl">
              Une page pensée comme un vrai commerce de proximité.
            </h2>
            <div className="mt-8 space-y-4">
              {trustPoints.map((point, index) => (
                <ScrollReveal
                  key={point.title}
                  delay={index * 60}
                  distance={18}
                  className="rounded-[26px] border border-amber-200 bg-white p-6 shadow-sm"
                >
                  <div className="flex items-start gap-4">
                    <div className="rounded-full bg-orange-100 p-3">
                      <point.icon className="h-5 w-5 text-orange-600" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-[#5f3416]">
                        {point.title}
                      </h3>
                      <p className="mt-2 text-sm leading-7 text-[#6f4730]/75">
                        {point.text}
                      </p>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </ScrollReveal>

          <ScrollReveal delay={90} distance={24} className="rounded-[34px] bg-[#5f3416] p-8 text-white shadow-[0_26px_70px_rgba(120,53,15,0.18)]">
            <p className="text-sm uppercase tracking-[0.24em] text-orange-200">
              Savoir-faire
            </p>
            <h3 className="mt-4 font-serif text-3xl font-bold">
              Une adresse qui donne confiance avant même la première commande.
            </h3>
            <div className="mt-8 grid gap-5 sm:grid-cols-2">
              <div className="rounded-[24px] bg-white/10 p-5">
                <Award className="h-8 w-8 text-orange-200" />
                <p className="mt-4 text-3xl font-bold">46</p>
                <p className="mt-1 text-sm text-white/72">
                  années de présence locale
                </p>
              </div>
              <div className="rounded-[24px] bg-white/10 p-5">
                <Users className="h-8 w-8 text-orange-200" />
                <p className="mt-4 text-3xl font-bold">5000+</p>
                <p className="mt-1 text-sm text-white/72">
                  clients réguliers fidélisés
                </p>
              </div>
            </div>
            <p className="mt-8 text-sm leading-7 text-white/78">
              Nous utilisons exclusivement des farines françaises de qualité,
              du levain naturel et des fermentations lentes pour retrouver des
              goûts francs, une croûte juste et une vraie régularité.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <section id="services" className="bg-white py-18">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal className="mb-12 max-w-2xl" distance={22}>
            <p className="text-sm uppercase tracking-[0.24em] text-orange-600">
              Services
            </p>
            <h2 className="mt-3 font-serif text-4xl font-bold text-[#5f3416] sm:text-5xl">
              Commandes faciles, usages clairs, promesse immédiate.
            </h2>
          </ScrollReveal>

          <div className="grid gap-5 md:grid-cols-3">
            {services.map((service, index) => (
              <ScrollReveal
                key={service.title}
                delay={index * 70}
                distance={18}
                className="rounded-[28px] border border-amber-200 bg-[#fff8ee] p-7"
              >
                <service.icon className="h-10 w-10 text-orange-600" />
                <h3 className="mt-5 font-serif text-2xl font-semibold text-[#5f3416]">
                  {service.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-[#6f4730]/75">
                  {service.text}
                </p>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#4f2e18] py-18 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal className="mb-10 max-w-2xl" distance={22}>
            <p className="text-sm uppercase tracking-[0.24em] text-orange-200">
              Avis du quartier
            </p>
            <h2 className="mt-3 font-serif text-4xl font-bold sm:text-5xl">
              Une confiance construite sur la régularité.
            </h2>
          </ScrollReveal>

          <div className="grid gap-5 md:grid-cols-2">
            {testimonials.map((item, index) => (
              <ScrollReveal
                key={item.name}
                delay={index * 80}
                distance={18}
                className="rounded-[30px] border border-white/10 bg-white/8 p-7 backdrop-blur"
              >
                <div className="flex items-center gap-1 text-orange-200">
                  {Array.from({ length: 5 }).map((_, starIndex) => (
                    <Star key={starIndex} className="h-4 w-4 fill-current" />
                  ))}
                </div>
                <p className="mt-5 text-lg leading-8 text-white/84">
                  &quot;{item.text}&quot;
                </p>
                <div className="mt-6">
                  <p className="font-semibold">{item.name}</p>
                  <p className="text-sm text-orange-200/80">{item.role}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="bg-[#fff7eb] py-18">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-[0.95fr_1.05fr] lg:px-8">
          <ScrollReveal distance={20} className="rounded-[34px] bg-white p-8 shadow-sm">
            <p className="text-sm uppercase tracking-[0.24em] text-orange-600">
              Venir / appeler
            </p>
            <h2 className="mt-3 font-serif text-4xl font-bold text-[#5f3416]">
              On simplifie la commande et la visite.
            </h2>
            <div className="mt-8 space-y-5 text-sm leading-7 text-[#6f4730]/78">
              <div className="flex items-start gap-3">
                <MapPin className="mt-1 h-4 w-4 text-orange-600" />
                <span>12 Place du Marché, 33000 Bordeaux</span>
              </div>
              <div className="flex items-start gap-3">
                <Clock className="mt-1 h-4 w-4 text-orange-600" />
                <span>Mar - Sam 6h30 - 19h30, Dim 7h00 - 13h00</span>
              </div>
              <div className="flex items-start gap-3">
                <Phone className="mt-1 h-4 w-4 text-orange-600" />
                <span>05 56 78 90 12</span>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal
            delay={90}
            distance={20}
            className="rounded-[34px] bg-orange-600 p-8 text-white shadow-[0_26px_70px_rgba(234,88,12,0.24)]"
          >
            <p className="text-sm uppercase tracking-[0.24em] text-orange-100">
              Commande rapide
            </p>
            <h3 className="mt-3 font-serif text-4xl font-bold">
              Réservez vos produits avant le passage en boutique.
            </h3>
            <p className="mt-5 max-w-xl text-base leading-8 text-white/82">
              Une structure de site pensée pour convertir tout de suite:
              commande événementielle, retrait, buffet ou simple réservation
              matinale.
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Button
                size="lg"
                className="bg-white text-orange-700 hover:bg-orange-50"
              >
                Passer commande
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-white bg-transparent text-white hover:bg-white hover:text-orange-700"
              >
                Demander un devis
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <footer className="border-t border-amber-200 bg-white py-12">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 md:grid-cols-3 lg:px-8">
          <div>
            <div className="flex items-center gap-3">
              <Wheat className="h-6 w-6 text-orange-600" />
              <span className="font-serif text-2xl font-bold text-[#5f3416]">
                Le Fournil d&apos;Or
              </span>
            </div>
            <p className="mt-4 text-sm leading-7 text-[#6f4730]/72">
              Boulangerie artisanale de quartier, commandes simples, retrait
              rapide et qualité régulière.
            </p>
          </div>
          <div>
            <p className="font-semibold text-[#5f3416]">Navigation</p>
            <div className="mt-4 space-y-2 text-sm text-[#6f4730]/72">
              <a href="#vitrine" className="block hover:text-orange-600">
                Vitrine du jour
              </a>
              <a href="#services" className="block hover:text-orange-600">
                Services
              </a>
              <a href="#contact" className="block hover:text-orange-600">
                Contact
              </a>
            </div>
          </div>
          <div>
            <p className="font-semibold text-[#5f3416]">Boutique</p>
            <p className="mt-4 text-sm leading-7 text-[#6f4730]/72">
              12 Place du Marché
              <br />
              33000 Bordeaux
              <br />
              05 56 78 90 12
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
