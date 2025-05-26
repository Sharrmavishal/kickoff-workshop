
import { Button } from "@/components/ui/button";

export default function HeadlineSection() {
  return (
    <section className="text-center py-12 md:py-20 animate-fadeIn">
      <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-primary">
        Launch Your Thriving Business <br className="hidden sm:inline" />
        on <span className="text-accent">Your Terms</span>
      </h1>
      <p className="mt-6 text-lg sm:text-xl text-foreground max-w-2xl mx-auto">
        Discover the blueprint to validate your ideas, find your niche, and secure your first paying client. Start your entrepreneurial journey with confidence.
      </p>
      <div className="mt-8">
        <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground shadow-lg transform hover:scale-105 transition-transform duration-300">
          <a href="https://hub.startsolo.in/l/f4aac85c90" target="_blank" rel="noopener noreferrer">
            Join the Workshop Now
          </a>
        </Button>
      </div>
    </section>
  );
}
