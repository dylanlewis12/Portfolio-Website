import { useMemo } from 'react'
import { motion } from 'framer-motion'
import SectionHeading from './components/SectionHeading.jsx'
import ProjectCard from './components/ProjectCard.jsx'
import { projects } from './data/projects.js'
import { skills } from './data/skills.js'
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa"
import headshot from "./assets/me.png"
import resumePdf from "./assets/Dylan-Lewis-Resume.pdf"

const NAME = 'Dylan Lewis'
const TITLE = "Hi, I'm Dylan Lewis, \nSoftware Engineer"
const TAGLINE = 'Wayne State CS graduate seeking a full-time SWE role; I build reliable, data-driven web apps.'
const EMAIL = 'dylanmlewis12@gmail.com'
const GITHUB = 'https://github.com/dylanlewis12'
const LINKEDIN = 'https://www.linkedin.com/in/the-dylanlewis'

const FadeIn = ({ children, delay = 0 }) => (
  <motion.div
    initial={{ opacity: 0, y: 16 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: '-100px' }}
    transition={{ duration: 0.6, delay }}
  >
    {children}
  </motion.div>
)

export default function Portfolio() {
  const year = useMemo(() => new Date().getFullYear(), [])

  return (
    // ↑ bigger base font everywhere in this file
    <main className="min-h-screen text-lg md:text-2xl">
      {/* HERO */}
      <section id="top" className="relative">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(60%_40%_at_50%_-20%,theme(colors.indigo.100),transparent)]" />
        <div className="mx-auto max-w-[1800px] px-4 py-12 md:py-16">
          <FadeIn>
            {/* One grid controls ALL vertical spacing */}
            <div className="grid md:grid-cols-[1fr_auto] grid-rows-[auto_auto_auto_auto] items-center gap-x-0 lg:gap-x-2 gap-y-0">
              {/* Row 1: Eyebrow (larger) */}
              <p className="text-sm md:text-base uppercase tracking-[0.2em] text-neutral-500 col-start-1 row-start-1 mb-0">
                Open to SWE / Cloud / Data roles
              </p>

              {/* Row 1–4: Headshot */}
              <img
                src={headshot}
                alt="Dylan Lewis headshot"
                className="hidden md:block
                w-[24rem] h-[24rem]
                lg:w-[25rem] lg:h-[25rem]
                xl:w-[28rem] xl:h-[28rem]
                rounded-full object-cover ring-1 ring-black/10 shadow-lg
                col-start-2 row-span-4
                md:self-center md:justify-self-start
                md:-translate-x-[3rem] lg:-translate-x-[5rem] xl:-translate-x-[6.5rem]"
              loading="eager"
              decoding="async"
              />
              {/* Row 2: Title (larger) */}
              <h1 className="text-5xl md:text-5xl font-bold tracking-tight leading-[1.03] col-start-1 row-start-2 whitespace-pre-line leading-tight">
                {TITLE}
              </h1>
              {/* Row 3: Tagline (larger) */}
              <p className="max-w-2xl text-xl md:text-2xl text-neutral-700 col-start-1 row-start-3 mt-0">
                {TAGLINE}
              </p>
              {/* Row 4: CTAs (larger text) */}
              <div className="flex flex-wrap gap-2 col-start-1 row-start-4 mt-0">
                {/*
                <a
                  href="#projects"
                  className="rounded-xl bg-black text-white px-6 py-3 text-base md:text-lg font-medium hover:opacity-90"
                >
                  Projects
                </a>
                */}
                <a
                  href={`mailto:${EMAIL}`}
                  className="rounded-2xl border px-6 py-3 text-base md:text-lg font-medium hover:bg-neutral-100"
                >
                  <FaEnvelope size={24} />
                </a>
                <a
                  href={GITHUB}
                  className="rounded-2xl border px-6 py-3 text-base md:text-lg font-medium hover:bg-neutral-100"
                >
                  <FaGithub size={24} />
                </a>
                <a
                  href={LINKEDIN}
                  className="rounded-2xl border px-6 py-3 text-base md:text-lg font-medium hover:bg-neutral-100"
                >
                  <FaLinkedin size={24} />
                </a>
                <a
                  href={resumePdf}
                  className="rounded-2xl border px-6 py-3 text-base md:text-lg font-medium hover:bg-neutral-100"
                >
                  Resume
                </a>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
      {/* PROJECTS */}
      <section id="projects" className="mx-auto max-w-[1800px] px-4 pt-8 pb-14 md:pt-10 md:pb-16">
        <FadeIn>
          <SectionHeading
            title="Featured Projects"
            subtitle="2–4 high-impact, resume-ready builds. Focus on outcomes."
          />
        </FadeIn>
        <div className="mt-6 grid gap-8 md:grid-cols-2">
          {projects.map((p, i) => (
            <FadeIn key={p.title} delay={i * 0.08}>
              <ProjectCard {...p} />
            </FadeIn>
          ))}
        </div>
      </section>
      {/* SKILLS */}
      <section id="skills" className="mx-auto max-w-[1800px] px-4 pt-10 pb-16 md:pt-12 md:pb-16">
        <FadeIn>
          <SectionHeading title="Skills" />
        </FadeIn>
        <div className="mt-5 grid gap-5 sm:grid-cols-2 md:grid-cols-4">
          {Object.entries(skills).map(([group, items]) => (
            <div key={group} className="rounded-2xl border bg-white p-6">
              <h3 className="text-lg md:text-2xl font-semibold tracking-tight capitalize">{group}</h3>
              <ul className="mt-2 text-base md:text-xl text-neutral-700 grid gap-1.5">
                {items.map((i) => (
                  <li key={i} className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-neutral-800" />
                    {i}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
      {/* CERTIFICATIONS */}
      <section id="certifications" className="mx-auto max-w-[1800px] px-4 pt-10 pb-16 md:pt-12 md:pb-16">
        <FadeIn>
          <SectionHeading title="Certifications" />
        </FadeIn>
        <div className="mt-5 grid gap-5 sm:grid-cols-2 md:grid-cols-4">
          {Object.entries(skills).map(([group, items]) => (
            <div key={group} className="rounded-2xl border bg-white p-6">
              <h3 className="text-lg md:text-2xl font-semibold tracking-tight capitalize">{group}</h3>
              <ul className="mt-2 text-base md:text-xl text-neutral-700 grid gap-1.5">
                {items.map((i) => (
                  <li key={i} className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-neutral-800" />
                    {i}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
      {/* CONTACT */}
      <section id="contact" className="mx-auto max-w-[1800px] px-4 pt-10 pb-16 md:pt-12 md:pb-16">
        <FadeIn>
          <div className="rounded-3xl border bg-gradient-to-br from-white to-neutral-50 p-8 md:p-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div>
              <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">Contact Me</h2>
              <p className="mt-2 max-w-xl text-neutral-700 md:text-xl">
                Open to roles, contract work, and collabs—email me or connect on LinkedIn.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <a href={`mailto:${EMAIL}`} className="rounded-2xl border px-6 py-3 text-base md:text-lg font-medium hover:bg-neutral-100"><FaEnvelope size={24} /></a>
              <a href={LINKEDIN} className="rounded-2xl border px-6 py-3 text-base md:text-lg font-medium hover:bg-neutral-100"><FaLinkedin size={24} /></a>
            </div>
          </div>
        </FadeIn>
      </section>
      {/* FOOTER */}
      <footer className="border-t">
        <div className="mx-auto max-w-[1800px] px-4 py-8 text-base md:text-lg text-neutral-600 flex flex-col md:flex-row items-center justify-between gap-3">
          <span>© {year} {NAME}</span>
          <div className="flex items-center gap-5">
            <a className="rounded-l border px-6 py-3 text-base md:text-lg font-medium hover:bg-neutral-100" href={GITHUB} aria-label="GitHub"><FaGithub /></a>
            <a className="rounded-l border px-6 py-3 text-base md:text-lg font-medium hover:bg-neutral-100" href={LINKEDIN} aria-label="LinkedIn"><FaLinkedin /></a>
            <a className="rounded-l border px-6 py-3 text-base md:text-lg font-medium hover:bg-neutral-100" href={resumePdf}>Resume</a>
          </div>
        </div>
      </footer>
    </main>
  )
}
