"use client";

import { useEffect, useRef } from "react";
import { ChevronDown } from "lucide-react";
import Link from "next/link";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export interface ResourcesMenuItem {
  key: string;
  href: string;
  label: string;
}

export interface ResourcesMenuProps {
  label: string;
  items: readonly ResourcesMenuItem[];
  /** Classes du déclencheur : identiques à celles du bouton statique de la navigation. */
  className: string;
  /** Ouvre le menu dès le montage (clic fait avant la fin du chargement). */
  defaultOpen?: boolean;
  /** Rend le focus au déclencheur au montage (le bouton statique l'avait). */
  focusTrigger?: boolean;
  /** Ouverture demandée au clavier : le focus va au premier lien, comme Radix le fait seul. */
  openedByKeyboard?: boolean;
}

/**
 * Menu déroulant « Ressources » (Radix). Ce module est chargé à la demande par
 * `navigation.tsx` (import dynamique au premier survol, focus ou appui), pour
 * ne pas alourdir le chargement initial des pages.
 *
 * modal={false} : pas de verrou de défilement ni de pointer-events sur le body,
 * donc aucun décalage de la barre fixe à l'ouverture.
 */
export function ResourcesMenu({
  label,
  items,
  className,
  defaultOpen = false,
  focusTrigger = false,
  openedByKeyboard = false,
}: ResourcesMenuProps) {
  const triggerRef = useRef<HTMLButtonElement>(null);
  const firstItemRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    if (focusTrigger && !defaultOpen) triggerRef.current?.focus();
  }, [focusTrigger, defaultOpen]);

  useEffect(() => {
    if (!defaultOpen || !openedByKeyboard) return;
    // Radix met le focus sur le conteneur quand le menu s'ouvre au montage ;
    // au clavier, on le place sur le premier lien, comme à l'ouverture normale.
    const frame = window.requestAnimationFrame(() => {
      firstItemRef.current?.focus();
    });
    return () => window.cancelAnimationFrame(frame);
  }, [defaultOpen, openedByKeyboard]);

  return (
    <DropdownMenu modal={false} defaultOpen={defaultOpen}>
      <DropdownMenuTrigger ref={triggerRef} className={className}>
        {label}
        <ChevronDown className="h-4 w-4" aria-hidden="true" />
      </DropdownMenuTrigger>
      <DropdownMenuContent align="start">
        {items.map((item, index) => (
          <DropdownMenuItem key={item.key} asChild>
            <Link href={item.href} ref={index === 0 ? firstItemRef : undefined}>
              {item.label}
            </Link>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
