'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { generateInsightsAction } from '@/app/actions';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { BrainCircuit, Loader2 } from 'lucide-react';
import type { GenerateDataInsightsReportOutput } from '@/ai/flows/generate-data-insights-report';

const formSchema = z.object({
  dataDescription: z.string().min(20, { message: 'Please provide a more detailed data description (at least 20 characters).' }),
  reportObjective: z.string().min(10, { message: 'Please describe the report objective (at least 10 characters).' }),
});

export function AiInsights() {
  const [isLoading, setIsLoading] = useState(false);
  const [result, setResult] = useState<GenerateDataInsightsReportOutput | null>(null);
  const { toast } = useToast();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      dataDescription: '',
      reportObjective: '',
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsLoading(true);
    setResult(null);
    const response = await generateInsightsAction(values);

    if (response.success && response.data) {
      setResult(response.data);
    } else {
      toast({
        variant: 'destructive',
        title: 'An error occurred',
        description: response.error,
      });
    }
    setIsLoading(false);
  }

  return (
    <section id="ai-insights" className="py-16 sm:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-headline text-3xl font-bold text-primary sm:text-4xl">AI-Powered Data Insights</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Go beyond raw data. Use our AI agent to automatically analyze trends, generate reports, and uncover actionable insights from your market data.
          </p>
        </div>
        <div className="mt-12 grid gap-8 lg:grid-cols-2 lg:items-start">
          <Card>
            <CardHeader>
              <CardTitle>Generate a Report</CardTitle>
              <CardDescription>Describe your data and what you want to achieve.</CardDescription>
            </CardHeader>
            <CardContent>
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <FormField
                    control={form.control}
                    name="dataDescription"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Data Description</FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder="e.g., 'Daily OHLCV data for NASDAQ 100 stocks over the last 5 years.'"
                            {...field}
                            rows={4}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="reportObjective"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Report Objective</FormLabel>
                        <FormControl>
                          <Input placeholder="e.g., 'Identify stocks with unusual volatility spikes.'" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <Button type="submit" disabled={isLoading} className="w-full">
                    {isLoading ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Generating...
                      </>
                    ) : (
                      'Generate Insights'
                    )}
                  </Button>
                </form>
              </Form>
            </CardContent>
          </Card>
          <Card className="min-h-[400px]">
            <CardHeader>
              <CardTitle>Generated Report</CardTitle>
              <CardDescription>Your AI-generated insights will appear here.</CardDescription>
            </CardHeader>
            <CardContent>
              {isLoading && (
                <div className="flex h-full min-h-[200px] flex-col items-center justify-center space-y-4 text-muted-foreground">
                  <Loader2 className="h-12 w-12 animate-spin text-primary" />
                  <p>Analyzing data and generating your report...</p>
                </div>
              )}
              {!isLoading && !result && (
                <div className="flex h-full min-h-[200px] flex-col items-center justify-center space-y-4 text-center text-muted-foreground">
                   <BrainCircuit className="h-12 w-12" />
                  <p>Your report is just a few clicks away.</p>
                </div>
              )}
              {result && (
                <div className="space-y-6 rounded-md border bg-secondary/30 p-4">
                  <div>
                    <h4 className="font-semibold text-primary">Model Selected:</h4>
                    <p className="text-sm font-medium">{result.modelUsed}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary">Insights:</h4>
                    <p className="whitespace-pre-wrap text-sm">{result.insights}</p>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
