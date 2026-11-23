import { TemplateLink } from "@/components/template-kit";
import { TemplateMedia } from "@/components/template-kit/media";

import { TINT } from "./parts";

type Listing = {
  image: { src: string; alt: string };
  kind: string;
  status: string;
  title: string;
  place: string;
  specs: readonly string[];
  price: string;
  opinion: string;
  cta: string;
};

/** Fiche d'un bien : photo, caractéristiques, prix et avis de l'agent. */
export function ListingCard({
  item,
  opinionLabel,
  href,
}: {
  item: Listing;
  opinionLabel: string;
  href: string;
}) {
  return (
    <article className="flex w-full flex-col overflow-hidden rounded-tpl border border-tpl-line bg-tpl-surface">
      <div className="relative">
        <TemplateMedia
          src={item.image.src}
          alt={item.image.alt}
          ratio="4/3"
          rounded="none"
          sizes="(min-width: 1344px) 403px, (min-width: 1024px) calc(33.33vw - 45px), (min-width: 768px) calc(50vw - 38px), calc(100vw - 34px)"
        />
        <span className="absolute top-3 left-3 rounded-tpl bg-tpl-inverse px-2.5 py-1 text-tpl-xs font-semibold text-tpl-inverse-ink">
          {item.status}
        </span>
      </div>
      <div className="flex flex-1 flex-col p-6">
        <p className="text-tpl-xs font-semibold tracking-tpl-eyebrow text-tpl-accent uppercase">
          {item.kind}
        </p>
        <h3 className="mt-2 font-tpl-display text-tpl-lg leading-tpl-display font-(weight:--tpl-display-weight) text-balance">
          {item.title}
        </h3>
        <p className="mt-1 text-tpl-sm text-tpl-ink-muted">{item.place}</p>
        <ul className="mt-4 flex flex-wrap divide-x divide-tpl-line text-tpl-sm">
          {item.specs.map((spec) => (
            <li key={spec} className="px-3 first:pl-0 last:pr-0">
              {spec}
            </li>
          ))}
        </ul>
        <p className="mt-5 font-tpl-display text-tpl-xl leading-tpl-display font-(weight:--tpl-display-weight)">
          {item.price}
        </p>
        <div className={`mt-5 flex-1 rounded-tpl p-4 text-tpl-sm ${TINT}`}>
          <p className="text-tpl-xs font-semibold tracking-tpl-eyebrow text-tpl-ink-muted uppercase">
            {opinionLabel}
          </p>
          <p className="mt-2">{item.opinion}</p>
        </div>
        <div className="mt-5">
          <TemplateLink href={href} variant="outline" size="sm">
            {item.cta}
          </TemplateLink>
        </div>
      </div>
    </article>
  );
}
