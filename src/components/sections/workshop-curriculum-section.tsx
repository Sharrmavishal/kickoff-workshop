
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ClipboardList, Lightbulb, Users, Goal, Rocket } from 'lucide-react';

const curriculumTopics = [
  { title: 'Validate Your Idea + 1:1 Validation Call', description: 'Ensure your business concept is viable and receive personalized feedback.', icon: <Lightbulb className="h-10 w-10 text-primary mb-4" /> },
  { title: 'Find Your Niche', description: 'Identify and understand your ideal customer to tailor your unique market offerings.', icon: <Users className="h-10 w-10 text-primary mb-4" /> },
  { title: 'Build a Simple, Monetizable Offer', description: 'Craft an irresistible offer from your skills (e.g., writer, creator, consultant).', icon: <ClipboardList className="h-10 w-10 text-primary mb-4" /> },
  { title: 'Getting Off The Ground', description: 'Practical steps and strategies to launch your venture effectively.', icon: <Rocket className="h-10 w-10 text-primary mb-4" /> },
  { title: 'Get Your First Paying Client', description: 'Learn actionable tactics to acquire your initial customer and build momentum.', icon: <Goal className="h-10 w-10 text-primary mb-4" /> },
];

export default function WorkshopCurriculumSection() {
  return (
    <section className="py-12 md:py-16 animate-fadeIn" style={{animationDelay: '0.6s'}}>
      <div className="section-container">
        <h2 className="text-3xl font-semibold text-center mb-10 text-primary">
          In This LIVE 3-Hour Workshop, You’ll Learn How To:
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {curriculumTopics.map((topic, index) => (
            <Card key={index} className="text-center hover:shadow-xl transition-shadow duration-300 flex flex-col">
              <CardHeader className="flex flex-col items-center">
                {topic.icon}
                <CardTitle className="text-xl font-medium text-primary">{topic.title}</CardTitle>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="text-muted-foreground">{topic.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
