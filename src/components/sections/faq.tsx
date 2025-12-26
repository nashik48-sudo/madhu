import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const faqs = [
  {
    question: "How does EquityStream ensure data accuracy?",
    answer: "We source our data from reputable financial data providers and use a multi-layered verification process to ensure the highest level of accuracy for all our market data and insights."
  },
  {
    question: "Can I integrate EquityStream with my trading platform?",
    answer: "Yes! EquityStream offers a powerful API that allows for seamless integration with a wide range of trading platforms, brokerage accounts, and other financial tools."
  },
  {
    question: "What kind of support can I expect?",
    answer: "We offer 24/7 email support for all users. Our Pro and Enterprise plans include priority support and a dedicated account manager to ensure you get the most out of our platform."
  },
  {
    question: "Is there a free trial available for the API?",
    answer: "Absolutely. You can sign up and get a free API key to test our data and insights with our free developer plan. No credit card required."
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
