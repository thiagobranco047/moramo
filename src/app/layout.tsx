import type { Metadata } from 'next'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import WhatsAppButton from '@/components/WhatsAppButton'
import { ThemeProvider } from '@/contexts/ThemeContext'

export const metadata: Metadata = {
  title: 'Moramo Brasil - Espelhos, Nichos e Travesseiros de Qualidade',
  description: 'Descubra nossa linha exclusiva de espelhos e nichos elegantes e travesseiros premium. Qualidade e sofisticação para sua casa.',
  keywords: 'espelhos, nichos, travesseiros, decoração, casa, sofisticação, qualidade',
  authors: [{ name: 'Moramo Brasil' }],
  openGraph: {
    title: 'Moramo Brasil - Espelhos, Nichos e Travesseiros de Qualidade',
    description: 'Descubra nossa linha exclusiva de espelhos e nichos elegantes e travesseiros premium.',
    type: 'website',
    locale: 'pt_BR',
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
