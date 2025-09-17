import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Sobre a Moramo Brasil - Nossa História, Missão e Produtos',
  description: 'Conheça a Moramo Brasil, marca brasileira especializada em objetos de decoração e travesseiros premium. Descubra nossa missão, valores e produtos de qualidade.',
  keywords: 'Moramo Brasil, sobre, história, missão, valores, objetos de decoração, espelhos, nichos, travesseiros, decoração brasileira, qualidade premium',
  authors: [{ name: 'Moramo Brasil' }],
  openGraph: {
    title: 'Sobre a Moramo Brasil - Nossa História, Missão e Produtos',
    description: 'Conheça a Moramo Brasil, marca brasileira especializada em objetos de decoração e travesseiros premium.',
    type: 'website',
    locale: 'pt_BR',
  },
  alternates: {
    canonical: '/sobre',
  },
}

export default function SobreLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
