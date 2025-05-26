
import type { Metadata } from 'next';
import { GeistSans } from 'geist/font/sans';
import { GeistMono } from 'geist/font/mono';
import './globals.css';
import MainLayout from '@/components/layout/main-layout';
import { Toaster } from "@/components/ui/toaster";

export const metadata: Metadata = {
  title: 'Solo Launchpad',
  description: 'Launch Your Thriving Business on Your Terms',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${GeistSans.variable} ${GeistMono.variable}`} suppressHydrationWarning>
      <body className="font-sans antialiased bg-background text-foreground">
        <MainLayout>
          {children}
        </MainLayout>
        <Toaster />
      </body>
    </html>
  );
}
