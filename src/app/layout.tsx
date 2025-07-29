import './globals.css';
import type { Metadata } from 'next';
import Navbar from '../components/Navbar';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Coco Khmer',
  description: 'Discover our eco-friendly products and company vision.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="text-gray-800">
        <Navbar />
        <main className="p-6">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
