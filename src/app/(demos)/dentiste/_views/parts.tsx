import type { LucideIcon } from "lucide-react";
import type { ReactNode } from "react";

import { TemplateCard, type TemplateCardElevation } from "@/components/template-kit";

/**
 * Carte à icône, partagée par les vues du cabinet. Aucun texte : tout vient de
 * la copie (`src/content/templates/dentiste.ts`).
 *
 * `inverse` pose la carte sur le fond inverse du template (`data-tone`, qui
 * rebinde les tokens d'encre et de surface pour les descendants).
 */
export function IconCard({
  icon: Icon,
  title,
  children,
  inverse = false,
  elevation = "flat",
  className,
}: {
  icon: LucideIcon;
  title: string;
  children: ReactNode;
  inverse?: boolean;
  elevation?: TemplateCardElevation;
  className?: string;
}) {
  const card = (
    <TemplateCard
      title={
        <span className="flex flex-col items-start gap-4">
          <Icon
            aria-hidden="true"
            className={
              inverse ? "size-5 text-tpl-ink" : "size-5 text-tpl-ink-muted"
            }
          />
          <span>{title}</span>
        </span>
      }
      elevation={elevation}
      className={`h-full ${className ?? ""}`}
    >
      {children}
    </TemplateCard>
  );

  return inverse ? (
    <div data-tone="inverse" className="h-full">
      {card}
    </div>
  ) : (
    card
  );
}
