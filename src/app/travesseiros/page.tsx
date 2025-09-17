'use client'

import { motion } from 'framer-motion'
import { ExternalLink, MessageCircle } from 'lucide-react'
import ProductCard from '@/components/ProductCard'
import travesseirosData from '@/data/travesseiros.json'

const pillowProducts = travesseirosData

export default function PillowsPage() {
  const handleWhatsAppContact = () => {
    const phoneNumber = '5511999999999' // Replace with actual sales number
    const message = 'Olá! Gostaria de saber mais sobre a linha de travesseiros Moramo Brasil.'
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, '_blank')
  }

  return (
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
            Linha de Travesseiros
          </h1>
          <p className="font-sans text-sm md:text-base text-[#64748b] dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Nossa nova linha de travesseiros premium foi desenvolvida para proporcionar 
            o conforto ideal e noites de sono perfeitas. Cada travesseiro é fabricado 
            com materiais de alta qualidade e tecnologia avançada para garantir seu bem-estar.
          </p>
        </motion.div>

        {/* Featured Products Grid */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8"
        >
          {pillowProducts.map((product, index) => (
            <ProductCard 
              key={product.id}
              product={product}
              variant="pillow"
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
              Entre em Contato Conosco
            </h2>
            <p className="font-sans text-xs md:text-sm text-[#64748b] dark:text-gray-300 mb-4 leading-relaxed">
              Nossa equipe de vendas está pronta para ajudá-lo a encontrar o travesseiro 
              perfeito para suas necessidades. Entre em contato via WhatsApp para 
              atendimento personalizado e orçamentos.
            </p>
            
            <button 
              onClick={handleWhatsAppContact}
              className="inline-flex items-center bg-black text-white px-4 py-2 rounded-full font-medium hover:bg-[#1a1a1a] transition-all duration-300 hover-lift shadow-lg hover:shadow-xl"
            >
              <MessageCircle className="w-4 h-4 mr-2" />
              Contatar Equipe de Vendas
              <ExternalLink className="w-4 h-4 ml-2" />
            </button>
          </div>
        </motion.div>
      </div>
    </main>
  )
}
