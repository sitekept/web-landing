"use client";

import { useEffect, useRef } from "react";

import { cn } from "@/lib/utils";

type TubesCursorInstance = {
  dispose?: () => void;
};

type TubesCursorFactory = (
  canvas: HTMLCanvasElement,
  options: {
    tubes: {
      colors: string[];
      lights: {
        intensity: number;
        colors: string[];
      };
    };
  }
) => TubesCursorInstance;

interface TubesCursorProps {
  className?: string;
}

const TUBES_CURSOR_MODULE_URL =
  "https://cdn.jsdelivr.net/npm/threejs-components@0.0.19/build/cursors/tubes1.min.js";

export default function TubesCursor({ className }: TubesCursorProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const appRef = useRef<TubesCursorInstance | null>(null);

  useEffect(() => {
    // Ce fond décoratif charge 774 Ko de three.js depuis un CDN tiers et
    // anime en continu un canvas WebGL de ~2,1 M px. On ne le charge donc que
    // là où il a une chance d'être vu sans dégrader l'expérience :
    //  - jamais si l'utilisateur a demandé moins d'animations ;
    //  - jamais sur mobile, où le budget CPU est le plus contraint et où se
    //    jouent les Core Web Vitals ;
    //  - jamais en connexion lente ou en mode économie de données.
    // Sans lui, le hero conserve son dégradé de fond : le rendu reste correct.
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    const isSmallScreen = window.matchMedia("(max-width: 768px)").matches;

    const connection = (
      navigator as Navigator & {
        connection?: { saveData?: boolean; effectiveType?: string };
      }
    ).connection;
    const isConstrainedNetwork =
      connection?.saveData === true ||
      /(^|-)2g$/.test(connection?.effectiveType ?? "");

    if (prefersReducedMotion || isSmallScreen || isConstrainedNetwork) {
      return;
    }

    let isCancelled = false;

    const start = async () => {
      try {
        const tubesModule = (await import(
          /* webpackIgnore: true */ TUBES_CURSOR_MODULE_URL
        )) as { default: TubesCursorFactory };

        if (isCancelled || !canvasRef.current) {
          return;
        }

        // Plafonne le backing store à DPR 1 : en DPR 2 le canvas rendait
        // ~2,1 M px à chaque frame, soit quatre fois la charge GPU utile pour
        // un simple fond décoratif.
        const canvas = canvasRef.current;
        const rect = canvas.getBoundingClientRect();
        canvas.width = Math.round(rect.width);
        canvas.height = Math.round(rect.height);

        appRef.current = tubesModule.default(canvasRef.current, {
          tubes: {
            colors: ["#5e72e4", "#8965e0", "#f5365c"],
            lights: {
              intensity: 200,
              colors: ["#21d4fd", "#b721ff", "#f4d03f", "#11cdef"],
            },
          },
        });
      } catch (error) {
        console.error("Failed to load TubesCursor module:", error);
      }
    };

    // Attend que le navigateur soit inactif plutôt qu'un délai fixe de 100 ms :
    // le téléchargement et la compilation des 774 Ko n'entrent plus en
    // concurrence avec l'hydratation et le premier rendu.
    const idleWindow = window as Window & {
      requestIdleCallback?: (
        callback: () => void,
        options?: { timeout: number }
      ) => number;
      cancelIdleCallback?: (handle: number) => void;
    };

    const handle =
      idleWindow.requestIdleCallback?.(start, { timeout: 2000 }) ??
      window.setTimeout(start, 1500);

    return () => {
      isCancelled = true;
      if (idleWindow.cancelIdleCallback) {
        idleWindow.cancelIdleCallback(handle);
      } else {
        window.clearTimeout(handle);
      }
      appRef.current?.dispose?.();
      appRef.current = null;
    };
  }, []);

  return (
    <div
      aria-hidden="true"
      className={cn(
        "pointer-events-none absolute inset-0 overflow-hidden",
        className
      )}
    >
      <canvas ref={canvasRef} className="absolute inset-0 h-full w-full" />
    </div>
  );
}
