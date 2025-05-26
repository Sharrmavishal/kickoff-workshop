
"use client";

import { useState } from 'react';
import { useForm, type SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { generatePersonalizedValuePropositions, type GeneratePersonalizedValuePropositionsInput, type GeneratePersonalizedValuePropositionsOutput } from '@/ai/flows/generate-personalized-value-propositions';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Loader2, Sparkles } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const formSchema = z.object({
  targetCustomerDetails: z.string().min(20, { message: "Please provide at least 20 characters for customer details." }).max(1000),
  productOfferingDetails: z.string().min(20, { message: "Please provide at least 20 characters for product details." }).max(1000),
});

type FormData = z.infer<typeof formSchema>;

export default function GeneratorForm() {
  const [isLoading, setIsLoading] = useState(false);
  const [result, setResult] = useState<GeneratePersonalizedValuePropositionsOutput | null>(null);
  const { toast } = useToast();

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      targetCustomerDetails: "",
      productOfferingDetails: "",
    },
  });

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    setIsLoading(true);
    setResult(null);
    try {
      const inputData: GeneratePersonalizedValuePropositionsInput = {
        targetCustomerDetails: data.targetCustomerDetails,
        productOfferingDetails: data.productOfferingDetails,
      };
      const response = await generatePersonalizedValuePropositions(inputData);
      setResult(response);
      toast({
        title: "Propositions Generated!",
        description: "Review the suggestions below.",
      });
    } catch (error) {
      console.error("Error generating value propositions:", error);
      toast({
        variant: "destructive",
        title: "Error",
        description: "Failed to generate value propositions. Please try again.",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <FormField
            control={form.control}
            name="targetCustomerDetails"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-lg font-medium text-foreground">Target Customer Details</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="e.g., Small business owners struggling with online marketing, tech-savvy millennials looking for sustainable products..."
                    className="min-h-[120px] resize-none"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="productOfferingDetails"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-lg font-medium text-foreground">Product/Service Offering Details</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="e.g., An AI-powered social media management tool that automates posting, a subscription box for artisanal coffee..."
                    className="min-h-[120px] resize-none"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit" disabled={isLoading} className="w-full bg-primary hover:bg-primary/90 text-primary-foreground py-3 text-lg">
            {isLoading ? (
              <>
                <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                Generating...
              </>
            ) : (
              <>
                <Sparkles className="mr-2 h-5 w-5" />
                Generate Propositions
              </>
            )}
          </Button>
        </form>
      </Form>

      {result && result.valuePropositions && result.valuePropositions.length > 0 && (
        <Card className="mt-8 shadow-lg animate-fadeIn">
          <CardHeader>
            <CardTitle className="text-2xl font-semibold text-primary">Generated Value Propositions</CardTitle>
            <CardDescription className="text-muted-foreground">Here are some AI-generated suggestions for your review:</CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="space-y-3 list-disc list-inside">
              {result.valuePropositions.map((proposition, index) => (
                <li key={index} className="text-foreground p-3 bg-background rounded-md border border-border">
                  {proposition}
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
