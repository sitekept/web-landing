/** Un soin de la carte : nom, description, remarque éventuelle, durées et prix alignés. */
export function TreatmentRow({
  item,
}: {
  item: {
    name: string;
    text: string;
    note: string;
    options: readonly { duration: string; price: string }[];
  };
}) {
  return (
    <li className="grid gap-5 py-8 sm:grid-cols-[1fr_11rem] sm:gap-10">
      <div>
        <h3 className="font-tpl-display text-tpl-xl font-(weight:--tpl-display-weight) text-balance">
          {item.name}
        </h3>
        <p className="mt-3 max-w-tpl-measure text-tpl-sm text-tpl-ink-muted">
          {item.text}
        </p>
        {item.note ? (
          <p className="mt-3 text-tpl-xs text-tpl-accent">{item.note}</p>
        ) : null}
      </div>
      <ul className="flex flex-col gap-2 self-start tabular-nums">
        {item.options.map((option) => (
          <li
            key={option.duration}
            className="flex items-baseline justify-between gap-6 border-b border-tpl-line pb-2 last:border-b-0 last:pb-0"
          >
            <span className="text-tpl-sm text-tpl-ink-muted">
              {option.duration}
            </span>
            <span className="font-tpl-display text-tpl-lg text-tpl-ink">
              {option.price}
            </span>
          </li>
        ))}
      </ul>
    </li>
  );
}
