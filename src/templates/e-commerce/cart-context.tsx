"use client";

import Link from "next/link";
import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
  type ReactNode,
} from "react";

import { ECOMMERCE_PRODUCTS } from "@/content/templates/e-commerce";

/**
 * Panier du template e-commerce, côté navigateur uniquement.
 *
 * L'état (`{ idProduit: quantité }`) vit dans un contexte posé par le layout de
 * la boutique : il survit à la navigation entre les pages, et il est recopié
 * dans `localStorage` pour survivre à un rechargement. Chaque accès au stockage
 * est protégé (navigation privée, stockage bloqué) : sans lui, le panier marche
 * le temps de la visite. Rien n'est envoyé à un serveur.
 *
 * Chaque ajout est annoncé par `CartToast` (bulle `role="status"` avec un lien
 * vers le panier).
 */

const STORAGE_KEY = "sitekept-demo-e-commerce-cart";
const MAX_QTY = 20;

/** Quantité commandable : bornée au stock et à `MAX_QTY`. */
function maxFor(id: string): number {
  const item = ECOMMERCE_PRODUCTS.find((entry) => entry.id === id);
  return item ? Math.min(item.stock, MAX_QTY) : 0;
}

export type CartLines = Record<string, number>;

type CartContextValue = {
  lines: CartLines;
  /** Faux tant que le panier enregistré n'a pas été relu (premier rendu). */
  ready: boolean;
  count: number;
  add: (id: string, qty?: number) => void;
  setQty: (id: string, qty: number) => void;
  remove: (id: string) => void;
  clear: () => void;
  /** Dernier ajout, affiché par `CartToast` pendant quelques secondes. */
  toast: { id: string; key: number } | null;
};

const CartContext = createContext<CartContextValue | null>(null);

export function useCart(): CartContextValue {
  const value = useContext(CartContext);
  if (!value) throw new Error("useCart doit être utilisé sous CartProvider.");
  return value;
}

function readStorage(): CartLines {
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return {};
    const parsed: unknown = JSON.parse(raw);
    if (!parsed || typeof parsed !== "object") return {};
    const lines: CartLines = {};
    for (const [id, qty] of Object.entries(parsed)) {
      const max = maxFor(id);
      if (typeof qty === "number" && max > 0) {
        lines[id] = Math.max(1, Math.min(Math.floor(qty), max));
      }
    }
    return lines;
  } catch {
    return {};
  }
}

function writeStorage(lines: CartLines) {
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(lines));
  } catch {
    // Stockage indisponible : le panier reste en mémoire.
  }
}

export function CartProvider({ children }: { children: ReactNode }) {
  const [lines, setLines] = useState<CartLines>({});
  const [ready, setReady] = useState(false);
  const [toast, setToast] = useState<{ id: string; key: number } | null>(null);
  const timer = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);

  useEffect(() => {
    setLines(readStorage());
    setReady(true);
  }, []);

  useEffect(() => {
    if (ready) writeStorage(lines);
  }, [lines, ready]);

  useEffect(() => () => clearTimeout(timer.current), []);

  const add = useCallback((id: string, qty = 1) => {
    const max = maxFor(id);
    if (max <= 0) return;
    setLines((current) => ({
      ...current,
      [id]: Math.min((current[id] ?? 0) + qty, max),
    }));
    setToast({ id, key: Date.now() });
    clearTimeout(timer.current);
    timer.current = setTimeout(() => setToast(null), 4000);
  }, []);

  const setQty = useCallback((id: string, qty: number) => {
    setLines((current) => {
      const next = { ...current };
      const bounded = Math.min(Math.floor(qty), maxFor(id));
      if (bounded <= 0) delete next[id];
      else next[id] = bounded;
      return next;
    });
  }, []);

  const remove = useCallback((id: string) => {
    setLines((current) => {
      const next = { ...current };
      delete next[id];
      return next;
    });
  }, []);

  const clear = useCallback(() => setLines({}), []);

  const value = useMemo<CartContextValue>(
    () => ({
      lines,
      ready,
      count: Object.values(lines).reduce((sum, qty) => sum + qty, 0),
      add,
      setQty,
      remove,
      clear,
      toast,
    }),
    [lines, ready, add, setQty, remove, clear, toast]
  );

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

/**
 * Bulle d'ajout au panier (`role="status"`), à poser DANS le shell (sous
 * `[data-template]`, pour les tokens) : au-dessus de la barre d'actions mobile.
 */
export function CartToast({
  names,
  cartHref,
  labels,
}: {
  /** Nom de chaque produit dans la langue de la page. */
  names: Record<string, string>;
  cartHref: string;
  labels: { added: string; view: string };
}) {
  const { toast } = useCart();

  return (
    <div
      role="status"
      className="pointer-events-none fixed inset-x-4 bottom-24 z-50 flex justify-center sm:inset-x-auto sm:right-6 xl:bottom-6"
    >
      {toast ? (
        <div
          key={toast.key}
          data-tone="inverse"
          className="pointer-events-auto flex items-center gap-4 rounded-tpl bg-tpl-surface px-4 py-3 text-tpl-sm text-tpl-ink shadow-tpl-lg motion-safe:animate-in motion-safe:fade-in"
        >
          <span>{labels.added.replace("{name}", names[toast.id] ?? "")}</span>
          <Link
            href={cartHref}
            className="inline-flex min-h-11 items-center font-semibold underline underline-offset-4 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-tpl-ink"
          >
            {labels.view}
          </Link>
        </div>
      ) : null}
    </div>
  );
}
