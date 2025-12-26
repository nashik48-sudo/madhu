import Image from 'next/image';
import { Card, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const features = [
  {
    title: 'Dynamic Market Dashboard',
    description: 'Access real-time market data, track your portfolio, and visualize trends with our intuitive and customizable dashboard. Make informed decisions with data at your fingertips.',
    imageUrl: 'https://picsum.photos/seed/dashboard/600/400',
    imageHint: 'dashboard chart'
  },
  {
    title: 'AI-Powered Insights',
    description: 'Leverage our generative AI to get tailored insights, sentiment analysis, and volatility predictions. Stay ahead of the market with actionable intelligence.',
    imageUrl: 'https://picsum.photos/seed/ai-feature/600/400',
    imageHint: 'AI bot interface'
  },
  {
    title: 'Seamless API Integration',
    description: 'Integrate our powerful financial data API into your own applications, trading bots, or research platforms. Flexible, reliable, and easy to use.',
    imageUrl: 'https://picsum.photos/seed/api-integration/600/400',
    imageHint: 'code editor'
  }
];

export function Features() {
  return (
    <section id="features" className="bg-secondary/30 py-16 sm:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-semibold uppercase tracking-wider text-primary">Core Features</p>
            <h2 className="mt-2 font-headline text-3xl font-bold text-primary sm:text-4xl">Advanced technology to power your financial decisions</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              EquityStream combines cutting-edge AI with comprehensive market data to give you an unparalleled advantage.
            </p>
        </div>
        <div className="mt-12 grid gap-8">
          {features.map((feature, index) => (
            <Card key={feature.title} className="overflow-hidden bg-card shadow-lg transition-shadow hover:shadow-xl lg:grid lg:grid-cols-2 lg:gap-8">
              <div className={`flex flex-col justify-center p-8 lg:p-12 ${index % 2 === 1 ? 'lg:order-last' : ''}`}>
                <CardHeader className="p-0">
                  <CardTitle className="font-headline text-2xl font-bold">{feature.title}</CardTitle>
                  <CardDescription className="mt-4 text-base text-muted-foreground">
                    {feature.description}
                  </CardDescription>
                </CardHeader>
              </div>
              <div className="relative h-64 w-full lg:h-auto">
                <Image
                  src={feature.imageUrl}
                  alt={feature.title}
                  fill
                  className="object-cover"
                  data-ai-hint={feature.imageHint}
                />
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
