// app/layout.js
import './globals.css';
import { Inter } from 'next/font/google'; // Atau font lain yang kamu suka
import Navbar from '@/components/Navbar'; // Path alias @/ otomatis dari Next.js
import Footer from '@/components/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Portofolio Muhamad Bayu Yusuf',
  description: 'Website portofolio modern dibuat dengan Next.js dan Tailwind CSS',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} bg-slate-50 text-slate-800 pt-16`}> {/* pt-16 untuk memberi ruang bagi navbar fixed */}
        <Navbar />
        <main className="min-h-screen "> 
            {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}