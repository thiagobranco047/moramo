'use client'

import { motion } from 'framer-motion'
import { ExternalLink, ShoppingCart, Bed, ZoomIn } from 'lucide-react'
import { Fancybox } from '@fancyapps/ui'
import { useEffect } from 'react'

interface ProductCardProps {
  product: {
    id: number
    name: string
    description: string
    category: string
    image: string
    externalLink?: string
    variants?: Array<{
      color: string
      image: string
    }>
  }
  variant: 'furniture' | 'pillow'
  index: number
}

export default function ProductCard({ product, variant, index }: ProductCardProps) {
  const isFurniture = variant === 'furniture'
  const Icon = isFurniture ? ShoppingCart : Bed

  useEffect(() => {
    // Initialize Fancybox
    Fancybox.bind('[data-fancybox]')

    // Cleanup
    return () => {
      Fancybox.destroy()
    }
  }, [])

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.1 * index }}
      className="group bg-white dark:bg-black rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-500 hover-lift border border-[#e2e8f0] dark:border-gray-600"
    >
      {/* Product Image */}
      <div className="relative h-64 overflow-hidden bg-white">
        <img 
          src={product.image} 
          alt={product.name}
          className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <a 
            href={product.image}
            data-fancybox={`product-${product.id}`}
            data-caption={product.name}
            className="w-16 h-16 rounded-full flex items-center justify-center bg-white/90 backdrop-blur-sm hover:bg-white transition-colors duration-300 cursor-pointer"
          >
            <ZoomIn className="w-8 h-8 text-black" />
          </a>
        </div>
        
        {/* Hidden variant images for Fancybox gallery - only add variants that are different from main image */}
        {product.variants && product.variants
          .filter(variant => variant.image !== product.image)
          .map((variant, variantIndex) => (
            <a
              key={variantIndex}
              href={variant.image}
              data-fancybox={`product-${product.id}`}
              data-caption={`${product.name} - ${variant.color}`}
              className="hidden"
            >
              {variant.color}
            </a>
          ))}
      </div>

      {/* Product Info */}
      <div className="p-6">
        <div className="mb-2">
          <span className="text-xs font-medium uppercase tracking-wide text-black dark:text-white">
            {product.category}
          </span>
        </div>
        <h3 className="font-serif text-xl font-medium text-[#1e293b] dark:text-white mb-2 transition-colors duration-300 group-hover:text-black dark:group-hover:text-gray-100">
          {product.name}
        </h3>
        <p className="font-sans text-sm text-[#64748b] dark:text-gray-300 mb-4">
          {product.description}
        </p>
        
        {/* Learn More Button */}
        {product.externalLink ? (
          <a 
            href={product.externalLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center font-medium transition-colors duration-300 text-black dark:text-white hover:text-[#1a1a1a] dark:hover:text-gray-100"
          >
            <span>Ver no e-commerce</span>
            <ExternalLink className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
          </a>
        ) : (
          <button className="inline-flex items-center font-medium transition-colors duration-300 text-black dark:text-white hover:text-[#1a1a1a] dark:hover:text-gray-100">
            <span>Saiba mais</span>
            <ExternalLink className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
          </button>
        )}
      </div>
    </motion.div>
  )
}
