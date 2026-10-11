/**
 * Renders content that may still be a "TODO: ..." placeholder.
 * Real content renders normally; placeholders render as a visible
 * highlighted note so unfinished copy is obvious before launch.
 */
export function isTodo(value: string | undefined | null): boolean {
  return !value || value.trim().startsWith("TODO");
}

export function Text({
  value,
  className,
}: {
  value: string | undefined | null;
  className?: string;
}) {
  if (isTodo(value)) {
    return <span className="todo">{value || "TODO: add content"}</span>;
  }
  return <span className={className}>{value}</span>;
}
