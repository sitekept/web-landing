import { Minus, Plus } from "lucide-react";

import { SMALL_BUTTON } from "./crm-ui";
import { fill } from "./lib";

/** Ajustement d'une ligne de stock : −1, +1 et réassort (deux fois le seuil). */
export function StockActions({
  name,
  stock,
  restock,
  onChange,
  labels,
}: {
  name: string;
  stock: number;
  restock: number;
  onChange: (delta: number) => void;
  labels: {
    decrease: string;
    increase: string;
    restock: string;
    restockNamed: string;
  };
}) {
  return (
    <div className="flex items-center gap-1.5">
      <button
        type="button"
        className={`${SMALL_BUTTON} w-9 px-0`}
        onClick={() => onChange(-1)}
        disabled={stock <= 0}
        aria-label={fill(labels.decrease, { name: name })}
      >
        <Minus aria-hidden="true" className="size-3.5" />
      </button>
      <button
        type="button"
        className={`${SMALL_BUTTON} w-9 px-0`}
        onClick={() => onChange(1)}
        aria-label={fill(labels.increase, { name: name })}
      >
        <Plus aria-hidden="true" className="size-3.5" />
      </button>
      <button
        type="button"
        className={SMALL_BUTTON}
        onClick={() => onChange(restock)}
        aria-label={fill(labels.restockNamed, {
          n: restock,
          name: name,
        })}
      >
        {fill(labels.restock, { n: restock })}
      </button>
    </div>
  );
}
