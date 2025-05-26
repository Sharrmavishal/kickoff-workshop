
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle, Star, Zap } from 'lucide-react';

const valueProps = [
  { text: 'Your First Client Playbook: Step-by-step guidance to land your initial paying customer.', icon: <CheckCircle className="text-primary h-5 w-5" /> },
  { text: 'Profit Clarity: Understand your numbers and price your offerings effectively for profitability.', icon: <Star className="text-primary h-5 w-5" /> },
  { text: 'Personalised Roadmap: Develop a custom action plan tailored to your unique business goals.', icon: <Zap className="text-primary h-5 w-5" /> },
  { text: 'Idea Validation Techniques: Learn how to test your business idea with minimal risk.', icon: <CheckCircle className="text-primary h-5 w-5" /> },
  { text: 'Niche Discovery: Pinpoint your ideal target audience and carve out your unique market space.', icon: <Star className="text-primary h-5 w-5" /> },
  { text: 'Offer Creation Mastery: Build compelling offers that resonate with your customers.', icon: <Zap className="text-primary h-5 w-5" /> },
];

export default function ValuePropositionSection() {
  return (
    <section className="py-12 md:py-16 bg-card rounded-lg shadow-lg animate-fadeIn" style={{animationDelay: '0.4s'}}>
      <div className="section-container">
        <h2 className="text-3xl font-semibold text-center mb-10 text-primary">
          What You'll Gain from This Workshop
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {valueProps.map((prop, index) => (
            <Card key={index} className="bg-background hover:shadow-xl transition-shadow duration-300">
              <CardHeader>
                <div className="flex items-start space-x-3">
                  <div className="flex-shrink-0 mt-1">{prop.icon}</div>
                  <p className="text-lg font-medium text-foreground">{prop.text}</p>
                </div>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
