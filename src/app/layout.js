import './globals.css';
import { Roboto } from 'next/font/google';
import { AppProvider } from '@/context/AppContext';

const roboto = Roboto({
  weight: ['300', '400', '500', '700', '900'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-roboto',
});

export const metadata = {
  title: 'GlowReview Hub — Real Reviews. Healthier Skin.',
  description: 'Independent dermatological reviews, clinical ingredient testing, and community ratings for US & UK skincare enthusiasts.',
  keywords: 'skincare reviews, best vitamin c serum, cerave moisturizer, dermatologist tested, US UK skincare, allured beauty, boots skincare',
  openGraph: {
    title: 'GlowReview Hub — Real Reviews. Healthier Skin.',
    description: 'Expert skincare product reviews and ratings for US & UK readers.',
    type: 'website',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={roboto.variable}>
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className={roboto.className}>
        <AppProvider>
          {children}
        </AppProvider>
      </body>
    </html>
  );
}
