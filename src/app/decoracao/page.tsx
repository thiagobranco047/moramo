'use client'

import { motion } from 'framer-motion'
import { ExternalLink, ShoppingCart } from 'lucide-react'
import ProductCard from '@/components/ProductCard'
import mobiliarioData from '@/data/mobiliario.json'

const featuredProducts = mobiliarioData

export default function FurniturePage() {
  // Dados estruturados para produtos de mobiliário
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": "Espelhos Decorativos e Nichos Organizadores - Moramo Brasil",
    "description": "Coleção exclusiva de espelhos decorativos e nichos organizadores com design italiano e acabamentos sofisticados.",
    "url": "https://www.moramo.com.br/mobiliario",
    "mainEntity": {
      "@type": "ItemList",
      "name": "Produtos de Decoração Moramo Brasil",
      "description": "Espelhos decorativos, nichos organizadores e aparadores com design exclusivo",
      "numberOfItems": featuredProducts.length,
      "itemListElement": featuredProducts.map((product, index) => ({
        "@type": "Product",
        "position": index + 1,
        "name": product.name,
        "description": product.description,
        "category": product.category,
        "image": `https://www.moramo.com.br${product.image}`,
        "url": product.externalLink,
        "brand": {
          "@type": "Brand",
          "name": "Moramo Brasil"
        },
        "offers": {
          "@type": "Offer",
          "availability": "https://schema.org/InStock",
          "priceCurrency": "BRL",
          "seller": {
            "@type": "Organization",
            "name": "Moramo Brasil"
          }
        }
      }))
    }
  }
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData)
        }}
      />
      <main className="h-full bg-white dark:bg-black overflow-auto">
      <div className="max-w-7xl mx-auto px-6 py-6">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-8"
        >
          <h1 className="font-serif text-3xl md:text-4xl font-light text-[#1e293b] dark:text-white mb-3">
            Objetos de Decoração
          </h1>
          <p className="font-sans text-sm md:text-base text-[#64748b] dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Nossa coleção de espelhos e nichos combina elegância atemporal com funcionalidade moderna. 
            Cada peça é cuidadosamente selecionada para transformar sua casa em um espaço 
            sofisticado e acolhedor, onde o conforto encontra a beleza.
          </p>
        </motion.div>

        {/* Featured Products Grid */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8"
        >
          {featuredProducts.map((product, index) => (
            <ProductCard 
              key={product.id}
              product={product}
              variant="furniture"
              index={index}
            />
          ))}
        </motion.div>

        {/* CTA Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center pb-4"
        >
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-4 md:p-6 shadow-lg max-w-2xl mx-auto border border-[#e2e8f0] dark:border-gray-600">
            <h2 className="font-serif text-xl md:text-2xl font-medium text-[#1e293b] dark:text-white mb-2">
              Descubra Nossa Coleção Completa
            </h2>
            <p className="font-sans text-xs md:text-sm text-[#64748b] dark:text-gray-300 mb-4 leading-relaxed">
              Explore nossa loja online e encontre o espelho ou nicho perfeito para cada canto da sua casa. 
              Oferecemos entrega em todo o Brasil com garantia de qualidade.
            </p>
            
            <a 
              href="https://www.moramo.com.br/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center bg-black text-white px-4 py-2 rounded-full font-medium hover:bg-[#1a1a1a] transition-all duration-300 hover-lift shadow-lg hover:shadow-xl"
            >
              <ShoppingCart className="w-4 h-4 mr-2" />
              Acessar o E-commerce
              <ExternalLink className="w-4 h-4 ml-2" />
            </a>
          </div>
        </motion.div>
      </div>
    </main>
    </>
  )
}
