
import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { UserCheck, Award, Users, Presentation, CheckCircle } from 'lucide-react';

export default function InstructorBioSection() {
  return (
    <section className="py-12 md:py-16 animate-fadeIn" style={{animationDelay: '0.2s'}}>
      <div className="section-container">
        <Card className="overflow-hidden shadow-xl">
          <div className="md:flex">
            <div className="md:w-1/3 relative min-h-[300px] md:min-h-0">
              <Image
                src="https://res.cloudinary.com/dnm2ejglr/image/upload/v1748078422/Meet_The_Trainer_800x800_400_x_400_px_wov8m8.png"
                alt="Diksha Sethi, Founder of Start Solo"
                width={400}
                height={400}
                className="object-cover w-full h-full"
                priority
              />
            </div>
            <div className="md:w-2/3">
              <CardHeader>
                <CardTitle className="text-3xl font-semibold text-primary flex items-center gap-2">
                  <UserCheck className="h-8 w-8 text-accent" />
                  Meet Your Instructor
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <h3 className="text-2xl font-medium text-primary">Diksha Sethi</h3>
                <p className="text-md text-muted-foreground font-semibold">Founder, Start Solo</p>
                <p className="text-foreground leading-relaxed">
                  Meet Diksha Sethi—Communications Specialist, brand whisperer, and solopreneur champion. With 18 years of experience leading brands like Mastercard, Ford, IndiGo, SpiceJet, and Qualcomm, she has navigated boardrooms, crisis war rooms, and major brand launches.
                </p>
                <ul className="space-y-2 text-foreground">
                  <li className="flex items-center gap-2">
                    <Award className="h-5 w-5 text-primary" />
                    <span>18+ years of proven agency leadership expertise</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Users className="h-5 w-5 text-primary" />
                    <span>Empowered 2,800+ professionals</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Presentation className="h-5 w-5 text-primary" />
                    <span>20,000+ hours of impactful mentoring</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-primary" />
                    <span>Award-winning podcaster & NLP practitioner</span>
                  </li>
                </ul>
                <blockquote className="mt-6 border-l-4 border-primary pl-4 italic text-foreground">
                  <p>"I believe in our motto: 'Start Solo—but not alone.' My mission is to help people look beyond the 9-to-5 and turn their passion into financial freedom. Start Solo is a community that incubates, mentors, and empowers solopreneurs to launch and grow—every step of the way."</p>
                  <footer className="mt-2 text-sm text-muted-foreground">— Diksha Sethi</footer>
                </blockquote>
              </CardContent>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
}
