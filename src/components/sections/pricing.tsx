import { Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card';
import Link from 'next/link';

const tiers = [
  {
    name: 'Developer',
    price: 'Free',
    description: 'For personal projects and exploration.',
    features: ['100 API Calls/Day', 'Real-Time Data (Delayed)', 'Community Support'],
    cta: 'Get Free API Key'
  },
  {
    name: 'Pro',
    price: '$99',
    price_period: '/ mo',
    description: 'For active traders and small teams.',
    features: ['100,000 API Calls/Day', 'Real-Time WebSocket Streams', 'Email Support', '15+ Years Historical Data'],
    cta: 'Start Pro Trial',
    highlight: true,
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    description: 'For hedge funds and institutions.',
    features: ['Unlimited API Calls', 'Dedicated Infrastructure', '24/7 Priority Support', 'Custom Data Solutions'],
    cta: 'Contact Sales'
  }
];

export function Pricing() {
  return (
    <section id="pricing" className="bg-secondary/50 py-16 sm:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-headline text-3xl font-bold text-primary sm:text-4xl">Predictable Pricing for Any Scale</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Choose a plan that fits your needs. No hidden fees, no complex tiers.
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
