//CertificationCard.jsx
import { FaExternalLinkAlt } from "react-icons/fa";

/**
 * CertificationCard
 *
 * Props:
 * - title: string (e.g., "AWS Certified Solutions Architect – Associate")
 * - issuer: string (e.g., "Amazon Web Services")
 * - date: string (e.g., "Issued Jul 2024")
 * - verifyUrl?: string (link to credential)
 * - credentialId?: string
 * - logo?: string (image URL or import)
 * - skills?: string[] (related skills/keywords)
 */
export default function CertificationCard({
  title,
  issuer,
  date,
  verifyUrl,
  credentialId,
  logo,
  skills = [],
}) {
  return (
    <article className="rounded-3xl border bg-white p-7 md:p-8">
      {/* Header */}
      <div className="flex items-center gap-5">
        {logo ? (
          <img
            src={logo}
            alt={`${issuer} logo`}
            className="h-16 w-16 md:h-20 md:w-20 rounded-xl object-contain ring-1 ring-black/10"
            loading="lazy"
            decoding="async"
          />
        ) : (
          <div className="h-16 w-16 md:h-20 md:w-20 rounded-xl grid place-items-center bg-neutral-100 ring-1 ring-black/10">
            <span className="text-2xl md:text-3xl">🏅</span>
          </div>
        )}

        <div className="min-w-0">
          <h3 className="text-3xl md:text-4xl font-semibold tracking-tight leading-tight">
            {title}
          </h3>
          <p className="text-2xl md:text-3xl text-neutral-600 leading-snug">
            {issuer}
          </p>
          <p className="text-xl md:text-2xl text-neutral-500">{date}</p>
        </div>
      </div>

      {/* Details */}
      {(credentialId || skills.length > 0) && (
        <div className="mt-5">
          {credentialId && (
            <p className="text-xl md:text-2xl text-neutral-700">
              <span className="text-neutral-500">Credential ID:</span> {credentialId}
            </p>
          )}

          {skills.length > 0 && (
            <ul className="mt-4 flex flex-wrap gap-2">
              {skills.map((s) => (
                <li
                  key={s}
                  className="rounded-full border px-4 py-1.5 text-lg md:text-xl"
                >
                  {s}
                </li>
              ))}
            </ul>
          )}
        </div>
      )}

      {/* Actions */}
      {verifyUrl && (
        <div className="mt-6">
          <a
            href={verifyUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-xl border px-6 py-3 text-lg md:text-xl hover:bg-neutral-100"
          >
            View credential <FaExternalLinkAlt />
          </a>
        </div>
      )}
    </article>
  );
}
