import './globals.css';
import { Inter } from 'next/font/google';
import Navbar from '../Components/Navbar';
import Footer from '@/Components/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Henry Omino — Full Stack Developer',
  description: 'Portfolio of Henry Omino — Full Stack Developer & UI/UX Designer',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-[#05060a] text-slate-200`}> 
        <Navbar />
        <main className="min-h-screen container mx-auto px-6">{children}</main>
        <Footer />
      </body>
    </html>
  );
}