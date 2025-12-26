'use server';

/**
 * @fileOverview An AI agent that generates data insights reports.
 *
 * - generateDataInsightsReport - A function that generates a data insights report.
 * - GenerateDataInsightsReportInput - The input type for the generateDataInsightsReport function.
 * - GenerateDataInsightsReportOutput - The return type for the generateDataInsightsReport function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const DataModelSchema = z.object({
  name: z.string().describe('Name of the data model'),
  description: z.string().describe('Description of the data model and its purpose'),
  performanceMetrics: z.record(z.string(), z.number()).describe('Performance metrics of the model, such as accuracy, precision, and recall'),
});

const GenerateDataInsightsReportInputSchema = z.object({
  dataDescription: z.string().describe('Description of the data for which insights are to be generated.'),
  reportObjective: z.string().describe('The objective of the data insights report.'),
  availableModels: z.array(DataModelSchema).describe('List of available data models to use for generating insights.'),
});
export type GenerateDataInsightsReportInput = z.infer<typeof GenerateDataInsightsReportInputSchema>;

const GenerateDataInsightsReportOutputSchema = z.object({
  modelUsed: z.string().describe('The name of the best performing data model used to generate the insights.'),
  insights: z.string().describe('The generated data insights report.'),
});
export type GenerateDataInsightsReportOutput = z.infer<typeof GenerateDataInsightsReportOutputSchema>;

export async function generateDataInsightsReport(
  input: GenerateDataInsightsReportInput
): Promise<GenerateDataInsightsReportOutput> {
  return generateDataInsightsReportFlow(input);
}

const selectBestModel = ai.defineTool(
  {
    name: 'selectBestModel',
    description: 'Selects the best performing data model based on performance metrics.',
    inputSchema: z.object({
      models: z.array(DataModelSchema).describe('List of data models to choose from.'),
    }),
    outputSchema: z.string().describe('The name of the best performing data model.'),
  },
  async input => {
    let bestModelName = '';
    let bestModelScore = -Infinity;

    for (const model of input.models) {
      let currentModelScore = 0;
      for (const metric in model.performanceMetrics) {
        currentModelScore += model.performanceMetrics[metric];
      }

      if (currentModelScore > bestModelScore) {
        bestModelScore = currentModelScore;
        bestModelName = model.name;
      }
    }

    return bestModelName;
  }
);

const generateInsightsPrompt = ai.definePrompt({
  name: 'generateInsightsPrompt',
  tools: [selectBestModel],
  input: {schema: GenerateDataInsightsReportInputSchema},
  output: {schema: GenerateDataInsightsReportOutputSchema},
  prompt: `You are an AI expert specializing in generating data insights reports.

You will use the provided data description and report objective to generate a comprehensive data insights report.
First, you will use the selectBestModel tool to pick the best model. After the model is selected, you will generate the report using the best model.

Data Description: {{{dataDescription}}}
Report Objective: {{{reportObjective}}}
Available Models: {{JSON.stringify availableModels}}

Make sure to return the name of the model that was used in the modelUsed output field, and return your data insights report in the insights output field.
`,
});

const generateDataInsightsReportFlow = ai.defineFlow(
  {
    name: 'generateDataInsightsReportFlow',
    inputSchema: GenerateDataInsightsReportInputSchema,
    outputSchema: GenerateDataInsightsReportOutputSchema,
  },
  async input => {
    const bestModelName = await selectBestModel({
      models: input.availableModels,
    });

    const {output} = await generateInsightsPrompt({
      ...input,
      availableModels: input.availableModels,
      dataDescription: input.dataDescription,
      reportObjective: input.reportObjective,
    });

    return {
      ...output,
      modelUsed: bestModelName,
    };
  }
);
