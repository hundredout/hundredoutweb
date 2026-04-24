import { Hero } from "../components/Hero";
import { HowItWorks } from "../components/HowItWorks";
import { WhyHundredOut } from "../components/WhyHundredOut";
import { SideActionSection } from "../components/SideActionSection";
import { GearTeaser } from "../components/GearTeaser";
import { FinalCTA } from "../components/FinalCTA";
import { EarlyAccessSignup } from "../components/EarlyAccessSignup";

export function HomePage() {
  return (
    <>
      <Hero />
      <div className="bg-white px-6 py-20 lg:px-12">
        <div className="mx-auto max-w-[1600px]">
          <EarlyAccessSignup
            theme="light"
            eyebrow="Founding List"
            title="Get in early on what HundredOut becomes."
            description="Join the list for first access to gear drops, Club news, launch signals, and the next big moves before they go wide."
          />
        </div>
      </div>
      <HowItWorks />
      <WhyHundredOut />
      <SideActionSection />
      <GearTeaser />
      <FinalCTA />
    </>
  );
}
