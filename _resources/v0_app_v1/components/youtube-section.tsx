"use client"

import Image from "next/image"

const videos = [
  {
    id: "video-1",
    title: "Skjulet - Kald Vind (Live fra Konserthuset)",
    thumbnail: "https://picsum.photos/seed/skjulet1/640/360",
    youtubeId: "dQw4w9WgXcQ",
  },
  {
    id: "video-2",
    title: "Historien om Havmannen",
    thumbnail: "https://picsum.photos/seed/skjulet2/640/360",
    youtubeId: "dQw4w9WgXcQ",
  },
  {
    id: "video-3",
    title: "Skjulet - Mørke Netter (Offisiell musikkvideo)",
    thumbnail: "https://picsum.photos/seed/skjulet3/640/360",
    youtubeId: "dQw4w9WgXcQ",
  },
  {
    id: "video-4",
    title: "Bak Kulissene: Innspilling av nytt album",
    thumbnail: "https://picsum.photos/seed/skjulet4/640/360",
    youtubeId: "dQw4w9WgXcQ",
  },
  {
    id: "video-5",
    title: "Skjulet - Nordlys (Akustisk versjon)",
    thumbnail: "https://picsum.photos/seed/skjulet5/640/360",
    youtubeId: "dQw4w9WgXcQ",
  },
  {
    id: "video-6",
    title: "Intervju: Historiefortelling gjennom musikk",
    thumbnail: "https://picsum.photos/seed/skjulet6/640/360",
    youtubeId: "dQw4w9WgXcQ",
  },
]

function PlayButton() {
  return (
    <div className="absolute inset-0 flex items-center justify-center opacity-80 group-hover:opacity-100 transition-opacity duration-300">
      <div className="w-16 h-16 bg-[#FF0000] flex items-center justify-center">
        <svg
          className="w-6 h-6 text-white ml-1"
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

interface VideoCardProps {
  title: string
  thumbnail: string
  youtubeId: string
}

function VideoCard({ title, thumbnail }: VideoCardProps) {
  return (
    <article className="group cursor-pointer">
      <div className="relative aspect-video overflow-hidden border border-[#1e3535] bg-[#0a0a09]">
        <Image
          src={thumbnail}
          alt={title}
          fill
          className="object-cover transition-all duration-300 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-[#1a1a18]/40 group-hover:bg-[#1a1a18]/60 transition-colors duration-300" />
        <PlayButton />
      </div>
      <h3 className="mt-4 text-[#f0e8c8] font-normal text-sm leading-relaxed line-clamp-2">
        {title}
      </h3>
    </article>
  )
}

export function YouTubeSection() {
  return (
    <section className="bg-[#1a1a18] py-20 px-6 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-[#f0e8c8] text-2xl md:text-3xl font-bold tracking-tight mb-12">
          Siste fra Skjulet på YouTube
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {videos.map((video) => (
            <VideoCard
              key={video.id}
              title={video.title}
              thumbnail={video.thumbnail}
              youtubeId={video.youtubeId}
            />
          ))}
        </div>

        <div className="mt-16 flex justify-center">
          <a
            href="https://youtube.com/@skjulet"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 border-2 border-[#d4782a] text-[#d4782a] font-bold text-sm uppercase tracking-widest bg-transparent hover:bg-[#d4782a] hover:text-[#1a1a18] transition-colors duration-300"
          >
            Se flere videoer på YouTube
          </a>
        </div>
      </div>
    </section>
  )
}
