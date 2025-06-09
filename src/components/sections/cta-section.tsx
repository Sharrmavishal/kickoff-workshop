
"use client";

import { Button } from '@/components/ui/button';
import { Rocket } from 'lucide-react';

export default function CtaSection() {
  return (
    <section className="py-12 md:py-20 bg-background text-foreground rounded-lg shadow-xl animate-fadeIn" style={{animationDelay: '0.8s'}}>
      <div className="section-container text-center">
        <Rocket className="h-16 w-16 text-accent mx-auto mb-6" />
        <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-accent">
          Ready to Kickstart Your Solopreneur Journey?
        </h2>
        <p className="text-lg sm:text-xl mb-8 max-w-xl mx-auto text-foreground">
          “Someday” is too expensive. Your dream is ready for takeoff. Don't miss this opportunity for expert guidance and a clear path forward. Secure your spot in The Solopreneur Kickoff Workshop today!
        </p>
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
          <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground shadow-lg animate-pulse_custom transform hover:scale-105 transition-transform duration-300 py-3 text-base sm:text-lg px-6 sm:px-8">
            <a href="https://rzp.io/rzp/solopreneurkickoffjune11" target="_blank" rel="noopener noreferrer">
              Workshop - June 11 (7-10pm)
            </a>
          </Button>
          <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground shadow-lg animate-pulse_custom transform hover:scale-105 transition-transform duration-300 py-3 text-base sm:text-lg px-6 sm:px-8">
            <a href="https://rzp.io/rzp/solopreneurkickoffjune14" target="_blank" rel="noopener noreferrer">
              Workshop - June 14 (12:30-3:30PM)
            </a>
          </Button>
        </div>
      </div>
      <style jsx>{`
        @keyframes pulse_custom_keyframe {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: .8; transform: scale(1.02); }
        }
        .animate-pulse_custom {
          animation: pulse_custom_keyframe 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
      `}</style>
    </section>
  );
}
