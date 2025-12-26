import { Button } from "@/components/ui/button";
import Link from "next/link";

export function Hero() {
  return (
    <section>
      <div className="container mx-auto px-4 py-20 text-center md:px-6 md:py-32 lg:py-40">
        <h1 className="font-headline text-4xl font-bold tracking-tight text-primary sm:text-5xl md:text-6xl lg:text-7xl">
          Institutional-Grade Data at Startup Speed
        </h1>
        <p className="mx-auto mt-6 max-w-3xl text-lg text-muted-foreground md:text-xl">
          Access ultra-low latency, real-time, and 15+ years of historical market data through our powerful WebSocket and RESTful APIs. Built for developers, by developers.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Button asChild size="lg" variant="destructive">
            <Link href="#final-cta">Get Your Free API Key</Link>
          </Button>
          <Button asChild size="lg" variant="outline">
            <Link href="#tech-proof">View Documentation</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
