import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Navbar from '../Components/Navbar';
import Footer from '@/Components/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Henry Omino, Entrepreneur & Software Engineer',
  description: 'Portfolio of Henry Omino, Entrepreneur & Software Engineer'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-[#05060a] text-slate-200`}>
        <Navbar />
        <main className="min-h-screen container mx-auto px-4 sm:px-6 pb-12 pt-24 sm:pt-28">{children}</main>
        <Footer />
      </body>
    </html>
  );
}