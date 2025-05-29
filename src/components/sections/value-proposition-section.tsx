
import { Card, CardHeader } from '@/components/ui/card'; // Removed CardContent as it's not used directly here.
import { CheckCircle, Star, Zap, ClipboardList, Goal, UserCheck } from 'lucide-react';

const valueProps = [
  { text: 'Your First Client Playbook: Actionable steps to land a paying customer in 90 days.', icon: <CheckCircle className="text-primary h-6 w-6" /> },
  { text: 'Profit Clarity: Pinpoint exactly how to monetise your expertise into a monetizable offer (writer, creator, consultant—you name it).', icon: <Star className="text-primary h-6 w-6" /> },
  { text: 'Define Product/Service: Getting off the ground with a compelling product offering.', icon: <ClipboardList className="text-primary h-6 w-6" /> },
  { text: 'A Personalised Roadmap: No vague advice. Just a step-by-step plan tailored to your goals.', icon: <Goal className="text-primary h-6 w-6" /> },
  { text: 'Zero-BS Mentorship: Start Solo’s battle-tested strategies—no fluff, just results.', icon: <UserCheck className="text-primary h-6 w-6" /> },
];

export default function ValuePropositionSection() {
  return (
    <section className="py-12 md:py-16 bg-card rounded-lg shadow-lg animate-fadeIn" style={{animationDelay: '0.4s'}}>
      <div className="section-container px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-semibold text-center mb-10 text-primary">
          You’ll Walk Away With:
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {valueProps.map((prop, index) => (
            <Card key={index} className="bg-background hover:shadow-xl transition-shadow duration-300">
              <CardHeader>
                <div className="flex items-start space-x-3">
                  <div className="flex-shrink-0 mt-1">{prop.icon}</div>
                  <p className="text-base sm:text-lg font-medium text-foreground">{prop.text}</p>
                </div>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
