// src/components/Navbar.jsx
import resumePdf from '../assets/Dylan-Lewis-Resume.pdf'

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b">
      <div className="mx-auto max-w-[1800px] px-8 md:px-10">
        {/* Taller bar */}
        <nav className="h-24 md:h-28 flex items-center justify-between">
          {/* Bigger brand */}
          <a
            href="#top"
            className="text-2xl md:text-3xl font-semibold leading-none tracking-tight hover:opacity-80"
          >
            Dylan Lewis
          </a>

          {/* Bigger link text + larger Resume button */}
          <ul className="hidden sm:flex items-center gap-7 md:gap-10 text-lg md:text-xl">
            <li>
              <a className="px-5 py-3 rounded-xl hover:bg-neutral-100" href="#projects">
                Projects
              </a>
            </li>
            <li>
              <a className="px-5 py-3 rounded-xl hover:bg-neutral-100" href="#skills">
                Skills
              </a>
            </li>
            <li>
              <a className="px-5 py-3 rounded-xl hover:bg-neutral-100" href="#contact">
                Contact
              </a>
            </li>
            <li>
              <a className="px-5 py-3 rounded-xl hover:bg-neutral-100" 
                href={resumePdf}
                target="_blank"
                rel="noopener noreferrer"
              >
                Resume
              </a>
            </li>
          </ul>

          {/* Mobile menu button (larger tap target) */}
          <button className="sm:hidden p-4 rounded-xl hover:bg-neutral-100" aria-label="Open menu">
            ☰
          </button>
        </nav>
      </div>
    </header>
  )
}
