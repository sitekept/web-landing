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
    const reducedMotionQuery = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    );

    if (reducedMotionQuery.matches) {
      return;
    }

    let isCancelled = false;

    const initTimer = window.setTimeout(async () => {
      try {
        const tubesModule = (await import(
          /* webpackIgnore: true */ TUBES_CURSOR_MODULE_URL
        )) as { default: TubesCursorFactory };

        if (isCancelled || !canvasRef.current) {
          return;
        }

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
    }, 100);

    return () => {
      isCancelled = true;
      window.clearTimeout(initTimer);
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
