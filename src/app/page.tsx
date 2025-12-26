import { Hero } from '@/components/sections/hero';
import { TrustBar } from '@/components/sections/trust-bar';
import { WhyUs } from '@/components/sections/why-us';
import { Features } from '@/components/sections/features';
import { TechProof } from '@/components/sections/tech-proof';
import { AiInsights } from '@/components/sections/ai-insights';
import { Pricing } from '@/components/sections/pricing';
import { Faq } from '@/components/sections/faq';
import { FinalCta } from '@/components/sections/final-cta';

export default function Home() {
  return (
    <main className="flex-1">
      <Hero />
      <TrustBar />
      <WhyUs />
      <Features />
      <TechProof />
      <AiInsights />
      <Pricing />
      <Faq />
      <FinalCta />
    </main>
  );
}
