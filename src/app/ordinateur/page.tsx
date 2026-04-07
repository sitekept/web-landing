import {
  Award,
  Clock,
  Mail,
  MapPin,
  Monitor,
  Phone,
  Shield,
  Smartphone,
  Sparkles,
  Star,
  Users,
  Wrench,
} from "lucide-react";
import Link from "next/link";

import { Button } from "@/components/ui/button";

export default function Ordinateur() {
  return (
    <div className="min-h-screen bg-slate-50">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/95 shadow-sm backdrop-blur-sm">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center">
              <Monitor className="mr-2 h-8 w-8 text-blue-600" />
              <span className="font-mono text-2xl font-bold text-slate-800">
                TechRepair Pro
              </span>
            </div>
            <div className="hidden space-x-8 md:flex">
              <a
                href="#accueil"
                className="text-slate-800 transition-colors hover:text-blue-600"
              >
                Accueil
              </a>
              <a
                href="#services"
                className="text-slate-800 transition-colors hover:text-blue-600"
              >
                Services
              </a>
              <a
                href="#apropos"
                className="text-slate-800 transition-colors hover:text-blue-600"
              >
                À propos
              </a>
              <a
                href="#galerie"
                className="text-slate-800 transition-colors hover:text-blue-600"
              >
                Réalisations
              </a>
              <a
                href="#contact"
                className="text-slate-800 transition-colors hover:text-blue-600"
              >
                Contact
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section
        id="accueil"
        className="relative flex h-screen items-center justify-center overflow-hidden"
      >
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1518709268805-4e9042af2176?auto=format&fit=crop&w=2000&q=80')",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/70 via-slate-900/40 to-slate-50/80" />
        <div className="relative z-10 mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <div className="mb-6 flex items-center justify-center">
            <Sparkles className="mr-3 h-8 w-8 text-blue-400" />
            <span className="text-lg font-medium text-blue-400">
              Experts en réparation depuis 2010
            </span>
            <Sparkles className="ml-3 h-8 w-8 text-blue-400" />
          </div>
          <h1 className="mb-6 font-mono text-6xl font-bold text-white drop-shadow-lg sm:text-7xl lg:text-8xl">
            TechRepair
            <span className="block text-blue-400">Pro</span>
          </h1>
          <p className="mx-auto mb-8 max-w-3xl text-xl text-white/90 sm:text-2xl">
            Réparation d&apos;ordinateurs et smartphones. Diagnostic gratuit,
            intervention rapide, garantie sur toutes nos réparations. Votre
            technologie entre de bonnes mains.
          </p>
          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <Link href="#services">
              <Button
                size="lg"
                className="bg-blue-600 px-8 py-3 text-lg font-medium text-white hover:bg-blue-700"
              >
                Nos services
              </Button>
            </Link>
            <Link href="#contact">
              <Button
                variant="outline"
                size="lg"
                className="border-white px-8 py-3 text-white hover:bg-white hover:text-slate-800"
              >
                Diagnostic gratuit
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-16 text-center">
            <h2 className="mb-6 font-mono text-4xl font-bold text-slate-800 sm:text-5xl">
              Nos services de réparation
            </h2>
            <p className="mx-auto max-w-3xl text-xl text-muted-foreground">
              Spécialisés dans la réparation d&apos;ordinateurs et smartphones,
              nous intervenons rapidement avec des pièces de qualité et une
              garantie sur tous nos services.
            </p>
          </div>

          {/* Catégories de services */}
          <div className="mb-16 grid grid-cols-1 gap-12 lg:grid-cols-2">
            <div className="space-y-8">
              <h3 className="mb-6 font-mono text-2xl font-semibold text-slate-800">
                Réparation Ordinateurs
              </h3>
              {[
                {
                  name: "Écran cassé / Dalle LCD",
                  description:
                    "Remplacement d&apos;écran PC portable, réparation dalle LCD/LED",
                  price: "80-150€",
                  image:
                    "https://images.unsplash.com/photo-1541101767792-f9721b0c02c1?auto=format&fit=crop&w=400&q=80",
                },
                {
                  name: "Problème carte mère",
                  description:
                    "Diagnostic et réparation carte mère, circuits électroniques",
                  price: "60-200€",
                  image:
                    "https://images.unsplash.com/photo-1518709268805-4e9042af2176?auto=format&fit=crop&w=400&q=80",
                },
                {
                  name: "Récupération de données",
                  description:
                    "Récupération fichiers disque dur défaillant, SSD endommagé",
                  price: "90-300€",
                  image:
                    "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=400&q=80",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="flex items-center space-x-4 rounded-lg bg-slate-50/50 p-4"
                >
                  <div
                    className="h-20 w-20 rounded-lg bg-cover bg-center"
                    style={{ backgroundImage: `url('${item.image}')` }}
                  />
                  <div className="flex-1">
                    <h4 className="font-mono text-lg font-semibold text-slate-800">
                      {item.name}
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      {item.description}
                    </p>
                  </div>
                  <div className="text-lg font-bold text-blue-600">
                    {item.price}
                  </div>
                </div>
              ))}
            </div>

            <div className="space-y-8">
              <h3 className="mb-6 font-mono text-2xl font-semibold text-slate-800">
                Réparation Smartphones
              </h3>
              {[
                {
                  name: "Écran iPhone/Android",
                  description:
                    "Remplacement écran tactile, vitre cassée toutes marques",
                  price: "50-180€",
                  image:
                    "https://images.unsplash.com/photo-1512054502232-10a0a035d4d0?auto=format&fit=crop&w=400&q=80",
                },
                {
                  name: "Batterie défaillante",
                  description:
                    "Changement batterie iPhone, Samsung, Huawei, Xiaomi",
                  price: "40-80€",
                  image:
                    "https://images.unsplash.com/photo-1601593346740-925612772716?auto=format&fit=crop&w=400&q=80",
                },
                {
                  name: "Connecteur de charge",
                  description: "Réparation port USB-C, Lightning, micro-USB",
                  price: "45-90€",
                  image:
                    "https://images.unsplash.com/photo-1617275252481-c9608b9c7db9?auto=format&fit=crop&w=400&q=80",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="flex items-center space-x-4 rounded-lg bg-slate-50/50 p-4"
                >
                  <div
                    className="h-20 w-20 rounded-lg bg-cover bg-center"
                    style={{ backgroundImage: `url('${item.image}')` }}
                  />
                  <div className="flex-1">
                    <h4 className="font-mono text-lg font-semibold text-slate-800">
                      {item.name}
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      {item.description}
                    </p>
                  </div>
                  <div className="text-lg font-bold text-blue-600">
                    {item.price}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* À propos Section */}
      <section id="apropos" className="bg-slate-800 py-20 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
            <div>
              <h2 className="mb-6 font-mono text-4xl font-bold sm:text-5xl">
                Expertise technique depuis 2010
              </h2>
              <p className="mb-6 text-lg">
                Fondé par des ingénieurs passionnés d&apos;informatique,
                TechRepair Pro est devenu la référence en réparation
                d&apos;ordinateurs et smartphones. Notre équipe certifiée
                intervient sur toutes marques avec des outils professionnels de
                dernière génération.
              </p>
              <p className="mb-8 text-lg">
                Nous nous engageons sur la qualité avec une garantie de 6 mois
                sur toutes nos réparations. Notre atelier est équipé des
                dernières technologies pour diagnostiquer et réparer
                efficacement vos appareils électroniques.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <Award className="mx-auto mb-2 h-12 w-12 text-blue-400" />
                  <div className="text-2xl font-bold text-blue-400">500+</div>
                  <div className="text-sm">Réparations/mois</div>
                </div>
                <div className="text-center">
                  <Users className="mx-auto mb-2 h-12 w-12 text-blue-400" />
                  <div className="text-2xl font-bold text-blue-400">15000+</div>
                  <div className="text-sm">Clients satisfaits</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square overflow-hidden rounded-lg shadow-2xl">
                <div
                  className="h-full w-full bg-cover bg-center"
                  style={{
                    backgroundImage:
                      "url('https://images.unsplash.com/photo-1581092921461-eab62e97a780?auto=format&fit=crop&w=800&q=80')",
                  }}
                />
              </div>
              <div className="absolute -right-6 -bottom-6 rounded-lg bg-blue-600 p-6 text-white shadow-lg">
                <div className="text-center">
                  <div className="text-3xl font-bold">14</div>
                  <div className="text-sm font-medium">
                    Années d&apos;expérience
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Témoignages */}
      <section className="bg-slate-50 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-16 text-center">
            <h2 className="mb-6 font-mono text-4xl font-bold text-slate-800 sm:text-5xl">
              Avis de nos clients
            </h2>
          </div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {[
              {
                name: "Alexandre Martin",
                text: "Écran de MacBook réparé en 2h ! Service ultra-rapide et professionnel. Mon ordinateur fonctionne parfaitement. Je recommande vivement.",
                rating: 5,
                event: "Réparation MacBook",
              },
              {
                name: "Sarah Dubois",
                text: "iPhone tombé dans l&apos;eau, ils ont réussi à le sauver et récupérer toutes mes photos. Équipe compétente et prix correct.",
                rating: 5,
                event: "Réparation iPhone",
              },
              {
                name: "Pierre Leroy",
                text: "PC qui ne démarrait plus, diagnostic gratuit et réparation carte mère. Excellent travail, garantie respectée. Très satisfait !",
                rating: 5,
                event: "Réparation PC",
              },
            ].map((testimonial, index) => (
              <div key={index} className="rounded-lg bg-white p-8 shadow-lg">
                <div className="mb-4 flex items-center">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-5 w-5 fill-current text-blue-600"
                    />
                  ))}
                </div>
                <p className="mb-6 text-muted-foreground italic">
                  &quot;{testimonial.text}&quot;
                </p>
                <div>
                  <div className="font-semibold text-slate-800">
                    {testimonial.name}
                  </div>
                  <div className="text-sm text-blue-600">
                    {testimonial.event}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Galerie */}
      <section id="galerie" className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-16 text-center">
            <h2 className="mb-6 font-mono text-4xl font-bold text-slate-800 sm:text-5xl">
              Nos réalisations
            </h2>
            <p className="text-xl text-muted-foreground">
              Aperçu de notre atelier et de nos réparations techniques
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
            {[
              "https://images.unsplash.com/photo-1518709268805-4e9042af2176?auto=format&fit=crop&w=500&q=80",
              "https://images.unsplash.com/photo-1541101767792-f9721b0c02c1?auto=format&fit=crop&w=500&q=80",
              "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=500&q=80",
              "https://images.unsplash.com/photo-1512054502232-10a0a035d4d0?auto=format&fit=crop&w=500&q=80",
              "https://images.unsplash.com/photo-1601593346740-925612772716?auto=format&fit=crop&w=500&q=80",
              "https://images.unsplash.com/photo-1617275252481-c9608b9c7db9?auto=format&fit=crop&w=500&q=80",
              "https://images.unsplash.com/photo-1581092921461-eab62e97a780?auto=format&fit=crop&w=500&q=80",
              "https://images.unsplash.com/photo-1590736969955-71cc94901144?auto=format&fit=crop&w=500&q=80",
            ].map((image, index) => (
              <div
                key={index}
                className="aspect-square overflow-hidden rounded-lg shadow-lg transition-shadow hover:shadow-xl"
              >
                <div
                  className="h-full w-full bg-cover bg-center transition-transform duration-300 hover:scale-105"
                  style={{ backgroundImage: `url('${image}')` }}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services spécialisés */}
      <section className="bg-blue-600 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-16 text-center">
            <h2 className="mb-6 font-mono text-4xl font-bold text-white sm:text-5xl">
              Services spécialisés
            </h2>
            <p className="text-xl text-white/90">
              Au-delà de la réparation, nous proposons des services complets
            </p>
          </div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {[
              {
                icon: Shield,
                title: "Dépannage à domicile",
                description:
                  "Intervention directement chez vous pour problèmes logiciels et hardware",
              },
              {
                icon: Wrench,
                title: "Maintenance préventive",
                description:
                  "Nettoyage, optimisation et mise à jour pour prolonger la durée de vie",
              },
              {
                icon: Smartphone,
                title: "Vente d'accessoires",
                description:
                  "Coques, films protecteurs, chargeurs et accessoires de qualité",
              },
            ].map((service, index) => (
              <div
                key={index}
                className="rounded-lg bg-white/10 p-8 text-center backdrop-blur-sm"
              >
                <service.icon className="mx-auto mb-6 h-16 w-16 text-white" />
                <h3 className="mb-4 font-mono text-2xl font-semibold text-white">
                  {service.title}
                </h3>
                <p className="text-white/90">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact & Informations pratiques */}
      <section id="contact" className="bg-slate-800 py-20 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
            <div>
              <h2 className="mb-8 font-mono text-4xl font-bold sm:text-5xl">
                Contactez nos experts
              </h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <MapPin className="mt-1 h-6 w-6 text-blue-400" />
                  <div>
                    <h3 className="mb-1 font-semibold">Adresse</h3>
                    <p className="text-white/80">
                      15 Rue de la Technologie
                      <br />
                      31000 Toulouse, France
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Clock className="mt-1 h-6 w-6 text-blue-400" />
                  <div>
                    <h3 className="mb-1 font-semibold">
                      Horaires d&apos;ouverture
                    </h3>
                    <div className="space-y-1 text-white/80">
                      <p>Lundi - Vendredi : 9h00 - 18h30</p>
                      <p>Samedi : 9h00 - 17h00</p>
                      <p className="text-blue-400">Fermé le dimanche</p>
                    </div>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Phone className="mt-1 h-6 w-6 text-blue-400" />
                  <div>
                    <h3 className="mb-1 font-semibold">Téléphone</h3>
                    <p className="text-white/80">05 61 23 45 67</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Mail className="mt-1 h-6 w-6 text-blue-400" />
                  <div>
                    <h3 className="mb-1 font-semibold">Email</h3>
                    <p className="text-white/80">contact@techrepair-pro.fr</p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <h3 className="mb-6 font-mono text-2xl font-semibold">
                Diagnostic gratuit
              </h3>
              <p className="mb-8 text-white/80">
                Apportez votre appareil pour un diagnostic gratuit et sans
                engagement. Devis détaillé fourni avant toute intervention.
                Réparation express possible.
              </p>
              <div className="space-y-4">
                <Button
                  size="lg"
                  className="w-full bg-blue-600 text-white hover:bg-blue-700"
                >
                  Prendre rendez-vous
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="w-full border-white text-white hover:bg-white hover:text-slate-800"
                >
                  Demander un devis
                </Button>
              </div>
              <p className="mt-6 text-sm text-white/60">
                * Garantie 6 mois sur toutes nos réparations
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t bg-white py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            <div>
              <div className="mb-4 flex items-center">
                <Monitor className="mr-2 h-8 w-8 text-blue-600" />
                <span className="font-mono text-2xl font-bold text-slate-800">
                  TechRepair Pro
                </span>
              </div>
              <p className="text-muted-foreground">
                Experts en réparation depuis 2010. Ordinateurs et smartphones
                entre de bonnes mains.
              </p>
            </div>
            <div>
              <h4 className="mb-4 font-semibold text-slate-800">
                Liens rapides
              </h4>
              <div className="space-y-2">
                <a
                  href="#services"
                  className="block text-muted-foreground hover:text-slate-800"
                >
                  Nos services
                </a>
                <a
                  href="#apropos"
                  className="block text-muted-foreground hover:text-slate-800"
                >
                  À propos
                </a>
                <a
                  href="#galerie"
                  className="block text-muted-foreground hover:text-slate-800"
                >
                  Réalisations
                </a>
                <a
                  href="#contact"
                  className="block text-muted-foreground hover:text-slate-800"
                >
                  Contact
                </a>
              </div>
            </div>
            <div>
              <h4 className="mb-4 font-semibold text-slate-800">
                Certifications
              </h4>
              <p className="mb-4 text-muted-foreground">
                Techniciens certifiés Apple, Samsung, Huawei. Matériel
                professionnel et pièces d&apos;origine.
              </p>
              <div className="text-sm text-muted-foreground">
                © 2024 TechRepair Pro. Tous droits réservés.
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
