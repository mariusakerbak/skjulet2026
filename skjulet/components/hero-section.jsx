"use client"

import Image from "next/image"
import Link from "next/link"
import { useState } from "react"

const socialLinks = [
  {
    href: "https://youtube.com",
    label: "YouTube",
    path: "M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z",
  },
  {
    href: "https://spotify.com",
    label: "Spotify",
    path: "M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z",
  },
  {
    href: "https://music.apple.com",
    label: "Apple Music",
    path: "M23.994 6.124a9.23 9.23 0 0 0-.24-2.19c-.317-1.31-1.062-2.31-2.18-3.043a5.022 5.022 0 0 0-1.877-.726 10.496 10.496 0 0 0-1.564-.15c-.04-.003-.083-.01-.124-.013H5.986c-.152.01-.303.017-.455.026-.747.043-1.49.123-2.193.4-1.336.53-2.3 1.452-2.865 2.78-.192.448-.292.925-.363 1.408-.056.392-.088.785-.1 1.18 0 .032-.007.062-.01.093v12.223c.01.14.017.283.027.424.05.815.154 1.624.497 2.373.65 1.42 1.738 2.353 3.234 2.801.42.127.856.187 1.293.228.555.053 1.11.06 1.667.06h11.03a12.5 12.5 0 0 0 1.57-.1c.822-.106 1.596-.35 2.295-.81a5.046 5.046 0 0 0 1.88-2.207c.186-.42.293-.87.37-1.324.113-.675.138-1.358.137-2.04-.002-3.8 0-7.595-.003-11.393zm-6.423 3.99v5.712c0 .417-.058.827-.244 1.206-.29.59-.76.962-1.388 1.14-.35.1-.706.157-1.07.173-.95.042-1.785-.56-2.09-1.382-.22-.6-.187-1.208.092-1.79.332-.69.878-1.12 1.59-1.35.396-.13.807-.2 1.22-.26.406-.06.812-.13 1.205-.25.142-.044.27-.114.343-.26.04-.08.06-.166.058-.254V9.45a.423.423 0 0 0-.06-.2.276.276 0 0 0-.2-.14c-.052-.01-.106-.007-.158 0l-4.067.87c-.026.006-.05.015-.076.022v6.96c.003.32-.03.638-.136.94-.218.618-.595 1.1-1.163 1.418-.386.215-.808.3-1.243.335a2.023 2.023 0 0 1-2.072-1.328c-.248-.644-.18-1.28.16-1.88.34-.6.862-1 1.507-1.228.394-.14.807-.206 1.223-.27.387-.06.772-.126 1.14-.24a.62.62 0 0 0 .426-.48c.02-.12.025-.243.023-.365V7.2c0-.103.008-.21.038-.308a.49.49 0 0 1 .26-.31c.1-.05.203-.076.31-.096l5.476-1.177c.03-.007.06-.01.09-.016.238-.038.466.022.617.2.095.112.145.246.155.394l.002.146v4.078z",
  },
  {
    href: "https://instagram.com",
    label: "Instagram",
    path: "M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 0 1 1.772 1.153 4.902 4.902 0 0 1 1.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 0 1-1.153 1.772 4.902 4.902 0 0 1-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 0 1-1.772-1.153 4.902 4.902 0 0 1-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 0 1 1.153-1.772A4.902 4.902 0 0 1 5.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 0 0-.748-1.15 3.098 3.098 0 0 0-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 1 1 0 10.27 5.135 5.135 0 0 1 0-10.27zm0 1.802a3.333 3.333 0 1 0 0 6.666 3.333 3.333 0 0 0 0-6.666zm5.338-3.205a1.2 1.2 0 1 1 0 2.4 1.2 1.2 0 0 1 0-2.4z",
  },
  {
    href: "https://facebook.com",
    label: "Facebook",
    path: "M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z",
  },
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
            Norsk Fortellingsband
          </p>

          <h1 className="text-4xl font-bold leading-[1.1] tracking-tight text-foreground md:text-6xl lg:text-7xl">
            <span className="block text-balance">Der mørket snakker,</span>
            <span className="block text-balance">
              <span className="text-primary">lytter vi.</span>
            </span>
          </h1>

          <p className="mt-6 max-w-xl text-base font-normal leading-relaxed text-foreground/60 md:mt-8 md:text-lg">
            Fortellinger fra de lange nettene. Sanger fra de dype skoger.
            Skjulet vever narrativer gjennom lyd — folklore gjenfortalt
            for den moderne lytter.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-6 md:mt-12">
            <a
              href="#listen"
              className="inline-flex items-center justify-center border border-primary bg-primary px-8 py-4 text-sm font-bold uppercase tracking-[0.2em] text-primary-foreground transition-colors hover:bg-primary/90"
            >
              Lytt Nå
            </a>
            <a
              href="#about"
              className="inline-flex items-center justify-center border border-foreground/30 px-8 py-4 text-sm font-normal uppercase tracking-[0.2em] text-foreground transition-colors hover:border-foreground/60"
            >
              Vår Historie
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
            Cubakrisen <span className="font-normal text-foreground/40">— 2024</span>
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
