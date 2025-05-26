// 'use server';
/**
 * @fileOverview AI-powered tool that suggests personalized value propositions to potential customers.
 *
 * - generatePersonalizedValuePropositions - A function that handles the generation of personalized value propositions.
 * - GeneratePersonalizedValuePropositionsInput - The input type for the generatePersonalizedValuePropositions function.
 * - GeneratePersonalizedValuePropositionsOutput - The return type for the generatePersonalizedValuePropositions function.
 */

'use server';

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GeneratePersonalizedValuePropositionsInputSchema = z.object({
  targetCustomerDetails: z
    .string()
    .describe('Detailed description of the target customer.'),
  productOfferingDetails: z
    .string()
    .describe('Detailed description of the product or service offering.'),
});
export type GeneratePersonalizedValuePropositionsInput = z.infer<
  typeof GeneratePersonalizedValuePropositionsInputSchema
>;

const GeneratePersonalizedValuePropositionsOutputSchema = z.object({
  valuePropositions: z
    .array(z.string())
    .describe('A list of personalized value propositions.'),
});
export type GeneratePersonalizedValuePropositionsOutput = z.infer<
  typeof GeneratePersonalizedValuePropositionsOutputSchema
>;

export async function generatePersonalizedValuePropositions(
  input: GeneratePersonalizedValuePropositionsInput
): Promise<GeneratePersonalizedValuePropositionsOutput> {
  return generatePersonalizedValuePropositionsFlow(input);
}

const prompt = ai.definePrompt({
  name: 'generatePersonalizedValuePropositionsPrompt',
  input: {
    schema: GeneratePersonalizedValuePropositionsInputSchema,
  },
  output: {
    schema: GeneratePersonalizedValuePropositionsOutputSchema,
  },
  prompt: `You are a marketing expert specializing in crafting compelling value propositions.

  Based on the details of the target customer and the product offering, generate a list of personalized value propositions.

  Target Customer Details: {{{targetCustomerDetails}}}
  Product Offering Details: {{{productOfferingDetails}}}

  Value Propositions:
  `,
});

const generatePersonalizedValuePropositionsFlow = ai.defineFlow(
  {
    name: 'generatePersonalizedValuePropositionsFlow',
    inputSchema: GeneratePersonalizedValuePropositionsInputSchema,
    outputSchema: GeneratePersonalizedValuePropositionsOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
