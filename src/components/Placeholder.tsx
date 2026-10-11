/**
 * Stand-in for a photo. Shows the aspect ratio and a short label saying
 * what belongs there, so the layout is real before the images exist.
 */
export default function Placeholder({
  label,
  ratio = "16/9",
  className = "",
}: {
  label: string;
  ratio?: string;
  className?: string;
}) {
  return (
    <div
      style={{ aspectRatio: ratio }}
      className={`placeholder flex items-center justify-center rounded-xl p-6 ${className}`}
    >
      <span className="eyebrow text-center">{label}</span>
    </div>
  );
}
