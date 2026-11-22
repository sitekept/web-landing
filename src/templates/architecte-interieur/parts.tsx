import Link from "next/link";
import type { ReactNode } from "react";

/** Éléments communs aux vues du template architecte-interieur. */

export const EYEBROW =
  "text-tpl-xs font-semibold tracking-tpl-eyebrow text-tpl-eyebrow uppercase";

const FOCUS =
  "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-tpl-ink";

/** Ligne de sommaire : repère, titre de chapitre, courte phrase, lien vers la suite. */
export function EntryRow({
  href,
  label,
  title,
  text,
  action,
  tinted = false,
}: {
  href: string;
  label: string;
  title: string;
  text: string;
  /** Mot de renvoi à droite (« Lire ») : absent, la ligne n'a que deux colonnes. */
  action?: string;
  tinted?: boolean;
}) {
  return (
    <Link
      href={href}
      className={`group grid gap-4 rounded-tpl border border-tpl-line p-6 transition hover:bg-tpl-surface ${FOCUS} ${
        action ? "lg:grid-cols-[120px_1fr_auto]" : "lg:grid-cols-[120px_1fr]"
      } ${tinted ? "bg-tpl-tint" : ""}`}
    >
      <p className={EYEBROW}>{label}</p>
      <div>
        <h3 className="font-tpl-display text-tpl-xl leading-tpl-display font-(weight:--tpl-display-weight)">
          {title}
        </h3>
        <p className="mt-3 text-tpl-sm leading-7 text-tpl-ink-muted">{text}</p>
      </div>
      {action ? (
        <div className="self-start text-tpl-sm font-semibold text-tpl-ink-muted transition group-hover:text-tpl-ink">
          {action}
        </div>
      ) : null}
    </Link>
  );
}

/** Texte courant d'un panneau. */
export function PanelText({ children }: { children: ReactNode }) {
  return <p className="text-tpl-sm leading-7 text-tpl-ink-muted">{children}</p>;
}
