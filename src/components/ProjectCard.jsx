// src/components/ProjectCard.jsx
export default function ProjectCard({
  title,
  blurb,
  tags = [],
  highlights = [],
  image,
  link,
  code,
  // Optional per-card controls
  imageFit = "cover",        // "cover" | "contain"
  imageBg = "bg-white",      // useful when using object-contain with transparent PNGs
  aspect = "16/9",           // "16/9" | "4/3" | "1/1" etc.
}) {
  const aspectClass =
    aspect === "1/1" ? "aspect-square"
    : aspect === "4/3" ? "aspect-[4/3]"
    : aspect === "21/9" ? "aspect-[21/9]"
    : "aspect-[16/9]"; // default

  const fitClass = imageFit === "contain" ? "object-contain" : "object-cover";

  return (
    <article className="rounded-3xl border bg-white overflow-hidden">
      {image && (
        <figure className={`relative w-full ${imageFit === "contain" ? imageBg : ""}`}>
          {/* Lock the media box to a consistent ratio */}
          <div className={`${aspectClass} w-full`}>
            <img
              src={image}
              alt={title}
              className={`h-full w-full ${fitClass}`}
              loading="lazy"
              decoding="async"
            />
          </div>
        </figure>
      )}

      <div className="p-7 md:p-8">
        <h3 className="text-2xl md:text-3xl font-semibold tracking-tight">{title}</h3>

        {blurb && (
          <p className="mt-2 text-xl md:text-2xl text-neutral-700">
            {blurb}
          </p>
        )}

        {tags.length > 0 && (
          <ul className="mt-4 flex flex-wrap gap-2">
            {tags.map((t) => (
              <li key={t} className="rounded-full border px-4 py-1.5 text-lg md:text-xl">
                {t}
              </li>
            ))}
          </ul>
        )}

        {highlights.length > 0 && (
          <ul className="mt-5 grid gap-2 list-disc pl-6 text-lg md:text-2xl">
            {highlights.map((h) => (
              <li key={h}>{h}</li>
            ))}
          </ul>
        )}

        <div className="mt-6 flex gap-3">
          {link && (
            <a
              href={link}
              className="px-6 py-3 rounded-xl border text-lg md:text-xl hover:bg-neutral-100"
            >
              Live
            </a>
          )}
          {code && (
            <a
              href={code}
              className="px-6 py-3 rounded-xl border text-lg md:text-xl hover:bg-neutral-100"
            >
              Code
            </a>
          )}
        </div>
      </div>
    </article>
  );
}
