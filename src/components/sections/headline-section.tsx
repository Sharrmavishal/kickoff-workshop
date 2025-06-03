
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function HeadlineSection() {
  return (
    <section className="text-center py-12 md:py-20 animate-fadeIn">
      <div className="mb-8">
        <Image
          src="https://res.cloudinary.com/dnm2ejglr/image/upload/v1748078078/linkedin_carousel_2_dmqy7k.png"
          alt="The Solopreneur Kickoff Workshop Header"
          width={800}
          height={400}
          className="rounded-lg shadow-lg mx-auto"
          data-ai-hint="workshop business"
          priority
        />
      </div>
      <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-primary">
        The Solopreneur Kickoff Workshop
      </h1>
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-accent mt-2">
        Launch Your Thriving Business on Your Terms
      </h2>
      <p className="mt-6 text-lg sm:text-xl text-foreground max-w-3xl mx-auto">
        “Someday” is too expensive. Your dream is ready for takeoff. What if you could skip the MBA, investors and the 9-5 grind and start building your business this week?
        <br /><br />
        Join <strong>Diksha Sethi, Co-founder of Start Solo</strong>, in <strong>The Solopreneur Kickoff Workshop</strong>—a live, 3-hour masterclass to turn your skill, passion, or idea into a revenue-generating venture.
      </p>
      <div className="mt-10 flex flex-col sm:flex-row justify-center items-center gap-4">
        <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground shadow-lg transform hover:scale-105 transition-transform duration-300 px-8 py-3 text-lg">
          <a href="https://hub.startsolo.in/l/f4aac85c90" target="_blank" rel="noopener noreferrer">
            Join - June 11 (7-10pm)
          </a>
        </Button>
        <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground shadow-lg transform hover:scale-105 transition-transform duration-300 px-8 py-3 text-lg">
          <a href="https://hub.startsolo.in/l/2e06afcd2c" target="_blank" rel="noopener noreferrer">
            Join - June 14 (12:30-3:30PM)
          </a>
        </Button>
      </div>
    </section>
  );
}
