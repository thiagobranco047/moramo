import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Espelhos Decorativos e Nichos Organizadores | Moramo Brasil - Objetos de Decoração',
  description: 'Descubra nossa coleção exclusiva de espelhos decorativos e nichos organizadores. Design italiano, acabamentos em branco, dourado e preto. Transforme sua casa com elegância e funcionalidade. Entrega em todo Brasil.',
  keywords: [
    'espelhos decorativos',
    'nichos organizadores',
    'objetos decoração',
    'espelhos com moldura',
    'nichos funcionais',
    'decoração casa',
    'design italiano',
    'acabamentos sofisticados',
    'espelhos branco',
    'espelhos dourado',
    'espelhos preto',
    'aparadores decorativos',
    'decoração elegante',
    'Moramo Brasil'
  ].join(', '),
  openGraph: {
    title: 'Espelhos Decorativos e Nichos Organizadores | Moramo Brasil',
    description: 'Coleção exclusiva de espelhos decorativos e nichos organizadores. Design italiano com acabamentos sofisticados para transformar sua casa.',
    type: 'website',
    url: 'https://www.moramo.com.br/decoracao',
    images: [
      {
        url: '/images/moveis.webp',
        width: 1200,
        height: 630,
        alt: 'Moramo Brasil - Espelhos e Nichos Decorativos',
      },
    ],
  },
  alternates: {
    canonical: 'https://www.moramo.com.br/decoracao',
  },
}

export default function MobiliarioLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
