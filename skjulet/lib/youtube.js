export async function getRecentVideos() {
  const apiKey = process.env.YOUTUBE_API_KEY
  const channelId = process.env.YOUTUBE_CHANNEL_ID

  if (!apiKey || !channelId) {
    return []
  }

  const channelUrl = new URL("https://www.googleapis.com/youtube/v3/channels")
  channelUrl.searchParams.set("key", apiKey)
  channelUrl.searchParams.set("id", channelId)
  channelUrl.searchParams.set("part", "contentDetails")

  const channelRes = await fetch(channelUrl, { next: { revalidate: 3600 } })
  if (!channelRes.ok) {
    return []
  }

  const channelData = await channelRes.json()
  const uploadsId = channelData.items?.[0]?.contentDetails?.relatedPlaylists?.uploads
  if (!uploadsId) {
    return []
  }

  const url = new URL("https://www.googleapis.com/youtube/v3/playlistItems")
  url.searchParams.set("key", apiKey)
  url.searchParams.set("playlistId", uploadsId)
  url.searchParams.set("part", "snippet")
  url.searchParams.set("maxResults", "6")

  const res = await fetch(url, { next: { revalidate: 3600 } })

  if (!res.ok) {
    return []
  }

  const data = await res.json()

  return (data.items ?? []).map((item) => {
    const thumbs = item.snippet?.thumbnails ?? {}
    const thumbnail = thumbs.maxres?.url ?? thumbs.high?.url ?? thumbs.medium?.url ?? thumbs.default?.url ?? ""
    return {
      videoId: item.snippet?.resourceId?.videoId,
      title: item.snippet?.title ?? "",
      thumbnail,
    }
  })
}
