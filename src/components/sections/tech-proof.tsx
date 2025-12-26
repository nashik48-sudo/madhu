import Image from 'next/image';

const integrationLogos = [
  { name: 'Python', hint: 'logo python' },
  { name: 'JavaScript', hint: 'logo javascript' },
  { name: 'Tableau', hint: 'logo tableau' },
  { name: 'PowerBI', hint: 'logo powerbi' },
  { name: 'Excel', hint: 'logo excel' },
  { name: 'GoogleSheets', hint: 'logo google-sheets' },
  { name: 'R', hint: 'logo r-project' },
  { name: 'MetaTrader', hint: 'logo metatrader' },
  { name: 'TradingView', hint: 'logo tradingview' },
  { name: 'QuantConnect', hint: 'logo quantconnect' },
  { name: 'IBKR', hint: 'logo interactive-brokers' },
  { name: 'E-Trade', hint: 'logo e-trade' },
];

export function TechProof() {
  return (
    <section id="integrations" className="bg-card py-16 sm:py-24">
      <div className="container mx-auto px-4 text-center md:px-6">
        <div className="mx-auto max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-wider text-primary">Integrations</p>
          <h2 className="mt-2 font-headline text-3xl font-bold sm:text-4xl">Integrate with your favorite tools.</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Our powerful API is designed to work seamlessly with the most popular platforms and programming languages for financial analysis and trading.
          </p>
        </div>
        <div className="mt-12">
            <div className="relative flex-col items-center justify-center overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]">
                <div className="flex w-max animate-scroll-x" style={{animationDuration: '60s'}}>
                    {[...integrationLogos, ...integrationLogos].map((logo, index) => (
                        <div key={index} className="mx-6 flex w-[10rem] items-center justify-center">
                            <Image
                                src={`https://picsum.photos/seed/${logo.name}/120/40`}
                                alt={`${logo.name} logo`}
                                width={120}
                                height={40}
                                className="object-contain opacity-70 grayscale transition-all hover:opacity-100 hover:grayscale-0 dark:brightness-0 dark:invert"
                                data-ai-hint={logo.hint}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </div>
      </div>
    </section>
  );
}
