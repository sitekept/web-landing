export type TemplateAdminStatus =
  | "sitekept-public"
  | "admin-only"
  | "lab"
  | "archived";

export interface AdminTemplateCatalogEntry {
  slug: string;
  name: string;
  sector: string;
  adminStatus: TemplateAdminStatus;
  vercelUrl: string;
  sitekeptUrl?: string;
  routeStatus: "Live on sitekept.com" | "Vercel only" | "Lab only";
  notes: string;
}

const TEMPLATE_VERCEL_BASE_URL = "https://sitekept-templates.vercel.app";
const SITEKEPT_BASE_URL = "https://www.sitekept.com";

const sitekeptPublicSlugs = [
  "boulangerie",
  "fleuriste",
  "ordinateur",
  "pattiserie",
  "dentiste",
  "plombier-chauffagiste",
  "salon-coiffure",
  "menage-nettoyage",
  "restaurant-bistrot",
  "architecte-interieur",
  "cabinet-avocat",
  "avocate-tel-aviv",
  "agence-immobiliere",
] as const;

const adminOnlySlugs = [
  "double-espresso",
  "balinjera",
  "alex-spa-massage",
] as const;
const labSlugs = [
  "annecyelec",
  "osteopathe-kor-pantin",
  "ruben",
  "nathreparation",
] as const;

export const sitekeptPublicTemplateSlugs = sitekeptPublicSlugs;

export function isSitekeptPublicTemplate(slug: string): boolean {
  return sitekeptPublicSlugs.includes(
    slug as (typeof sitekeptPublicSlugs)[number]
  );
}

function getAdminStatus(slug: string): TemplateAdminStatus {
  if (isSitekeptPublicTemplate(slug)) {
    return "sitekept-public";
  }

  if (adminOnlySlugs.includes(slug as (typeof adminOnlySlugs)[number])) {
    return "admin-only";
  }

  if (labSlugs.includes(slug as (typeof labSlugs)[number])) {
    return "lab";
  }

  return "archived";
}

function withLinks(
  template: Omit<
    AdminTemplateCatalogEntry,
    "adminStatus" | "vercelUrl" | "sitekeptUrl" | "routeStatus"
  > & {
    vercelUrl?: string;
  }
): AdminTemplateCatalogEntry {
  const adminStatus = getAdminStatus(template.slug);

  return {
    ...template,
    adminStatus,
    routeStatus:
      adminStatus === "sitekept-public"
        ? "Live on sitekept.com"
        : adminStatus === "lab"
          ? "Lab only"
          : "Vercel only",
    vercelUrl:
      template.vercelUrl ?? `${TEMPLATE_VERCEL_BASE_URL}/${template.slug}`,
    ...(adminStatus === "sitekept-public"
      ? { sitekeptUrl: `${SITEKEPT_BASE_URL}/${template.slug}` }
      : {}),
  };
}

export const adminTemplateCatalog: AdminTemplateCatalogEntry[] = [
  withLinks({
    slug: "boulangerie",
    name: "Template Boulangerie",
    sector: "Boulangerie",
    notes: "Visible dans le catalogue public SiteKept.",
  }),
  withLinks({
    slug: "fleuriste",
    name: "Template Fleuriste",
    sector: "Floral",
    notes: "Visible dans le catalogue public SiteKept.",
  }),
  withLinks({
    slug: "ordinateur",
    name: "Template Reparation Ordinateur",
    sector: "Réparation tech",
    notes: "Visible dans le catalogue public SiteKept.",
  }),
  withLinks({
    slug: "pattiserie",
    name: "Template Patisserie",
    sector: "Pâtisserie",
    notes: "Visible dans le catalogue public SiteKept.",
  }),
  withLinks({
    slug: "dentiste",
    name: "Template Dentiste",
    sector: "Santé",
    notes: "Visible dans le catalogue public SiteKept.",
  }),
  withLinks({
    slug: "plombier-chauffagiste",
    name: "Template Plombier Chauffagiste",
    sector: "Habitat",
    notes: "Visible dans le catalogue public SiteKept.",
  }),
  withLinks({
    slug: "salon-coiffure",
    name: "Template Salon de coiffure",
    sector: "Beauté",
    notes: "Visible dans le catalogue public SiteKept.",
  }),
  withLinks({
    slug: "menage-nettoyage",
    name: "Template Ménage & Nettoyage",
    sector: "Services à domicile",
    notes: "Visible dans le catalogue public SiteKept.",
  }),
  withLinks({
    slug: "restaurant-bistrot",
    name: "Template Restaurant Bistrot",
    sector: "Restauration",
    notes: "Visible dans le catalogue public SiteKept.",
  }),
  withLinks({
    slug: "architecte-interieur",
    name: "Template Architecte d'intérieur",
    sector: "Architecture intérieure",
    notes: "Visible dans le catalogue public SiteKept.",
  }),
  withLinks({
    slug: "cabinet-avocat",
    name: "Template Cabinet d'avocat",
    sector: "Juridique",
    notes: "Visible dans le catalogue public SiteKept.",
  }),
  withLinks({
    slug: "avocate-tel-aviv",
    name: "Template Avocate Tel Aviv",
    sector: "Juridique",
    notes:
      "Route publique SiteKept disponible, maintenant contrôlée par statut.",
  }),
  withLinks({
    slug: "agence-immobiliere",
    name: "Template Agence immobilière",
    sector: "Immobilier",
    notes: "Visible dans le catalogue public SiteKept.",
  }),
  withLinks({
    slug: "double-espresso",
    name: "Double Espresso",
    sector: "Coffee shop",
    notes: "Accessible hors local via Vercel, non affichée sur sitekept.com.",
  }),
  withLinks({
    slug: "balinjera",
    name: "Balinjera",
    sector: "Restauration",
    notes: "Masquée du catalogue public, conservée pour revue admin.",
  }),
  withLinks({
    slug: "alex-spa-massage",
    name: "Alex Spa Massage",
    sector: "Bien-être",
    vercelUrl:
      "https://sitekept-templates-74vnel8xg-jonathans-projects-8295665d.vercel.app/alex-spa-massage",
    notes:
      "Preview privée Vercel pour Alex Spa Massage, conservée hors catalogue public sitekept.com.",
  }),
  withLinks({
    slug: "annecyelec",
    name: "Annecy Elec",
    sector: "Électricité",
    notes: "Variation lab accessible via Vercel uniquement.",
  }),
  withLinks({
    slug: "osteopathe-kor-pantin",
    name: "Ostéopathe KOR Pantin",
    sector: "Santé",
    notes: "Variation lab accessible via Vercel uniquement.",
  }),
  withLinks({
    slug: "ruben",
    name: "Ruben",
    sector: "Créateur culinaire",
    notes: "Variation lab accessible via Vercel uniquement.",
  }),
  withLinks({
    slug: "nathreparation",
    name: "Nath Reparation",
    sector: "Réparation mobile",
    notes: "Variation lab accessible via Vercel uniquement.",
  }),
];
