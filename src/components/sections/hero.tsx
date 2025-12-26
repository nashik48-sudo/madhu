import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export function Hero() {
  return (
    <section className="relative">
       <div aria-hidden="true" className="absolute inset-0 grid grid-cols-2 -space-x-52 opacity-20 dark:opacity-10">
          <div className="h-56 bg-gradient-to-br from-primary to-green-300 blur-[106px] dark:from-emerald-700"></div>
          <div className="h-32 bg-gradient-to-r from-cyan-400 to-sky-300 blur-[106px] dark:to-indigo-600"></div>
      </div>
      <div className="container relative mx-auto px-4 py-20 text-center md:px-6 md:py-32 lg:py-40">
        <h1 className="font-headline text-4xl font-bold tracking-tight text-primary sm:text-5xl md:text-6xl lg:text-7xl">
          Data-driven insights for <span className="text-accent">financial markets</span>
        </h1>
        <p className="mx-auto mt-6 max-w-3xl text-lg text-muted-foreground md:text-xl">
          EquityStream provides real-time data analysis and AI-powered insights to help you navigate the complexities of the financial markets.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Button asChild size="lg">
            <Link href="#final-cta">Get Your Free API Key</Link>
          </Button>
          <Button asChild size="lg" variant="outline">
            <Link href="#features">Explore Features</Link>
          </Button>
        </div>

        <div className="relative mt-16 flex justify-center">
            <p className="ml-4 flex items-center text-sm text-muted-foreground">Trusted by developers at leading financial firms</p>
        </div>
      </div>
    </section>
  );
}
