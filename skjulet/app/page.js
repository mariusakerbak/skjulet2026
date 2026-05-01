import { HeroSection } from "@/components/hero-section"
import { YouTubeSection } from "@/components/youtube-section"
import { FooterSection } from "@/components/footer-section"
import { getRecentVideos } from "@/lib/youtube"

export default async function Home() {
  const videos = await getRecentVideos()

  return (
    <>
      <main>
        <HeroSection />
        <YouTubeSection videos={videos} />
      </main>
      <FooterSection />
    </>
  )
}
