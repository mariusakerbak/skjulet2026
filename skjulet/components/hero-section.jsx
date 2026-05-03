"use client"

import Image from "next/image"
import Link from "next/link"
import { useState } from "react"

import { socialLinks } from "@/lib/social"

function SocialIcon({ href, label, path, className }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
      aria-label={label}
    >
      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path d={path} />
      </svg>
    </a>
  )
}

const navItems = [
  { href: "#music", label: "Musikk" },
  { href: "/diskografi", label: "Diskografi" },
  { href: "#live", label: "Konserter" },
]

export function HeroSection() {
  const [imageLoaded, setImageLoaded] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-background">
      <div className="absolute inset-0">
        <Image
          src="/FINAL_HERO.webp"
          alt="Two men on a red sofa floating in ocean waters with a rocket launching behind mountains"
          fill
          preload
          className={`object-cover object-center transition-opacity duration-1000 ${
            imageLoaded ? "opacity-100" : "opacity-0"
          }`}
          onLoad={() => setImageLoaded(true)}
        />
        <div className="absolute inset-0 bg-background/50" />
        <div
          className="absolute inset-0 bg-background/60"
          style={{
            maskImage: "linear-gradient(to top, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 40%)",
          }}
        />
      </div>

      <header className="relative z-10">
        <div className="flex justify-end px-6 pt-4 md:px-12 lg:px-16">
          <ul className="flex items-center gap-4">
            {socialLinks.map((s) => (
              <li key={s.label}>
                <SocialIcon
                  {...s}
                  className="block text-foreground/50 transition-colors hover:text-primary"
                />
              </li>
            ))}
          </ul>
        </div>

        <nav className="flex items-center justify-between px-6 py-4 md:px-12 lg:px-16">
          <Link href="/" className="block">
            <Image
              src="/skjulet_logo_hvit.svg"
              alt="Skjulet"
              width={160}
              height={50}
              className="h-10 w-auto md:h-12"
              preload
            />
          </Link>

          <ul className="hidden items-center gap-10 md:flex">
            {navItems.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="text-sm font-normal uppercase tracking-[0.2em] text-foreground/70 transition-colors hover:text-foreground"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          <button
            className="flex flex-col gap-1.5 md:hidden"
            aria-label="Open menu"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span className="h-px w-6 bg-foreground" />
            <span className="h-px w-6 bg-foreground" />
          </button>
        </nav>

        {menuOpen && (
          <div className="absolute left-0 right-0 top-full bg-background/95 px-6 py-8 md:hidden">
            <ul className="flex flex-col gap-6">
              {navItems.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="text-sm font-normal uppercase tracking-[0.2em] text-foreground/70"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
            <ul className="mt-8 flex items-center gap-5 border-t border-foreground/10 pt-6">
              {socialLinks.map((s) => (
                <li key={s.label}>
                  <SocialIcon
                    {...s}
                    className="block text-foreground/50 hover:text-primary"
                  />
                </li>
              ))}
            </ul>
          </div>
        )}
      </header>

      <div className="relative z-10 flex min-h-[calc(100vh-88px)] flex-col justify-end px-6 pb-24 md:justify-center md:px-12 md:pb-0 lg:px-16">
        <div className="max-w-3xl">
          <p className="mb-4 text-xs font-normal uppercase tracking-[0.3em] text-primary md:mb-6 md:text-sm">
            Neste konsert:
          </p>

          <h1 className="text-4xl font-bold leading-[1.1] tracking-tight text-foreground md:text-6xl lg:text-7xl">
            <span className="block text-balance">Kulturhuset, Halden</span>
            <span className="block text-balance text-3xl">
              <span className="text-primary">Fredag 22. mai,  klokka 20:00</span>
            </span>
          </h1>

          <p className="mt-6 max-w-xl text-base font-normal leading-relaxed text-foreground/60 md:mt-8 md:text-lg">
            Skjulet inntar Kulturhuset i Halden for en altfor forsinket lokal releasekonsert for albumet "Historier fra Sofaen". Bli med på en kveld der musikk og historier smelter sammen i en artig opplevelse!  
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-6 md:mt-12">
            <a
              href="https://open.spotify.com/artist/44im0D1VFjAteBS2F25MlG"
              className="inline-flex items-center justify-center border border-foreground/30 px-8 py-4 text-sm font-normal uppercase tracking-[0.2em] text-foreground transition-colors hover:border-foreground/60"
            >
             Lytt nå
            </a>
            <a
              href="https://kulturhuset.hoopla.no/"
              className="inline-flex items-center justify-center border border-primary bg-primary px-8 py-4 text-sm font-bold uppercase tracking-[0.2em] text-primary-foreground transition-colors hover:bg-primary/90"
            >
              Bestill billetter (Hoopla)
            </a>
            
          </div>
        </div>
      </div>

      <div className="absolute bottom-6 left-6 right-6 z-10 flex items-end justify-between md:bottom-8 md:left-12 md:right-12 lg:left-16 lg:right-16">
        <div className="hidden sm:block">
          <p className="text-xs font-normal uppercase tracking-[0.2em] text-foreground/40">
            Nyeste Utgivelse
          </p>
          <p className="mt-1 text-lg font-bold text-foreground">
            "Historier fra Sofaen" <span className="font-normal text-foreground/40">— 2024 </span>
          </p>
        </div>

        <div className="flex items-center gap-3">
          <span className="text-xs font-normal uppercase tracking-[0.2em] text-foreground/40">
            Scroll
          </span>
          <div className="h-12 w-px bg-foreground/20">
            <div className="h-4 w-px animate-pulse bg-primary" />
          </div>
        </div>
      </div>

      <div
        className="pointer-events-none absolute inset-0 z-20 opacity-[0.04]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
        }}
      />
    </section>
  )
}
