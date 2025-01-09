import { LandingHero } from "@/components/landing-hero"
// import { LandingAction } from "@/components/landing-action"
import { LandingFeatures } from "@/components/landing-features"
import { LandingQuotes } from "@/components/landing-quotes"
import { LandingReferences } from "@/components/landing-references"
import { LandingStatistics } from "@/components/landing-statistics"
// import { LandingThings } from "@/components/landing-things"

export default async function Home() {
  return (
    <main>
      <LandingHero />

      <LandingReferences />

      <LandingFeatures />

      <LandingQuotes />

      <LandingStatistics />

      {/* <LandingAction /> */}

      {/* <LandingThings /> */}
    </main>
  )
}
