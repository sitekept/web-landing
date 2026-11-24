"use client";

import { Search } from "lucide-react";
import { useId } from "react";

import { SEARCH_INPUT, chipClass } from "./crm-ui";

/**
 * Barre d'outils des tableaux du CRM : puces de filtre (`aria-pressed`, avec
 * compteur facultatif) et champ de recherche à libellé masqué.
 */
export function CrmToolbar<Key extends string>({
  filterLabel,
  options,
  value,
  onChange,
  searchLabel,
  searchPlaceholder,
  query,
  onQuery,
}: {
  filterLabel: string;
  options: readonly { key: Key; label: string; count?: number }[];
  value: Key;
  onChange: (key: Key) => void;
  searchLabel: string;
  searchPlaceholder: string;
  query: string;
  onQuery: (query: string) => void;
}) {
  const searchId = useId();

  return (
    <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
      <div
        role="group"
        aria-label={filterLabel}
        className="flex flex-wrap gap-2"
      >
        {options.map((option) => (
          <button
            key={option.key}
            type="button"
            aria-pressed={value === option.key}
            onClick={() => onChange(option.key)}
            className={chipClass(value === option.key)}
          >
            {option.label}
            {option.count === undefined ? null : (
              <span className="tabular-nums opacity-70">{option.count}</span>
            )}
          </button>
        ))}
      </div>
      <div className="relative lg:w-72">
        <label htmlFor={searchId} className="sr-only">
          {searchLabel}
        </label>
        <Search
          aria-hidden="true"
          className="pointer-events-none absolute top-1/2 left-3 size-4 -translate-y-1/2 text-tpl-ink-muted"
        />
        <input
          id={searchId}
          type="search"
          value={query}
          onChange={(event) => onQuery(event.target.value)}
          placeholder={searchPlaceholder}
          className={SEARCH_INPUT}
        />
      </div>
    </div>
  );
}
