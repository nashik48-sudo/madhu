import { Button } from "@/components/ui/button";
import Link from "next/link";

export function FinalCta() {
  return (
    <section id="final-cta" className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-16 text-center md:px-6 md:py-24">
        <h2 className="font-headline text-3xl font-bold sm:text-4xl">
          Ready to Build with Better Data?
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-primary-foreground/80">
          Sign up now and get your free API key instantly. Start building with institutional-grade data today.
        </p>
        <div className="mt-8">
          <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
            <Link href="#">Get Your Free API Key</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
