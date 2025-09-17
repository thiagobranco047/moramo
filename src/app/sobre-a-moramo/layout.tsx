import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Sobre a Moramo Brasil - Nossa História, Missão e Valores | Decoração e Bem-estar',
  description: 'Conheça a Moramo Brasil: marca brasileira especializada em produtos de decoração e bem-estar. Nossa missão é transformar ambientes com elegância, qualidade e inovação. Descubra nossa história e valores.',
  keywords: [
    'sobre Moramo Brasil',
    'história da empresa',
    'missão e valores',
    'produtos decoração',
    'bem-estar',
    'qualidade garantida',
    'design exclusivo',
    'atendimento personalizado',
    'marca brasileira',
    'inovação decoração'
  ].join(', '),
  openGraph: {
    title: 'Sobre a Moramo Brasil - Nossa História, Missão e Valores',
    description: 'Conheça a Moramo Brasil: marca brasileira especializada em produtos de decoração e bem-estar. Transformando ambientes com elegância e qualidade.',
    type: 'website',
    url: 'https://www.moramo.com.br/sobre-a-moramo',
    images: [
      {
        url: '/images/moveis.webp',
        width: 1200,
        height: 630,
        alt: 'Moramo Brasil - Sobre a Empresa',
      },
    ],
  },
  alternates: {
    canonical: 'https://www.moramo.com.br/sobre-a-moramo',
  },
}

export default function SobreLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}