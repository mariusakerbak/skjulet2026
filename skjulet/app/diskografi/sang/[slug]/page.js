import Link from "next/link"
import { notFound } from "next/navigation"
import { PortableText } from "@portabletext/react"
import { SiteHeader } from "@/components/site-header"
import { FooterSection } from "@/components/footer-section"
import { getSongBySlug, spotifyEmbedUrl } from "@/lib/sanity"

export async function generateMetadata({ params }) {
  const { slug } = await params
  const song = await getSongBySlug(slug)
  if (!song) return { title: "Sang — Skjulet" }
  return {
    title: `${song.title} — Skjulet`,
    description: [song.city, song.country].filter(Boolean).join(", ") || undefined,
  }
}

const portableComponents = {
  block: {
    normal: ({ children }) => (
      <p className="mb-6 whitespace-pre-line text-base leading-relaxed text-foreground/80">
        {children}
      </p>
    ),
    blockquote: ({ children }) => (
      <blockquote className="mb-6 border-l-2 border-primary pl-4 text-base italic text-foreground/70">
        {children}
      </blockquote>
    ),
  },
  marks: {
    strong: ({ children }) => <strong className="text-foreground">{children}</strong>,
    em: ({ children }) => <em className="italic">{children}</em>,
    link: ({ value, children }) => (
      <a
        href={value?.href}
        target="_blank"
        rel="noopener noreferrer"
        className="text-primary underline decoration-primary/40 underline-offset-4 hover:decoration-primary"
      >
        {children}
      </a>
    ),
  },
}

export default async function SongPage({ params }) {
  const { slug } = await params
  const song = await getSongBySlug(slug)
  if (!song) notFound()

  const embed = spotifyEmbedUrl(song.spotify)

  return (
    <>
      <SiteHeader />
      <main>
        <article className="bg-background px-6 py-16 md:px-12 md:py-24 lg:px-16">
          <div className="mx-auto max-w-3xl">
            <Link
              href="/diskografi"
              className="mb-10 inline-block text-xs font-normal uppercase tracking-[0.3em] text-foreground/50 transition-colors hover:text-primary"
            >
              ← Diskografi
            </Link>

            {(song.city || song.country) && (
              <p className="mb-3 text-xs font-normal uppercase tracking-[0.3em] text-primary">
                {[song.city, song.country].filter(Boolean).join(" · ")}
              </p>
            )}

            <h1 className="mb-10 text-4xl font-bold leading-[1.1] tracking-tight text-foreground md:text-6xl">
              {song.title}
            </h1>

            {embed && (
              <div className="mb-12">
                <iframe
                  src={embed}
                  title={`Spotify — ${song.title}`}
                  width="100%"
                  height="152"
                  frameBorder="0"
                  loading="lazy"
                  allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                  className="rounded"
                />
              </div>
            )}

            {song.lyrics?.length ? (
              <div className="border-t border-foreground/10 pt-10">
                <p className="mb-6 text-xs font-normal uppercase tracking-[0.3em] text-foreground/40">
                  Tekst
                </p>
                <PortableText value={song.lyrics} components={portableComponents} />
              </div>
            ) : null}
          </div>
        </article>
      </main>
      <FooterSection />
    </>
  )
}
