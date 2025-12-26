import { Zap, Database, Code, Globe, ShieldCheck, FileText } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';

const features = [
  {
    icon: <Zap className="h-8 w-8 text-primary" />,
    title: 'Real-Time WebSocket Streams',
    description: 'Tick-by-tick data with ultra-low latency. Never miss a market move with our persistent, high-throughput connections.'
  },
  {
    icon: <Database className="h-8 w-8 text-primary" />,
    title: '15+ Years Historical Data',
    description: 'Access comprehensive, granular OHLCV and tick data across global markets. Perfect for backtesting and model training.'
  },
  {
    icon: <Code className="h-8 w-8 text-primary" />,
    title: 'RESTful API Integration',
    description: 'Clean, predictable, and easy-to-use REST API with JSON-encoded responses. Integrate in minutes, not days.'
  },
  {
    icon: <Globe className="h-8 w-8 text-primary" />,
    title: 'Global Market Coverage',
    description: 'Get data from major exchanges across North America, Europe, and Asia. Your single source for global financial data.'
  },
  {
    icon: <ShieldCheck className="h-8 w-8 text-primary" />,
    title: '99.9% Uptime',
    description: 'Built on redundant, fault-tolerant infrastructure. Depend on us for mission-critical applications.'
  },
  {
    icon: <FileText className="h-8 w-8 text-primary" />,
    title: 'Enhanced Documentation',
    description: 'Interactive documentation with code examples in multiple languages. Onboard your team and start building faster.'
  }
];

export function Features() {
  return (
    <section id="features" className="bg-secondary/50 py-16 sm:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-headline text-3xl font-bold text-primary sm:text-4xl">Everything You Need. Nothing You Don't.</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            A complete toolkit for building next-generation financial applications.
          </p>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <Card key={feature.title} className="bg-background text-left">
              <CardHeader>
                {feature.icon}
                <CardTitle className="mt-4">{feature.title}</CardTitle>
                <CardDescription className="mt-2">{feature.description}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
