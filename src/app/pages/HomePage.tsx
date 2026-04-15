import { Hero } from "../components/Hero";
import { HowItWorks } from "../components/HowItWorks";
import { WhyHundredOut } from "../components/WhyHundredOut";
import { SideActionSection } from "../components/SideActionSection";
import { GearTeaser } from "../components/GearTeaser";
import { FinalCTA } from "../components/FinalCTA";

export function HomePage() {
  return (
    <>
      <Hero />
      <HowItWorks />
      <WhyHundredOut />
      <SideActionSection />
      <GearTeaser />
      <FinalCTA />
    </>
  );
}
