import { Diskografi } from "@/components/Diskografi"
import { FooterSection } from "@/components/footer-section"
import { SiteHeader } from "@/components/site-header"
import { getAlbums } from "@/lib/sanity"

export const metadata = {
  title: "Diskografi — Skjulet",
  description: "Album og utgivelser fra Skjulet.",
}

export default async function DiskografiPage() {
  const albums = await getAlbums()

  return (
    <>
      <SiteHeader />
      <main>
        <Diskografi albums={albums} />
      </main>
      <FooterSection />
    </>
  )
}
