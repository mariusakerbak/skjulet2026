import { socialLinks } from "@/lib/social"

export function FooterSection() {
  const currentYear = new Date().getFullYear()

  const nextConcert = {
    date: "14. juni 2026",
    venue: "Rockefeller",
    location: "Oslo",
  }

  return (
    <footer className="border-t border-secondary bg-background">
      <div className="mx-auto max-w-7xl px-6 py-16 md:px-12 lg:px-16">
        <div className="grid gap-12 md:grid-cols-3 md:gap-8">
          <div>
            <h3 className="mb-6 text-lg font-bold text-foreground">
              Lytt til Skjulet
            </h3>
            <iframe
              src="https://open.spotify.com/embed/artist/44im0D1VFjAteBS2F25MlG?utm_source=generator&theme=0"
              width="100%"
              height="352"
              frameBorder="0"
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
              className="border-0"
              title="Spotify Player - Skjulet"
            />
          </div>

          <div>
            <h3 className="mb-6 text-lg font-bold text-foreground">
              Neste konsert
            </h3>
            {nextConcert ? (
              <div className="bg-secondary p-6">
                <p className="mb-2 text-2xl font-bold text-primary">
                  {nextConcert.date}
                </p>
                <p className="text-lg font-bold text-foreground">
                  {nextConcert.venue}
                </p>
                <p className="text-foreground/70">{nextConcert.location}</p>
              </div>
            ) : (
              <div className="bg-secondary p-6">
                <p className="text-foreground/70">
                  Ingen planlagte konserter for øyeblikket — følg med!
                </p>
              </div>
            )}
          </div>

          <div>
            <h3 className="mb-6 text-lg font-bold text-foreground">Finn oss</h3>
            <p className="mb-4 text-foreground/50">
              Vi er der du er — nesten.
            </p>
            <a
              href="mailto:gutta@skjulet.no"
              className="mb-6 inline-block text-primary transition-colors hover:text-foreground"
            >
              gutta@skjulet.no
            </a>

            <ul className="mt-6 flex items-center gap-5">
              {socialLinks.map((s) => (
                <li key={s.label}>
                  <a
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-foreground/70 transition-colors hover:text-primary"
                    aria-label={s.label}
                  >
                    <svg
                      className="h-6 w-6"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path d={s.path} />
                    </svg>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-16 border-t border-secondary pt-8 text-center">
          <p className="text-sm text-foreground/40">© Skjulet {currentYear}</p>
        </div>
      </div>
    </footer>
  )
}
