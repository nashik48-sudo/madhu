
'use server';

import { generateDataInsightsReport, type GenerateDataInsightsReportInput } from '@/ai/flows/generate-data-insights-report';
import { z } from 'zod';

const ActionInputSchema = z.object({
  dataDescription: z.string().min(20, "Please provide a more detailed data description (at least 20 characters)."),
  reportObjective: z.string().min(10, "Please describe the report objective (at least 10 characters)."),
});

export async function generateInsightsAction(values: z.infer<typeof ActionInputSchema>) {
  const validatedFields = ActionInputSchema.safeParse(values);

  if (!validatedFields.success) {
    return {
      success: false,
      error: "Invalid input.",
    };
  }
  
  const { dataDescription, reportObjective } = validatedFields.data;

  // Hardcoded available models for the demo
  const availableModels: GenerateDataInsightsReportInput['availableModels'] = [
    {
      name: 'Time-Series Forecaster',
      description: 'A model based on ARIMA for time-series forecasting.',
      performanceMetrics: { accuracy: 0.85, precision: 0.88, recall: 0.82 },
    },
    {
      name: 'Volatility Predictor',
      description: 'A GARCH model to predict market volatility.',
      performanceMetrics: { accuracy: 0.92, precision: 0.90, recall: 0.94 },
    },
    {
      name: 'Sentiment Analyzer',
      description: 'An NLP model to analyze market sentiment from news headlines.',
      performanceMetrics: { accuracy: 0.88, precision: 0.85, recall: 0.91 },
    },
  ];

  try {
    const result = await generateDataInsightsReport({
      dataDescription,
      reportObjective,
      availableModels,
    });
    return { success: true, data: result };
  } catch (error) {
    console.error(error);
    return {
      success: false,
      error: "Failed to generate insights. Please try again later.",
    };
  }
}
