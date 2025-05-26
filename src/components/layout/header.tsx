
import Image from 'next/image';
import Link from 'next/link'; // Keep Link for the logo
import { Button } from '@/components/ui/button';
import { Home } from 'lucide-react';

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
          <nav className="flex items-center space-x-2 sm:space-x-4">
            <Button variant="ghost" asChild>
              <a 
                href="https://startsolo.in/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center gap-1"
              >
                <Home className="h-4 w-4" />
                <span className="hidden sm:inline">Home</span>
              </a>
            </Button>
            {/* AI Tool link removed */}
          </nav>
        </div>
      </div>
    </header>
  );
}
