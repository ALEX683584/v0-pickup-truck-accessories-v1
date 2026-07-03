import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import CookieConsent from '@/components/CookieConsent';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import './globals.css'

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'TOBEKIN TONNEAU COVER | Premium Tonneau Covers & Truck Accessories',
  description: 'Premium tonneau covers and exterior accessories for pickup trucks. Soft roll-up, low profile, tri-fold, and hard covers available.',
  generator: 'v0.app',
  icons: {
    icon: '/favicon.svg',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans antialiased`}>
        <Header />
        <main className="pt-[90px]">
          {children}
        </main>
        <Footer />
        <CookieConsent />
        <Analytics />
      </body>
    </html>
  )
}
