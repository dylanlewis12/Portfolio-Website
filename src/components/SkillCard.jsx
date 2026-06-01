//SkillCard.jsx
/**
 * SkillCard
 *
 * Props:
 * - title: string (e.g., "Frontend", "Backend", "Data")
 * - items: string[] (e.g., ["React", "TypeScript", "Tailwind"])
 * - icon?: ReactNode (optional leading icon)
 */
export default function SkillCard({ title, items = [], icon = null }) {
  return (
    <div className="rounded-2xl border bg-white p-7 md:p-8">
      <div className="flex items-center gap-3">
        {icon && <div className="text-3xl md:text-4xl">{icon}</div>}
        <h3 className="text-3xl md:text-4xl font-semibold tracking-tight capitalize">
          {title}
        </h3>
      </div>

      <ul className="mt-3 grid gap-2 text-2xl md:text-3xl text-neutral-700">
        {items.map((i) => (
          <li key={i} className="flex items-center gap-3">
            <span className="h-2 w-2 rounded-full bg-neutral-800" />
            {i}
          </li>
        ))}
      </ul>
    </div>
  );
}
