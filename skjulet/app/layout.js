import { Open_Sans } from "next/font/google"
import "./globals.css"

const openSans = Open_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
})

export const metadata = {
  title: "Skjulet — Norsk historiefortelling i musikkform.",
  description:
    "Skjulet har ikke rot i verdenshistorien - det er rot i verdenshistorien.",
}

export default function RootLayout({ children }) {
  return (
    <html lang="no" className={`${openSans.variable} bg-background`}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  )
}
