import { SocialLinks } from "@/components/social-links"

export function FooterSection() {
  const currentYear = new Date().getFullYear()


  return (
    <footer className="border-t border-secondary bg-secondary">
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
      
              <div className="bg-secondary p-6">
                <p className="text-foreground/70">
                  Ingen planlagte konserter for øyeblikket — følg med!
                </p>
              </div>
           
          </div>

          <div>
            <h3 className="mb-6 text-lg font-bold text-foreground">Kontakt</h3>
            <p className="mb-4 text-foreground/50">
              For booking, spørsmål eller samarbeid, ta kontakt med oss på e-post eller følg oss på sosiale medier:
            </p>
            <a
              href="mailto:gutta@skjulet.no"
              className="mb-6 transition-colors duration-300 ease-in-out inline-block w-full bg-background hover:bg-primary text-primary-background hover:text-primary-foreground text-xl text-center p-4 transition-colors hover:text-foreground"
            >
              gutta@skjulet.no
            </a>

            <SocialLinks
              className="mt-6 flex items-center gap-5"
              linkClassName="block text-foreground/70 transition-colors hover:text-primary"
              iconClassName="h-6 w-6"
            />
          </div>
        </div>

        <div className="mt-16 border-t border-secondary pt-8 text-center">
          <p className="text-sm text-foreground/40">© Skjulet {currentYear}</p>
        </div>
      </div>
    </footer>
  )
}
