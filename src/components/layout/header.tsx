
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Home, Wand2, Rocket } from 'lucide-react';

export default function Header() {
  return (
    <header className="bg-card shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-2 text-primary hover:text-primary/80 transition-colors">
            <Rocket className="h-7 w-7" />
            <span className="text-xl font-semibold">Solo Launchpad</span>
          </Link>
          <nav className="flex items-center space-x-2 sm:space-x-4">
            <Button variant="ghost" asChild>
              <Link href="/" className="flex items-center gap-1">
                <Home className="h-4 w-4" />
                <span className="hidden sm:inline">Home</span>
              </Link>
            </Button>
            <Button variant="ghost" asChild>
              <Link href="/value-proposition-generator" className="flex items-center gap-1">
                <Wand2 className="h-4 w-4" />
                <span className="hidden sm:inline">AI Tool</span>
              </Link>
            </Button>
          </nav>
        </div>
      </div>
    </header>
  );
}
