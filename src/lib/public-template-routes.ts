export const PUBLIC_TEMPLATE_SLUGS = [
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
  "agence-immobiliere",
] as const;

export function isPublicTemplatePathname(pathname: string | null): boolean {
  if (!pathname) {
    return false;
  }

  return PUBLIC_TEMPLATE_SLUGS.some((slug) => {
    const prefix = `/${slug}`;
    return pathname === prefix || pathname.startsWith(`${prefix}/`);
  });
}
