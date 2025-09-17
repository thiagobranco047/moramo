import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Travesseiros Premium e Ergonômicos | Moramo Brasil - Conforto e Bem-estar',
  description: 'Descubra nossa linha de travesseiros premium: travesseiros ergonômicos, de perna, para bebês e almofadas de pescoço. Materiais hipoalergênicos, suporte cervical ideal e noites de sono perfeitas. Entrega em todo Brasil.',
  keywords: [
    'travesseiros premium',
    'travesseiros ergonômicos',
    'travesseiro de perna',
    'travesseiro bebê',
    'almofada pescoço',
    'suporte cervical',
    'materiais hipoalergênicos',
    'bem-estar sono',
    'travesseiro king',
    'travesseiro padrão',
    'conforto sono',
    'qualidade superior',
    'Moramo Brasil'
  ].join(', '),
  openGraph: {
    title: 'Travesseiros Premium e Ergonômicos | Moramo Brasil',
    description: 'Linha completa de travesseiros premium: ergonômicos, de perna, para bebês e almofadas de pescoço. Conforto e bem-estar garantidos.',
    type: 'website',
    url: 'https://www.moramo.com.br/travesseiros',
    images: [
      {
        url: '/images/travesseiros.webp',
        width: 1200,
        height: 630,
        alt: 'Moramo Brasil - Travesseiros Premium',
      },
    ],
  },
  alternates: {
    canonical: 'https://www.moramo.com.br/travesseiros',
  },
}

export default function TravesseirosLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
