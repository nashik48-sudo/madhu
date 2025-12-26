import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const faqs = [
  {
    question: "What is the typical latency for your real-time data?",
    answer: "Our WebSocket streams are designed for ultra-low latency, typically under 50ms from exchange to your application. We achieve this through a globally distributed network of servers located in major financial data centers."
  },
  {
    question: "Are there any additional exchange fees I need to worry about?",
    answer: "No. Our pricing is all-inclusive. We handle all exchange licensing and fees, so the price you see is the price you pay. This simplifies your accounting and removes unpredictable costs."
  },
  {
    question: "How deep does your historical data go?",
    answer: "We offer over 15 years of comprehensive historical data for most US equities, including tick-level data, OHLCV (Open, High, Low, Close, Volume) bars down to one-minute intervals, and corporate actions."
  },
  {
    question: "What kind of support do you offer?",
    answer: "We offer community support for our free plan, email support for our Pro plan, and dedicated 24/7 phone and Slack support for Enterprise customers. All plans have access to our extensive documentation."
  },
];

export function Faq() {
  return (
    <section id="faq" className="py-16 sm:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-headline text-3xl font-bold text-primary sm:text-4xl">Frequently Asked Questions</h2>
        </div>
        <div className="mx-auto mt-12 max-w-3xl">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left">{faq.question}</AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
