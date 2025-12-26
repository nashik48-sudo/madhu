import { Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card';
import Link from 'next/link';

const tiers = [
  {
    name: 'Developer',
    price: 'Free',
    description: 'For individuals and hobby projects.',
    features: ['100 API calls/day', 'Real-time stock data', 'Community support'],
    cta: 'Get API Key'
  },
  {
    name: 'Pro',
    price: '$99',
    price_period: '/ mo',
    description: 'For professional traders and small teams.',
    features: ['10,000 API calls/day', 'Advanced AI insights', 'Email & chat support', '1-minute data latency'],
    cta: 'Choose Pro',
    highlight: true,
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    description: 'For large organizations and custom needs.',
    features: ['Unlimited API calls', 'Dedicated infrastructure', '24/7 premium support', 'Sub-second data latency'],
    cta: 'Contact Sales'
  }
];

export function Pricing() {
  return (
    <section id="pricing" className="py-16 sm:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-headline text-3xl font-bold text-primary sm:text-4xl">Flexible pricing for every scale</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            From hobby projects to enterprise solutions, find a plan that fits your needs.
          </p>
        </div>
        <div className="mt-12 grid max-w-md gap-8 sm:max-w-none md:grid-cols-2 lg:grid-cols-3 mx-auto">
          {tiers.map((tier) => (
            <Card key={tier.name} className={`flex flex-col ${tier.highlight ? 'border-primary ring-2 ring-primary' : ''}`}>
              <CardHeader>
                <CardTitle>{tier.name}</CardTitle>
                <div className="mt-4 flex items-baseline">
                  <span className="font-headline text-4xl font-bold">{tier.price}</span>
                  {tier.price_period && <span className="ml-1 text-muted-foreground">{tier.price_period}</span>}
                </div>
                <CardDescription className="mt-2">{tier.description}</CardDescription>
              </CardHeader>
              <CardContent className="flex-1">
                <ul className="space-y-4">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex items-start">
                      <Check className="mr-2 mt-1 h-4 w-4 shrink-0 text-primary" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button asChild className="w-full" variant={tier.highlight ? 'default' : 'outline'}>
                  <Link href="#final-cta">{tier.cta}</Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
