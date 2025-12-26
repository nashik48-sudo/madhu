import { Hero } from '@/components/sections/hero';
import { TrustBar } from '@/components/sections/trust-bar';
import { Features } from '@/components/sections/features';
import { AiInsights } from '@/components/sections/ai-insights';
import { Faq } from '@/components/sections/faq';
import { FinalCta } from '@/components/sections/final-cta';

export default function Home() {
  return (
    <main className="flex-1">
      <Hero />
      <TrustBar />
      <Features />
      <AiInsights />
      <Faq />
      <FinalCta />
    </main>
  );
}
