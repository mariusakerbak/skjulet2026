"use client"

import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import { socialLinks } from "@/lib/social"

const navItems = [
  { href: "/diskografi", label: "Diskografi" },
  { href: "/om/skjulet", label: "Om Skjulet" },
]

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

export function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="relative z-10 bg-background">
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
          />
        </Link>

        <ul className="hidden items-center gap-10 md:flex">
          {navItems.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className="text-sm font-normal uppercase tracking-[0.2em] text-foreground/70 transition-colors hover:text-foreground"
              >
                {item.label}
              </Link>
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
                <Link
                  href={item.href}
                  className="text-sm font-normal uppercase tracking-[0.2em] text-foreground/70"
                >
                  {item.label}
                </Link>
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
  )
}
