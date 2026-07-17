import type { Metadata, Viewport } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import CookieConsent from '@/components/CookieConsent';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import './globals.css'

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
});
const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
});

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.tobekin.com'
const SITE_NAME = 'TOBEKIN TONNEAU COVER'
const SITE_DESCRIPTION = 'Premium tonneau covers and exterior accessories for pickup trucks. Soft roll-up, low profile, tri-fold, and hard covers available. Shop on Amazon with fast shipping.'
const GTM_ID = 'GTM-5HC78855'

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
    'tonneau truck bed covers',
    'truck bed covers',
    'pickup truck bed covers',
    'tonneau cover',
    'pickup truck accessories',
    'hard folding tonneau cover',
    'hard folding truck bed cover',
    'soft roll-up tonneau',
    'tonneau soft roll up cover',
    'low profile tonneau cover',
    'tri-fold tonneau',
    'hard tonneau cover',
    'truck bed cover',
    'aftermarket truck accessories',
    'B2B truck accessories',
    'B2B tonneau cover supplier',
    'wholesale tonneau covers',
    'bulk truck bed covers',
    'dealer tonneau cover inquiry',
    'truck accessories',
    'pickup truck accessories',
    'truck bed accessories',
    'aftermarket truck parts',
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
  const orgJsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: SITE_NAME,
    url: SITE_URL,
    logo: `${SITE_URL}/favicon.svg`,
    description: SITE_DESCRIPTION,
    email: "support@tobekin.com",
    telephone: "+86-190-3219-6829",
    address: {
      "@type": "PostalAddress",
      addressRegion: "Zhejiang",
      addressCountry: "CN",
    },
    sameAs: [],
  }

  const websiteJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: SITE_NAME,
    url: SITE_URL,
    description: SITE_DESCRIPTION,
  }

  return (
    <html lang="en">
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','${GTM_ID}');`,
          }}
        />
      </head>
      <body className={`${geist.variable} ${geistMono.variable} font-sans antialiased`}>
        <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />
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
