export function FooterSection() {
  const currentYear = new Date().getFullYear()
  
  // Placeholder concert data - set to null to show "no concerts" message
  const nextConcert = {
    date: "14. juni 2026",
    venue: "Rockefeller",
    location: "Oslo",
  }
  // const nextConcert = null // Uncomment to show fallback message

  return (
    <footer className="border-t border-[#1e3535] bg-[#1a1a18]">
      <div className="mx-auto max-w-7xl px-6 py-16 md:px-12 lg:px-16">
        {/* Three column grid */}
        <div className="grid gap-12 md:grid-cols-3 md:gap-8">
          
          {/* Left column - Spotify embed */}
          <div>
            <h3 className="mb-6 text-lg font-bold text-[#f0e8c8]">
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

          {/* Middle column - Next concert */}
          <div>
            <h3 className="mb-6 text-lg font-bold text-[#f0e8c8]">
              Neste konsert
            </h3>
            {nextConcert ? (
              <div className="bg-[#1e3535] p-6">
                <p className="mb-2 text-2xl font-bold text-[#d4782a]">
                  {nextConcert.date}
                </p>
                <p className="text-lg font-bold text-[#f0e8c8]">
                  {nextConcert.venue}
                </p>
                <p className="text-[#f0e8c8]/70">
                  {nextConcert.location}
                </p>
              </div>
            ) : (
              <div className="bg-[#1e3535] p-6">
                <p className="text-[#f0e8c8]/70">
                  Ingen planlagte konserter for øyeblikket — følg med!
                </p>
              </div>
            )}
          </div>

          {/* Right column - Contact and social */}
          <div>
            <h3 className="mb-6 text-lg font-bold text-[#f0e8c8]">
              Finn oss
            </h3>
            <p className="mb-4 text-[#f0e8c8]/50">
              Vi er der du er — nesten.
            </p>
            <a 
              href="mailto:gutta@skjulet.no"
              className="mb-6 inline-block text-[#d4782a] transition-colors hover:text-[#f0e8c8]"
            >
              gutta@skjulet.no
            </a>
            
            {/* Social icons */}
            <ul className="mt-6 flex items-center gap-5">
              <li>
                <a 
                  href="https://instagram.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="block text-[#f0e8c8]/70 transition-colors hover:text-[#d4782a]"
                  aria-label="Instagram"
                >
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 0 1 1.772 1.153 4.902 4.902 0 0 1 1.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 0 1-1.153 1.772 4.902 4.902 0 0 1-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 0 1-1.772-1.153 4.902 4.902 0 0 1-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 0 1 1.153-1.772A4.902 4.902 0 0 1 5.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 0 0-.748-1.15 3.098 3.098 0 0 0-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 1 1 0 10.27 5.135 5.135 0 0 1 0-10.27zm0 1.802a3.333 3.333 0 1 0 0 6.666 3.333 3.333 0 0 0 0-6.666zm5.338-3.205a1.2 1.2 0 1 1 0 2.4 1.2 1.2 0 0 1 0-2.4z"/>
                  </svg>
                </a>
              </li>
              <li>
                <a 
                  href="https://youtube.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="block text-[#f0e8c8]/70 transition-colors hover:text-[#d4782a]"
                  aria-label="YouTube"
                >
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                  </svg>
                </a>
              </li>
              <li>
                <a 
                  href="https://facebook.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="block text-[#f0e8c8]/70 transition-colors hover:text-[#d4782a]"
                  aria-label="Facebook"
                >
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>
              </li>
              <li>
                <a 
                  href="https://spotify.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="block text-[#f0e8c8]/70 transition-colors hover:text-[#d4782a]"
                  aria-label="Spotify"
                >
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z"/>
                  </svg>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-16 border-t border-[#1e3535] pt-8 text-center">
          <p className="text-sm text-[#f0e8c8]/40">
            © Skjulet {currentYear}
          </p>
        </div>
      </div>
    </footer>
  )
}
