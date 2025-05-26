
import GeneratorForm from './components/generator-form';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Lightbulb } from 'lucide-react';

export default function ValuePropositionGeneratorPage() {
  return (
    <div className="py-8">
      <Card className="max-w-3xl mx-auto shadow-xl animate-fadeIn">
        <CardHeader className="text-center">
          <div className="flex justify-center mb-4">
            <Lightbulb className="h-12 w-12 text-primary" />
          </div>
          <CardTitle className="text-3xl font-semibold text-primary">Personalized Value Proposition Generator</CardTitle>
          <CardDescription className="text-lg text-muted-foreground mt-2">
            Craft compelling value propositions tailored to your audience. Enter details about your target customer and product, and let our AI assistant generate suggestions.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <GeneratorForm />
        </CardContent>
      </Card>
    </div>
  );
}
