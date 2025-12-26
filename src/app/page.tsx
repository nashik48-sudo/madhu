import { Hero } from '@/components/sections/hero';
import { TrustBar } from '@/components/sections/trust-bar';
import { Features } from '@/components/sections/features';
import { AiInsights } from '@/components/sections/ai-insights';
import { Faq } from '@/components/sections/faq';
import { FinalCta } from '@/components/sections/final-cta';
import { Pricing } from '@/components/sections/pricing';
import { WhyUs } from '@/components/sections/why-us';
import { TechProof } from '@/components/sections/tech-proof';

export default function Home() {
  return (
    <main className="flex-1">
      <Hero />
      <TrustBar />
      <Features />
      <WhyUs />
      <AiInsights />
      <Pricing />
      <TechProof />
      <Faq />
      <FinalCta />
    </main>
  );
}
