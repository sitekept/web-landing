"use client";

import {
  useEffect,
  useRef,
  useState,
  type ComponentType,
  type KeyboardEvent,
} from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import type {
  ResourcesMenuItem,
  ResourcesMenuProps,
} from "@/components/navigation-resources-menu";
import { LeadFunnelTrigger } from "@/features/lead-funnel/lead-funnel-trigger";
import { SiteLocale } from "@/content/site-content";

const PRIMARY_ITEMS_BEFORE_RESOURCES = [
  { key: "offers", href: "/offres" },
  { key: "templates", href: "/templates" },
  { key: "realizations", href: "/realization" },
] as const;

const PRIMARY_ITEMS_AFTER_RESOURCES = [
  { key: "contact", href: "/#contact" },
] as const;

const RESOURCE_ITEMS = [
  { key: "blog", href: "/blog" },
  { key: "pricing", href: "/tarifs" },
  { key: "visibility", href: "/seo-geo" },
  { key: "faq", href: "/#faq" },
] as const;

const navigationLabels = {
  fr: {
    offers: "Offres",
    templates: "Templates",
    realizations: "Réalisations",
    resources: "Ressources",
    contact: "Contact",
    blog: "Blog",
    pricing: "Guide des tarifs",
    visibility: "SEO / GEO",
    faq: "FAQ",
    start: "Demander un devis",
    openMenu: "Ouvrir le menu",
    closeMenu: "Fermer le menu",
    brandMeta: "Sites internet sur mesure",
  },
  en: {
    offers: "Plans",
    templates: "Templates",
    realizations: "Our work",
    resources: "Resources",
    contact: "Contact",
    blog: "Blog",
    pricing: "Pricing guide",
    visibility: "SEO / GEO",
    faq: "FAQ",
    start: "Request a quote",
    openMenu: "Open menu",
    closeMenu: "Close menu",
    brandMeta: "Custom websites",
  },
} as const;

const RESOURCES_LIST_ID = "mobile-resources-list";

/**
 * Déclencheur « Ressources » du bureau. Un bouton statique tient la place au
 * chargement ; le menu Radix (module séparé) n'est chargé qu'au premier survol,
 * focus ou appui, puis remplace le bouton à l'identique (mêmes classes, même
 * contenu, aucun saut de mise en page).
 *
 * - Clic, Entrée, Espace ou flèche bas avant la fin du chargement : le menu
 *   s'ouvre dès qu'il est prêt.
 * - Le focus reste sur le déclencheur après le remplacement.
 * - Si le chargement échoue, le bouton statique reste en place et un clic mène
 *   à la première page de Ressources (Blog).
 */
function ResourcesTrigger({
  label,
  items,
  className,
}: {
  label: string;
  items: readonly ResourcesMenuItem[];
  className: string;
}) {
  const router = useRouter();
  const buttonRef = useRef<HTMLButtonElement>(null);
  const loadRef = useRef<Promise<void> | null>(null);
  const hadFocusRef = useRef(false);
  const keyboardRef = useRef(false);
  const [Menu, setMenu] = useState<ComponentType<ResourcesMenuProps> | null>(
    null
  );
  const [openWhenReady, setOpenWhenReady] = useState(false);
  const [pressed, setPressed] = useState(false);
  const pressRef = useRef<{
    controller: AbortController;
    timer?: number;
  } | null>(null);

  // Un seul jeu d'écouteurs d'appui à la fois ; tout est retiré au démontage.
  useEffect(
    () => () => {
      pressRef.current?.controller.abort();
      window.clearTimeout(pressRef.current?.timer);
    },
    []
  );
  const [failed, setFailed] = useState(false);

  const load = () => {
    if (loadRef.current) return;
    loadRef.current = import("@/components/navigation-resources-menu")
      .then((module) => {
        hadFocusRef.current = document.activeElement === buttonRef.current;
        setMenu(() => module.ResourcesMenu);
      })
      .catch(() => setFailed(true));
  };

  const requestOpen = () => {
    if (failed) {
      router.push(items[0].href);
      return;
    }
    setOpenWhenReady(true);
    load();
  };

  const handlePointerDown = () => {
    load();
    keyboardRef.current = false;
    // Garde le bouton en place jusqu'au clic, pour ne pas le perdre en route.
    pressRef.current?.controller.abort();
    window.clearTimeout(pressRef.current?.timer);
    const press = { controller: new AbortController(), timer: undefined as number | undefined };
    pressRef.current = press;
    setPressed(true);
    const release = () => {
      // Retire pointerup et pointercancel d'un coup ; le délai laisse passer le clic.
      press.controller.abort();
      press.timer = window.setTimeout(() => {
        setPressed(false);
        if (pressRef.current === press) pressRef.current = null;
      }, 0);
    };
    window.addEventListener("pointerup", release, { signal: press.controller.signal });
    window.addEventListener("pointercancel", release, { signal: press.controller.signal });
  };

  const handleKeyDown = (event: KeyboardEvent<HTMLButtonElement>) => {
    if (event.key === "ArrowDown" || event.key === "Enter" || event.key === " ") {
      keyboardRef.current = true;
    }
    if (event.key === "ArrowDown") {
      event.preventDefault();
      requestOpen();
    }
  };

  if (Menu && !pressed) {
    return (
      <Menu
        label={label}
        items={items}
        className={className}
        defaultOpen={openWhenReady}
        focusTrigger={hadFocusRef.current}
        openedByKeyboard={keyboardRef.current}
      />
    );
  }

  return (
    <button
      ref={buttonRef}
      type="button"
      aria-haspopup="menu"
      aria-expanded="false"
      className={className}
      onPointerEnter={load}
      onFocus={load}
      onPointerDown={handlePointerDown}
      onKeyDown={handleKeyDown}
      onClick={requestOpen}
    >
      {label}
      <ChevronDown className="h-4 w-4" aria-hidden="true" />
    </button>
  );
}

interface NavigationProps {
  locale: SiteLocale;
}

export function Navigation({ locale }: NavigationProps) {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isResourcesOpen, setIsResourcesOpen] = useState(false);
  const labels = navigationLabels[locale];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 24);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const solidNavigation = pathname !== "/" || isScrolled;
  const navClassName = solidNavigation
    ? "bg-white/95 shadow-sm backdrop-blur-md"
    : "bg-transparent";
  const textClassName = solidNavigation ? "text-slate-700" : "text-slate-200";
  const brandClassName = solidNavigation ? "text-slate-950" : "text-white";
  const menuButtonClassName = solidNavigation ? "text-slate-900" : "text-white";
  const mobileItemClassName =
    "rounded-md px-3 py-2 text-base font-medium text-slate-700 transition-colors hover:bg-blue-50 hover:text-slate-950";
  const resourceMenuItems = RESOURCE_ITEMS.map((item) => ({
    ...item,
    label: labels[item.key],
  }));
  const closePanel = () => {
    setIsOpen(false);
    setIsResourcesOpen(false);
  };

  return (
    <nav className={`fixed top-0 z-50 w-full transition-all duration-300 ${navClassName}`}>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <div className="flex h-8 w-8 items-center justify-center">
              <Image
                src="/logo.png"
                alt=""
                width={32}
                height={32}
                className="rounded-md"
              />
            </div>
            <div className="leading-tight">
              <span className={`block text-lg font-semibold tracking-tight ${brandClassName}`}>
                Sitekept
              </span>
              <span
                className={`hidden text-[10px] uppercase tracking-[0.24em] sm:block ${
                  solidNavigation ? "text-slate-500" : "text-blue-200"
                }`}
              >
                {labels.brandMeta}
              </span>
            </div>
          </Link>

          <div className="hidden items-center gap-8 lg:flex">
            {PRIMARY_ITEMS_BEFORE_RESOURCES.map((item) => (
              <Link
                key={item.key}
                href={item.href}
                className={`text-sm font-medium transition-colors hover:text-blue-600 ${textClassName}`}
              >
                {labels[item.key]}
              </Link>
            ))}
            <ResourcesTrigger
              label={labels.resources}
              items={resourceMenuItems}
              className={`inline-flex items-center gap-1 text-sm font-medium transition-colors hover:text-blue-600 ${textClassName}`}
            />
            {PRIMARY_ITEMS_AFTER_RESOURCES.map((item) => (
              <Link
                key={item.key}
                href={item.href}
                className={`text-sm font-medium transition-colors hover:text-blue-600 ${textClassName}`}
              >
                {labels[item.key]}
              </Link>
            ))}
            <Button
              asChild
              className="bg-blue-600 text-white hover:bg-blue-700"
            >
              <LeadFunnelTrigger>{labels.start}</LeadFunnelTrigger>
            </Button>
          </div>

          <button
            type="button"
            onClick={() => {
              setIsOpen((current) => !current);
              setIsResourcesOpen(false);
            }}
            className={`rounded-md p-2 lg:hidden ${menuButtonClassName}`}
            aria-label={isOpen ? labels.closeMenu : labels.openMenu}
            aria-expanded={isOpen}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {isOpen ? (
          <div className="border-t border-slate-200 bg-white py-4 lg:hidden">
            <div className="space-y-2">
              {PRIMARY_ITEMS_BEFORE_RESOURCES.map((item) => (
                <Link
                  key={item.key}
                  href={item.href}
                  onClick={closePanel}
                  className={`block ${mobileItemClassName}`}
                >
                  {labels[item.key]}
                </Link>
              ))}
              <button
                type="button"
                onClick={() => setIsResourcesOpen((current) => !current)}
                aria-expanded={isResourcesOpen}
                aria-controls={RESOURCES_LIST_ID}
                className={`flex w-full items-center justify-between text-left ${mobileItemClassName}`}
              >
                {labels.resources}
                <ChevronDown className="h-4 w-4" aria-hidden="true" />
              </button>
              <div
                id={RESOURCES_LIST_ID}
                hidden={!isResourcesOpen}
                className="space-y-2 pl-6"
              >
                {RESOURCE_ITEMS.map((item) => (
                  <Link
                    key={item.key}
                    href={item.href}
                    onClick={closePanel}
                    className={`block ${mobileItemClassName}`}
                  >
                    {labels[item.key]}
                  </Link>
                ))}
              </div>
              {PRIMARY_ITEMS_AFTER_RESOURCES.map((item) => (
                <Link
                  key={item.key}
                  href={item.href}
                  onClick={closePanel}
                  className={`block ${mobileItemClassName}`}
                >
                  {labels[item.key]}
                </Link>
              ))}
            </div>
            <div className="mt-4 flex items-center gap-3 px-3">
              <Button
                asChild
                className="flex-1 bg-blue-600 text-white hover:bg-blue-700"
              >
                <LeadFunnelTrigger onClick={closePanel}>
                  {labels.start}
                </LeadFunnelTrigger>
              </Button>
            </div>
          </div>
        ) : null}
      </div>
    </nav>
  );
}
