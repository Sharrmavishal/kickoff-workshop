
import type { Metadata } from 'next';
import { GeistSans } from 'geist/font/sans';
// import { GeistMono } from 'geist/font/mono'; // Resolved: This was causing an error if 'geist' not fully installed or used.
import './globals.css';
import MainLayout from '@/components/layout/main-layout';
import { Toaster } from "@/components/ui/toaster";

export const metadata: Metadata = {
  title: 'The Solopreneur Kickoff Workshop',
  description: 'Launch Your Thriving Business on Your Terms',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${GeistSans.variable}`} suppressHydrationWarning>
      <body className="font-sans antialiased bg-background text-foreground" suppressHydrationWarning={true}>
        <MainLayout>
          {children}
        </MainLayout>
        <Toaster />
      </body>
    </html>
  );
}
