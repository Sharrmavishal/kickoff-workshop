
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Home, BookOpen, LifeBuoy, Linkedin, Instagram } from 'lucide-react';

export default function Header() {
  return (
    <header className="bg-card shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/kickoffworkshop" className="flex items-center gap-2 text-primary hover:text-primary/80 transition-colors">
            <Image
              src="https://res.cloudinary.com/dnm2ejglr/image/upload/v1741547630/logos_250_x_50_ma4vuc.svg"
              alt="Start Solo Logo"
              width={125}
              height={25}
              priority
            />
          </Link>
          <nav className="flex items-center space-x-1 sm:space-x-2">
            <Button variant="ghost" asChild>
              <a
                href="https://startsolo.in/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 px-2 py-1 sm:px-3"
              >
                <Home className="h-4 w-4" />
                <span className="hidden sm:inline">Home</span>
              </a>
            </Button>
            <Button variant="ghost" asChild>
              <a
                href="https://startsolo.in/learn"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 px-2 py-1 sm:px-3"
              >
                <BookOpen className="h-4 w-4" />
                <span className="hidden sm:inline">Learn</span>
              </a>
            </Button>
            <Button variant="ghost" asChild>
              <a
                href="https://startsolo.in/support"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 px-2 py-1 sm:px-3"
              >
                <LifeBuoy className="h-4 w-4" />
                <span className="hidden sm:inline">Support</span>
              </a>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <a
                href="https://www.linkedin.com/company/start-solo"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="p-2"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <a
                href="https://www.instagram.com/start.solo/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="p-2"
              >
                <Instagram className="h-5 w-5" />
              </a>
            </Button>
          </nav>
        </div>
      </div>
    </header>
  );
}
