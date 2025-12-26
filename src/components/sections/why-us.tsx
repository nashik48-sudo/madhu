export function WhyUs() {
  return (
    <section id="why-us" className="py-16 sm:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-headline text-3xl font-bold text-primary sm:text-4xl">Why Choose EquityStream?</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            We understand the frustrations of building financial applications with subpar data.
          </p>
        </div>
        <div className="mt-12 grid gap-8 md:grid-cols-3 md:gap-12">
          {/* Problem */}
          <div className="rounded-lg border bg-card p-6 shadow-sm">
            <h3 className="font-headline text-xl font-semibold">Problem: The Data Dilemma</h3>
            <p className="mt-4 text-muted-foreground">
              High latency, unreliable connections, and complex, poorly documented APIs. Legacy data providers are slow, expensive, and a nightmare to integrate, killing your development velocity and alpha.
            </p>
          </div>
          {/* Agitate */}
          <div className="rounded-lg border bg-card p-6 shadow-sm">
            <h3 className="font-headline text-xl font-semibold">Agitate: The Cost of Bad Data</h3>
            <p className="mt-4 text-muted-foreground">
              Every millisecond of delay is a missed opportunity. Every hour spent debugging a messy API is an hour not spent on strategy. In a market that never sleeps, you can't afford to be held back by your data feed.
            </p>
          </div>
          {/* Solution */}
          <div className="rounded-lg border border-primary/50 bg-primary/5 p-6 shadow-sm">
            <h3 className="font-headline text-xl font-semibold text-primary">Solution: The EquityStream Edge</h3>
            <p className="mt-4 text-muted-foreground">
              We provide institutional-grade data at startup speed. A developer-first platform with clean documentation, predictable pricing, and rock-solid infrastructure, so you can focus on building, not debugging.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
