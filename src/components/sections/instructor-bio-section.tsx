
import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { UserCheck } from 'lucide-react';

export default function InstructorBioSection() {
  return (
    <section className="py-12 md:py-16 animate-fadeIn" style={{animationDelay: '0.2s'}}>
      <div className="section-container">
        <Card className="overflow-hidden shadow-xl">
          <div className="md:flex">
            <div className="md:w-1/3 relative">
              <Image
                src="https://res.cloudinary.com/dnm2ejglr/image/upload/v1748078422/Meet_The_Trainer_800x800_400_x_400_px_wov8m8.png"
                alt="Diksha Sethi, Co-founder of Start Solo"
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
                <h3 className="text-2xl font-medium text-foreground">Diksha Sethi</h3>
                <p className="text-sm text-muted-foreground font-medium">Co-founder of Start Solo</p>
                <p className="text-foreground leading-relaxed">
                  Diksha Sethi is a seasoned entrepreneur and co-founder of Start Solo, a platform dedicated to empowering aspiring solo business owners. With years of experience in launching and scaling ventures, Diksha brings a wealth of practical knowledge and actionable strategies to help you navigate the complexities of starting your own business. Her passion lies in helping individuals turn their unique skills and ideas into profitable and fulfilling enterprises.
                </p>
              </CardContent>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
}
