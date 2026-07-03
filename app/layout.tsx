import type { Metadata, Viewport } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import CookieConsent from '@/components/CookieConsent';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import './globals.css'

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.tobekin.com'
const SITE_NAME = 'TOBEKIN TONNEAU COVER'
const SITE_DESCRIPTION = 'Premium tonneau covers and exterior accessories for pickup trucks. Soft roll-up, low profile, tri-fold, and hard covers available. Shop on Amazon with fast shipping.'

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#0F172A',
}

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${SITE_NAME} | Premium Tonneau Covers & Truck Accessories`,
    template: `%s | ${SITE_NAME}`,
  },
  description: SITE_DESCRIPTION,
  keywords: [
    'tonneau cover',
    'pickup truck accessories',
    'soft roll-up tonneau',
    'tri-fold tonneau',
    'hard tonneau cover',
    'truck bed cover',
    'TOBEKIN',
    'Amazon tonneau',
  ],
  authors: [{ name: SITE_NAME }],
  creator: SITE_NAME,
  publisher: SITE_NAME,
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  generator: 'v0.app',
  applicationName: SITE_NAME,
  referrer: 'origin-when-cross-origin',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: SITE_URL,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: SITE_URL,
    siteName: SITE_NAME,
    title: `${SITE_NAME} | Premium Tonneau Covers & Truck Accessories`,
    description: SITE_DESCRIPTION,
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 749,
        alt: `${SITE_NAME} - Premium Tonneau Covers & Truck Accessories`,
        type: 'image/png',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${SITE_NAME} | Premium Tonneau Covers`,
    description: SITE_DESCRIPTION,
    images: ['/og-image.png'],
    creator: '@tobekin',
  },
  icons: {
    icon: [
      { url: '/favicon.svg', type: 'image/svg+xml' },
    ],
    apple: [
      { url: '/apple-icon.svg', type: 'image/svg+xml' },
    ],
    shortcut: '/favicon.svg',
  },
  manifest: '/manifest.json',
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
