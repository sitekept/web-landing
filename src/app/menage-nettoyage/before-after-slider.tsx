"use client";

import { useState } from "react";

export function BeforeAfterSlider() {
  const [value, setValue] = useState(58);

  return (
    <div className="rounded-[22px] border border-[#cfe2e7] bg-white p-6 shadow-[0_24px_70px_rgba(22,56,69,0.08)]">
      <div className="flex items-center justify-between text-xs font-semibold tracking-[0.28em] text-[#2d7785] uppercase">
        <span>Avant</span>
        <span>Après</span>
      </div>

      <div className="relative mt-6 h-[280px] overflow-hidden rounded-[20px] bg-[#dceff3]">
        <div
          className="absolute inset-y-0 left-0 bg-[url('https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=1200&q=80')] bg-cover bg-center"
          style={{ width: `${value}%` }}
        />
        <div
          className="absolute inset-y-0 right-0 bg-[url('https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80')] bg-cover bg-center"
          style={{ width: `${100 - value}%` }}
        />
        <div
          className="absolute inset-y-0 w-1 bg-white shadow-[0_0_0_1px_rgba(22,56,69,0.12)]"
          style={{ left: `calc(${value}% - 2px)` }}
        />
      </div>

      <div className="mt-6">
        <input
          aria-label="Comparer avant et après"
          className="w-full accent-[#163845]"
          max={85}
          min={15}
          type="range"
          value={value}
          onChange={(event) => setValue(Number(event.target.value))}
        />
      </div>

      <p className="mt-4 text-sm leading-7 text-[#163845]/70">
        Ici, la preuve n&rsquo;est pas une galerie décorative. Le slider montre une
        remise au propre lisible, adaptée au langage très pratique de la
        template ménage.
      </p>
    </div>
  );
}
