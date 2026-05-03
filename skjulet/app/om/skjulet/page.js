import { FooterSection } from "@/components/footer-section"
import { SiteHeader } from "@/components/site-header"

export const metadata = {
  title: "Om Skjulet — Skjulet",
  description: "Bli kjent med Skjulet — en norsk fortellerband.",
}

export default function OmSkjuletPage() {
  return (
    <>
      <SiteHeader />
      <main>
        <section className="bg-background px-6 py-24 md:px-12 lg:px-16">
          <div className="mx-auto max-w-3xl">
            <p className="mb-4 text-xs font-normal uppercase tracking-[0.3em] text-primary">
              Om bandet
            </p>
            <h1 className="mb-12 text-4xl font-bold leading-[1.1] tracking-tight text-foreground md:text-6xl">
              Om Skjulet
            </h1>
            <p className="text-base font-normal leading-relaxed text-foreground/70 md:text-lg">
              «Skjulet» er en idé startet av Egil Myklestad og Marius Akerbæk, som siden 2016 har vært gode venner, kollegaer og hverandres trygge havn for å slenge ut og bearbeide diverse kreative idéer.
            </p>
            <img src="/redsofa1_web.jpg" alt="Skjulet" className="my-12 w-full rounded-lg border border-foreground/10 object-cover" />
            <p className="pt-5">Gjennom en reise med eget firma, T-skjorte-design og utvikling av web-systemer og media- og markedsføring for kunder gjenoppdaget begge musikk-gleden. Begge har både laget og spilt musikk tidligere, med en pause i en travel arbeids- og familiehverdag.</p><p>Etter hvert ble ekstrajobb byttet med mer og mer musikklaging og skriving. Både Marius og Egil elsker å fortelle historier, og i 2024 ble det første musikalske reisealbumet ferdig!</p>
            <p><a href="/sangbok">Historier fra sofaen</a> har plassert oss i mange verdenshistoriske begivenheter, pg en uskyldig ferietur endte med krig med narkobaroner, tilfeldig oppdage missiler på Cuba, en skogstur i Telemark under andre verdenskrig og en uheldig start av et folkeopprør i Romania, blant annet...</p>
            <p className="pt-5">Etter vi slapp singlene "Bygning i Berlin", "Krise på Cuba" og "Bucuresti Blues", fikk vi en hyggelig forespørsel. Tor-David, Marius' skolekompis fra tidligere, hadde hørt musikken, likte konseptet, og sa at dersom vi skulle ha lyst på en bassist, var han tilgengelig. Lang historie kort; Tor har sørget for solid rytmisk forankring av resten av Historier fra sofaen, og stiller med Skjulets beste mustasj!</p>
            <p>Og for å komplettere rytme, fikk vi med vår felles kamerat Morgan. Egil har spilt en del med Morgan tidligere, som også spilte trommer på en av Marius julesanger på 2016-varianten av det lokale initiativet "Jul i Halden".</p>
            <p className="pt-5">I 2026 måtte bassist Tor ta en pause når livet ble for fullt. Med oss på reisen fikk vi den fantastiske Terje Støldal, som kommer med sin solide erfaring og rytme!</p>
            <p>Som et helt band, med en hel plate, setter vi ut på en videre reise med sanger vi er stolte av, og jobber allerede med ny musikk og nye reiser!</p>
          </div>
        </section>
      </main>
      <FooterSection />
    </>
  )
}
