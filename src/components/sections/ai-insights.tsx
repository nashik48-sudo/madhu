'use client';

import { useState } from 'react';
import { useForm, type SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { generateInsightsAction } from '@/app/actions';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Loader2, Zap } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { Separator } from '../ui/separator';

const FormSchema = z.object({
  dataDescription: z.string().min(20, "Please provide a more detailed data description (at least 20 characters)."),
  reportObjective: z.string().min(10, "Please describe the report objective (at least 10 characters)."),
});

type FormValues = z.infer<typeof FormSchema>;

type ReportResult = {
  modelUsed: string;
  insights: string;
};

export function AiInsights() {
  const [isLoading, setIsLoading] = useState(false);
  const [result, setResult] = useState<ReportResult | null>(null);
  const { toast } = useToast();

  const form = useForm<FormValues>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      dataDescription: '',
      reportObjective: '',
    },
  });

  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    setIsLoading(true);
    setResult(null);

    const response = await generateInsightsAction(data);

    if (response.success && response.data) {
      setResult(response.data);
    } else {
      toast({
        variant: "destructive",
        title: "Error Generating Report",
        description: response.error || "An unexpected error occurred.",
      });
    }

    setIsLoading(false);
  };

  return (
    <section id="ai-insights" className="bg-secondary/30 py-16 sm:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-semibold uppercase tracking-wider text-primary">AI-Powered Insights</p>
            <h2 className="mt-2 font-headline text-3xl font-bold text-primary sm:text-4xl">Generate market insights with GenAI</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Describe your data and the objective of your report, and let our AI agents do the heavy lifting. Get comprehensive insights in seconds.
            </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-12">
            <Card className="shadow-lg">
                <CardHeader>
                    <CardTitle className="flex items-center gap-2 font-headline">
                        <Zap className="h-6 w-6 text-primary"/>
                        Generate Your Report
                    </CardTitle>
                    <CardDescription>
                        Fill out the form below to generate your AI-powered data insights report.
                    </CardDescription>
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
                                                placeholder="e.g., 'Weekly closing prices of the S&P 500 for the last 5 years.'"
                                                className="resize-none"
                                                {...field}
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
                                            <Textarea
                                                placeholder="e.g., 'Identify trends and predict next quarter's market volatility.'"
                                                className="resize-none"
                                                {...field}
                                            />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <Button type="submit" className="w-full" disabled={isLoading}>
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

            <Card className="shadow-lg">
                <CardHeader>
                    <CardTitle className="font-headline">Generated Report</CardTitle>
                    <CardDescription>
                        The results of the AI analysis will appear here.
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    {isLoading ? (
                        <div className="flex h-64 items-center justify-center">
                            <Loader2 className="h-8 w-8 animate-spin text-primary" />
                        </div>
                    ) : result ? (
                        <div className="space-y-4">
                            <div>
                                <h4 className="text-sm font-semibold text-muted-foreground">Model Used</h4>
                                <p className="font-medium">{result.modelUsed}</p>
                            </div>
                            <Separator />
                            <div>
                                <h4 className="text-sm font-semibold text-muted-foreground">Insights</h4>
                                <p className="whitespace-pre-wrap text-sm">{result.insights}</p>
                            </div>
                        </div>
                    ) : (
                        <div className="flex h-64 items-center justify-center rounded-md border-2 border-dashed bg-muted/50">
                            <p className="text-muted-foreground">Your report is waiting</p>
                        </div>
                    )}
                </CardContent>
            </Card>
        </div>

      </div>
    </section>
  );
}
