import Image from 'next/image';

export function WhyUs() {
  return (
    <section id="why-us" className="py-16 sm:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mx-auto max-w-3xl text-center">
            <h2 className="font-headline text-3xl font-bold text-primary sm:text-4xl">"EquityStream's AI insights have revolutionized our trading strategy. The accuracy of their volatility predictions is unmatched, giving us a significant edge in the market."</h2>
            <div className="mt-8 flex items-center justify-center gap-4">
                <Image className="inline-block h-12 w-12 rounded-full" src="https://picsum.photos/seed/trader/100/100" width={100} height={100} alt="Johnathan Doe" data-ai-hint="person headshot"/>
                <div>
                    <p className="font-semibold">Johnathan Doe</p>
                    <p className="text-sm text-muted-foreground">Lead Analyst at QuantumLeap Finance</p>
                </div>
            </div>
        </div>
        <div className="mt-20 grid gap-8 md:grid-cols-3">
          <div className="text-center">
            <p className="font-headline text-5xl font-bold text-primary">100M+</p>
            <p className="mt-2 text-muted-foreground">API Requests per Day</p>
          </div>
          <div className="text-center">
            <p className="font-headline text-5xl font-bold text-primary">99.9%</p>
            <p className="mt-2 text-muted-foreground">API Uptime</p>
          </div>
          <div className="text-center">
            <p className="font-headline text-5xl font-bold text-primary">10k+</p>
            <p className="mt-2 text-muted-foreground">Active Developers</p>
          </div>
        </div>
      </div>
    </section>
  );
}
