import Image from "next/image"

function PlayButton() {
  return (
    <div className="absolute inset-0 flex items-center justify-center opacity-80 group-hover:opacity-100 transition-opacity duration-300">
      <div className="w-16 h-16 bg-[#FF0000] flex items-center justify-center">
        <svg
          className="w-6 h-6 text-foreground ml-1"
          fill="currentColor"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path d="M8 5v14l11-7z" />
        </svg>
      </div>
    </div>
  )
}

function VideoCard({ videoId, title, thumbnail }) {
  return (
    <a
      href={`https://www.youtube.com/watch?v=${videoId}`}
      target="_blank"
      rel="noopener noreferrer"
      className="group cursor-pointer block"
    >
      <article>
        <div className="relative aspect-video overflow-hidden border border-secondary bg-background">
          <Image
            src={thumbnail}
            alt={title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-cover transition-all duration-300 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-background/40 group-hover:bg-background/60 transition-colors duration-300" />
          <PlayButton />
        </div>
        <h3 className="mt-4 text-foreground font-normal text-sm leading-relaxed line-clamp-2">
          {title}
        </h3>
      </article>
    </a>
  )
}

export function YouTubeSection({ videos = [] }) {
  return (
    <section className="bg-background py-20 px-6 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-foreground text-2xl md:text-3xl font-bold tracking-tight mb-12">
          Siste fra Skjulet på YouTube
        </h2>

        {videos.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {videos.map((video) => (
              <VideoCard
                key={video.videoId}
                videoId={video.videoId}
                title={video.title}
                thumbnail={video.thumbnail}
              />
            ))}
          </div>
        ) : (
          <p className="text-foreground/60">
            Ingen videoer å vise akkurat nå.
          </p>
        )}

        <div className="mt-16 flex justify-center">
          <a
            href="https://www.youtube.com/@guttaiskjulet/videos"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 border-2 border-primary text-primary font-bold text-sm uppercase tracking-widest bg-transparent hover:bg-primary hover:text-primary-foreground transition-colors duration-300"
          >
            Se flere videoer på YouTube
          </a>
        </div>
      </div>
    </section>
  )
}
