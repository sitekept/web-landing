import { sitekeptPublicTemplateSlugs } from "@/content/admin-template-catalog";

export const PUBLIC_TEMPLATE_SLUGS = sitekeptPublicTemplateSlugs;

export function isPublicTemplatePathname(pathname: string | null): boolean {
  if (!pathname) {
    return false;
  }

  return PUBLIC_TEMPLATE_SLUGS.some((slug) => {
    const prefix = `/${slug}`;
    return pathname === prefix || pathname.startsWith(`${prefix}/`);
  });
}
