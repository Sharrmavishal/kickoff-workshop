
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ClipboardList, Lightbulb, Users, Goal } from 'lucide-react';

const curriculumTopics = [
  { title: 'Validate Your Idea', description: 'Learn practical methods to test your business concept before fully committing.', icon: <Lightbulb className="h-10 w-10 text-primary mb-4" /> },
  { title: 'Find Your Niche', description: 'Identify your ideal customer and understand their needs to tailor your offerings.', icon: <Users className="h-10 w-10 text-primary mb-4" /> },
  { title: 'Build a Simple Offer', description: 'Craft an irresistible offer that clearly communicates your value.', icon: <ClipboardList className="h-10 w-10 text-primary mb-4" /> },
  { title: 'Get Your First Paying Client', description: 'Strategies and tactics to acquire your first customer and build momentum.', icon: <Goal className="h-10 w-10 text-primary mb-4" /> },
];

export default function WorkshopCurriculumSection() {
  return (
    <section className="py-12 md:py-16 animate-fadeIn" style={{animationDelay: '0.6s'}}>
      <div className="section-container">
        <h2 className="text-3xl font-semibold text-center mb-10 text-primary">
          3-Hour Workshop Curriculum
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          {curriculumTopics.map((topic, index) => (
            <Card key={index} className="text-center hover:shadow-xl transition-shadow duration-300">
              <CardHeader className="flex flex-col items-center">
                {topic.icon}
                <CardTitle className="text-xl font-medium text-foreground">{topic.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{topic.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
