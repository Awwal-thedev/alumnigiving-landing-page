// components/Hero.tsx
// Together.ng — Alumnigiving hero section
// Fonts needed in your Next.js project:
//   next/font/google → Instrument_Sans, Geist, Figtree
// Or add to globals.css:
//   @import url('https://fonts.googleapis.com/css2?family=Instrument+Sans:wght@600&family=Geist:wght@500&family=Figtree:wght@400&display=swap');

import Image from 'next/image'

// ─── Asset ────────────────────────────────────────────────────────────────────
// Replace this with your hosted image path once the Figma asset URL (7-day TTL) expires.
// Recommended: download → place in /public/images/isi-campus.jpg → use '/images/isi-campus.jpg'
const CAMPUS_IMAGE = '/images/isi-campus.jpg'

// ─── Types ────────────────────────────────────────────────────────────────────
interface HeroProps {
  heading?:    string
  subtext?:    string
  primaryCTA?: { label: string; href: string }
  secondaryCTA?: { label: string; href: string }
}

// ─── Component ────────────────────────────────────────────────────────────────
export default function Hero({
  heading    = 'Give Back to the Halls That Built You.',
  subtext    = 'Reinvest in the excellence of International School Ibadan and Staff School UI. Alumnigiving.ng makes it seamless to fund infrastructure, scholarships, and special projects for the next generation of leaders.',
  primaryCTA  = { label: 'Start Giving Today', href: '#give' },
  secondaryCTA = { label: 'View Projects',     href: '#projects' },
}: HeroProps) {
  return (
    <section className="relative w-full min-h-[900px] bg-[#2a2179] flex items-center overflow-hidden">

      {/* ── Background image — mix-blend-multiply so navy bleeds through ── */}
      {/* The wrapper is slightly wider and offset left to match the Figma design */}
      <div
        className="absolute inset-y-0 mix-blend-multiply pointer-events-none"
        style={{ left: '-4.61%', right: '-4.61%' }}
      >
        <Image
          src={CAMPUS_IMAGE}
          alt="International School Ibadan campus"
          fill
          priority
          className="object-cover object-center"
        />
      </div>

      {/* ── Dark overlay ── */}
      <div className="absolute inset-0 bg-black/35 pointer-events-none" />

      {/* ── Content ── */}
      <div className="relative z-10 w-full px-[90px] pt-[214px] pb-[106px] max-w-[913px]">

        {/* Heading */}
        <h1
          className="
            font-[family-name:var(--font-instrument-sans)]
            font-semibold
            text-white
            tracking-[-0.02em]
            leading-[1.325]
            text-[clamp(52px,7.1vw,102.4px)]
            mb-6
          "
        >
          {heading}
        </h1>

        {/* Subtext */}
        <p
          className="
            font-[family-name:var(--font-geist)]
            font-medium
            text-white
            text-[clamp(16px,1.53vw,22px)]
            leading-[1.27]
            max-w-[820px]
          "
        >
          {subtext}
        </p>

        {/* CTA buttons */}
        <div className="flex items-center gap-[33.6px] pt-[31px] flex-wrap">

          {/* Primary — orange */}
          <a
            href={primaryCTA.href}
            className="
              inline-flex items-center justify-center
              h-[61.6px] px-[33.6px] min-w-[231px]
              bg-[#f96804] border-[2.24px] border-[#f96804]
              rounded-[7px]
              font-[family-name:var(--font-figtree)] font-normal
              text-[20px] text-white whitespace-nowrap
              transition-all duration-200
              hover:-translate-y-0.5 hover:bg-[#e05a00] hover:border-[#e05a00]
              hover:shadow-[0_8px_24px_rgba(249,104,4,0.4)]
              active:translate-y-0
            "
          >
            {primaryCTA.label}
          </a>

          {/* Secondary — white with arrow */}
          <a
            href={secondaryCTA.href}
            className="
              group
              inline-flex items-center justify-center gap-[10px]
              h-[61.6px] px-[28px] min-w-[231px]
              bg-white border-none
              rounded-[7px]
              font-[family-name:var(--font-figtree)] font-normal
              text-[20px] text-[#f96804] whitespace-nowrap
              transition-all duration-200
              hover:-translate-y-0.5 hover:bg-[#fff5ee]
              hover:shadow-[0_8px_24px_rgba(0,0,0,0.15)]
              active:translate-y-0
            "
          >
            {secondaryCTA.label}
            <ArrowRight />
          </a>

        </div>
      </div>
    </section>
  )
}

// ─── Arrow icon ───────────────────────────────────────────────────────────────
function ArrowRight() {
  return (
    <span className="inline-flex items-center w-4 h-[18px] transition-transform duration-200 group-hover:translate-x-1">
      <svg viewBox="0 0 16 18" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
        <path
          d="M1 9H15M15 9L8 1.5M15 9L8 16.5"
          stroke="#f96804"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </span>
  )
}
