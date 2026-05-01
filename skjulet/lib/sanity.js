import { createClient } from "next-sanity"
import { createImageUrlBuilder } from "@sanity/image-url"

export const sanityClient = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "uwxkrui6",
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "skjulet2026",
  apiVersion: "2024-10-01",
  useCdn: true,
})

const builder = createImageUrlBuilder(sanityClient)
export function urlFor(source) {
  return builder.image(source)
}

const albumsQuery = `*[_type == "album"] | order(publishyear desc) {
  _id,
  title,
  publishyear,
  coverimage,
  "tracks": tracks[]-> {
    _id,
    title,
    "slug": slug.current,
    city,
    country,
    spotify,
    thumbnail
  }
}`

const nextConcertQuery = `*[_type == "concert" && date > now()] | order(date asc)[0] {
  _id,
  date,
  venue,
  city,
  ticketUrl
}`

export async function getAlbums() {
  return sanityClient.fetch(albumsQuery, {}, { next: { revalidate: 60 } })
}

export async function getNextConcert() {
  return sanityClient.fetch(nextConcertQuery, {}, { next: { revalidate: 60 } })
}

const songBySlugQuery = `*[_type == "song" && slug.current == $slug][0] {
  _id,
  title,
  "slug": slug.current,
  city,
  country,
  lyrics,
  spotify,
  thumbnail
}`

export async function getSongBySlug(slug) {
  return sanityClient.fetch(songBySlugQuery, { slug }, { next: { revalidate: 60 } })
}

export function spotifyEmbedUrl(raw) {
  if (!raw) return null
  const match = raw.match(/spotify\.com\/(?:embed\/)?(track|album|playlist|episode)\/([a-zA-Z0-9]+)/)
  if (!match) return null
  const [, kind, id] = match
  return `https://open.spotify.com/embed/${kind}/${id}?utm_source=generator`
}
