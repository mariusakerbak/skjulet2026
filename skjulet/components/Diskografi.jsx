import Image from "next/image"
import Link from "next/link"
import { urlFor } from "@/lib/sanity"

export function Diskografi({ albums }) {
  if (!albums?.length) {
    return (
      <section className="bg-background px-6 py-24 md:px-12 lg:px-16">
        <div className="mx-auto max-w-6xl">
          <p className="text-foreground/50">Ingen album publisert ennå.</p>
        </div>
      </section>
    )
  }

  return (
    <section className="bg-background px-6 py-24 md:px-12 lg:px-16">
      <div className="mx-auto max-w-6xl">
        <p className="mb-4 text-xs font-normal uppercase tracking-[0.3em] text-primary">
          Utgivelser
        </p>
        <h1 className="mb-16 text-4xl font-bold leading-[1.1] tracking-tight text-foreground md:text-6xl">
          Diskografi
        </h1>

        <div className="flex flex-col gap-24">
          {albums.map((album) => (
            <article
              key={album._id}
              className="flex flex-col items-start gap-10 md:flex-row md:gap-16"
            >
              {album.coverimage?.asset ? (
                <figure
                  className="relative overflow-hidden border border-foreground/10 bg-secondary/40 h-64 w-64 md:h-96 md:w-96"
                >
                  <Image
                    src={urlFor(album.coverimage).width(640).height(640).auto("format").url()}
                    alt={album.title || "Album"}
                    fill
                    unoptimized
                    className="object-cover"
                    sizes="(min-width: 768px) 400px, 256px"
                  />
                </figure>
              ) : (
                <div
                  className="border border-foreground/10 bg-secondary/40"
                  style={{ height: "400px", width: "400px" }}
                />
              )}

              <div className="min-w-0 flex-1">
                <p className="mb-2 text-xs font-normal uppercase tracking-[0.3em] text-foreground/40">
                  {album.publishyear}
                </p>
                <h2 className="mb-6 text-3xl font-bold tracking-tight text-foreground md:text-4xl">
                  {album.title}
                </h2>

                {album.tracks?.length ? (
                  <ol className="divide-y divide-foreground/10 border-y border-foreground/10">
                    {album.tracks.map((song, i) => (
                      <li
                        key={song?._id ?? i}
                        className="flex items-center gap-4 py-1.5"
                      >
                        <span className="w-6 text-right text-xs font-normal tabular-nums text-foreground/40">
                          {String(i + 1).padStart(2, "0")}
                        </span>
                        <div className="flex-1 min-w-0">
                          {song?.slug ? (
                            <Link
                              href={`/diskografi/sang/${song.slug}`}
                              className="block truncate text-sm font-bold text-foreground transition-colors hover:text-primary"
                            >
                              {song.title ?? "Untitled"}
                            </Link>
                          ) : (
                            <span className="block truncate text-sm font-bold text-foreground">
                              {song?.title ?? "Untitled"}
                            </span>
                          )}
                          {(song?.city || song?.country) && (
                            <p className="text-xs font-normal uppercase tracking-[0.2em] text-foreground/40">
                              {[song.city, song.country].filter(Boolean).join(" · ")}
                            </p>
                          )}
                        </div>
                      </li>
                    ))}
                  </ol>
                ) : (
                  <p className="text-sm text-foreground/40">Ingen spor lagt til.</p>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
