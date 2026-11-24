import { notFound } from "next/navigation";

import { ECOMMERCE_PRODUCTS } from "@/content/templates/e-commerce";
import { buildProductMetadata } from "@/templates/e-commerce/product-metadata";
import { isProductId } from "@/templates/e-commerce/lib";
import { ProductView } from "@/templates/e-commerce/product";

/** Fiche produit, une page statique par produit du catalogue. */
export const dynamicParams = false;

export function generateStaticParams() {
  return ECOMMERCE_PRODUCTS.map((item) => ({ id: item.id }));
}

type Props = { params: Promise<{ id: string }> };

export async function generateMetadata({ params }: Props) {
  const { id } = await params;
  return isProductId(id) ? buildProductMetadata(id, "en") : {};
}

export default async function Page({ params }: Props) {
  const { id } = await params;
  if (!isProductId(id)) notFound();
  return <ProductView locale="en" id={id} />;
}
