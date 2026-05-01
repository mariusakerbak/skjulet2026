import { HeroSection } from "@/components/hero-section"
import { YouTubeSection } from "@/components/youtube-section"
import { FooterSection } from "@/components/footer-section"

export default function Home() {
  return (
    <>
      <main>
        <HeroSection />
        <YouTubeSection />
      </main>
      <FooterSection />
    </>
  )
}
