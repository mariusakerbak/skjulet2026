"use client"

import dynamicImport from "next/dynamic"
import config from "@/sanity.config"

export const dynamic = "force-static"

const NextStudio = dynamicImport(
  () => import("next-sanity/studio").then((m) => m.NextStudio),
  { ssr: false },
)

export default function StudioPage() {
  return <NextStudio config={config} />
}
