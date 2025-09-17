import type { Metadata } from 'next'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import WhatsAppButton from '@/components/WhatsAppButton'
import { ThemeProvider } from '@/contexts/ThemeContext'

export const metadata: Metadata = {
  title: 'Moramo Brasil - Espelhos Decorativos, Nichos e Travesseiros Premium | Decoração e Bem-estar',
  description: 'Descubra a Moramo Brasil: espelhos decorativos exclusivos, nichos organizadores elegantes e travesseiros premium. Transforme sua casa com produtos de qualidade superior, design italiano e acabamentos sofisticados. Entrega em todo Brasil.',
  keywords: [
    'espelhos decorativos',
    'nichos organizadores', 
    'travesseiros premium',
    'decoração casa',
    'móveis decorativos',
    'bem-estar',
    'qualidade superior',
    'design italiano',
    'acabamentos sofisticados',
    'Moramo Brasil',
    'decoração elegante',
    'travesseiros ergonômicos',
    'espelhos com moldura',
    'nichos funcionais',
    'produtos premium'
  ].join(', '),
  authors: [{ name: 'Moramo Brasil' }],
  creator: 'Moramo Brasil',
  publisher: 'Moramo Brasil',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    title: 'Moramo Brasil - Espelhos Decorativos, Nichos e Travesseiros Premium',
    description: 'Transforme sua casa com espelhos decorativos exclusivos, nichos organizadores elegantes e travesseiros premium. Qualidade superior e design italiano.',
    type: 'website',
    locale: 'pt_BR',
    url: 'https://www.moramo.com.br',
    siteName: 'Moramo Brasil',
    images: [
      {
        url: '/images/moveis.webp',
        width: 1200,
        height: 630,
        alt: 'Moramo Brasil - Produtos de Decoração e Bem-estar',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Moramo Brasil - Espelhos, Nichos e Travesseiros Premium',
    description: 'Transforme sua casa com produtos de decoração e bem-estar de qualidade superior.',
    images: ['/images/moveis.webp'],
  },
  alternates: {
    canonical: 'https://www.moramo.com.br',
  },
  category: 'Home & Garden',
  classification: 'E-commerce',
  other: {
    'geo.region': 'BR',
    'geo.country': 'Brasil',
    'geo.placename': 'Brasil',
    'DC.title': 'Moramo Brasil - Espelhos, Nichos e Travesseiros Premium',
    'DC.description': 'Produtos de decoração e bem-estar de qualidade superior',
    'DC.subject': 'Decoração, Bem-estar, Espelhos, Nichos, Travesseiros',
    'DC.language': 'pt-BR',
    'DC.creator': 'Moramo Brasil',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
                  document.documentElement.classList.add('dark')
                } else {
                  document.documentElement.classList.remove('dark')
                }
              } catch (_) {}
            `,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Moramo Brasil",
              "description": "Marca brasileira especializada em produtos de decoração e bem-estar, oferecendo espelhos decorativos, nichos organizadores e travesseiros premium.",
              "url": "https://www.moramo.com.br",
              "logo": "https://www.moramo.com.br/images/moveis.webp",
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+55-11-99999-9999",
                "contactType": "customer service",
                "availableLanguage": "Portuguese"
              },
              "sameAs": [
                "https://www.moramo.com.br"
              ],
              "address": {
                "@type": "PostalAddress",
                "addressCountry": "BR",
                "addressRegion": "Brasil"
              },
              "foundingDate": "2024",
              "slogan": "Transformando ambientes com elegância e qualidade",
              "knowsAbout": [
                "Decoração",
                "Bem-estar",
                "Espelhos decorativos",
                "Nichos organizadores",
                "Travesseiros premium",
                "Design italiano"
              ]
            })
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              "name": "Moramo Brasil",
              "url": "https://www.moramo.com.br",
              "description": "Site oficial da Moramo Brasil - produtos de decoração e bem-estar",
              "publisher": {
                "@type": "Organization",
                "name": "Moramo Brasil"
              },
              "potentialAction": {
                "@type": "SearchAction",
                "target": "https://www.moramo.com.br/search?q={search_term_string}",
                "query-input": "required name=search_term_string"
              }
            })
          }}
        />
      </head>
      <body className="font-sans antialiased h-screen overflow-hidden">
        <ThemeProvider>
          <div className="h-screen flex flex-col">
            <Header />
            <main className="flex-1 overflow-hidden">
              {children}
            </main>
            <Footer />
            <WhatsAppButton />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
