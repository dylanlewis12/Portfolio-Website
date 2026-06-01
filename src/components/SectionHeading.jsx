export default function SectionHeading({ title, subtitle }) {
  return (
    <div>
      <h2 className="text-xl md:text-4xl font-semibold tracking-tight">{title}</h2>
      {subtitle && <p className="mt-2 text-neutral-600">{subtitle}</p>}
    </div>
  )
}
