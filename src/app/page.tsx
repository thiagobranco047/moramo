'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight, Sofa, Bed } from 'lucide-react'

export default function Home() {
  return (
    <main className="h-full bg-white dark:bg-[#111111] flex items-center justify-center p-4">
      <div className="max-w-6xl w-full">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-8"
        >
          <h1 className="font-serif text-3xl md:text-5xl font-light text-[#1e293b] dark:text-white mb-3">
            Moramo Brasil
          </h1>
          <p className="font-sans text-sm md:text-base text-[#64748b] dark:text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Descubra nossa linha exclusiva de móveis elegantes e travesseiros premium. 
            Qualidade e sofisticação para sua casa.
          </p>
        </motion.div>

        {/* Product Line Selector */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6 max-w-4xl mx-auto">
          {/* Furniture Line */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Link href="/decoracao">
              <div className="group relative bg-black dark:bg-black rounded-2xl p-4 md:p-8 transition-all duration-500 hover-lift overflow-hidden h-64 md:h-80 flex flex-col justify-end">
                {/* Background Image */}
                <div className="absolute inset-0 opacity-50 group-hover:opacity-30 transition-opacity duration-500">
                  <div className="absolute inset-0 bg-[url('/images/moveis.webp')] bg-cover bg-center group-hover:blur-sm transition-all duration-500"></div>
                </div>
                
                {/* Icon */}
                <div className="relative z-10 mb-3">
                  <div className="w-10 h-10 bg-[#d7c4b3] rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                    <Sofa className="w-5 h-5 text-white" />
                  </div>
                </div>

                {/* Content */}
                <div className="relative z-10">
                  <h2 className="font-serif text-xl md:text-2xl font-medium text-white dark:text-white mb-2 group-hover:text-white dark:group-hover:text-white transition-colors duration-300">
                    Objetos de Decoração
                  </h2>
                  <p className="font-sans text-xs md:text-sm text-white dark:text-[white] leading-relaxed mb-3">
                    Produtos elegantes e funcionais que transformam qualquer ambiente em um espaço sofisticado.
                  </p>
                  
                  {/* CTA Button */}
                  <div className="flex items-center text-white dark:text-white font-medium group-hover:text-[#d7c4b3] dark:group-hover:text-[#d7c4b3] transition-colors duration-300">
                    <span className="text-sm">Explorar coleção</span>
                    <ArrowRight className="w-3 h-3 ml-1 group-hover:translate-x-1 transition-transform duration-300" />
                  </div>
                </div>

                {/* Hover Overlay */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-5 transition-opacity duration-500 rounded-2xl"></div>
              </div>
            </Link>
          </motion.div>

          {/* Pillow Line */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Link href="/travesseiros">
              <div className="group relative bg-black dark:bg-black rounded-2xl p-4 md:p-8 transition-all duration-500 hover-lift overflow-hidden h-64 md:h-80 flex flex-col justify-end">
                {/* Background Image */}
                <div className="absolute inset-0 opacity-50 group-hover:opacity-30 transition-opacity duration-500">
                  <div className="absolute inset-0 bg-[url('/images/travesseiros.webp')] bg-cover bg-center group-hover:blur-sm transition-all duration-500"></div>
                </div>
                
                {/* Icon */}
                <div className="relative z-10 mb-3">
                  <div className="w-10 h-10 bg-[#d7c4b3] rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                    <Bed className="w-5 h-5 text-white" />
                  </div>
                </div>

                {/* Content */}
                <div className="relative z-10">
                  <h2 className="font-serif text-xl md:text-2xl font-medium text-white dark:text-white mb-2 group-hover:text-white dark:group-hover:text-white transition-colors duration-300">
                    Travesseiros
                  </h2>
                  <p className="font-sans text-xs md:text-sm text-white dark:text-[white] leading-relaxed mb-3">
                    Travesseiros premium que garantem o conforto ideal para noites de sono perfeitas e relaxantes.
                  </p>
                  
                  {/* CTA Button */}
                  <div className="flex items-center text-white dark:text-white font-medium group-hover:text-[#d7c4b3] dark:group-hover:text-[#d7c4b3] transition-colors duration-300">
                    <span className="text-sm">Conhecer produtos</span>
                    <ArrowRight className="w-3 h-3 ml-1 group-hover:translate-x-1 transition-transform duration-300" />
                  </div>
                </div>

                {/* Hover Overlay */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-5 transition-opacity duration-500 rounded-2xl"></div>
              </div>
            </Link>
          </motion.div>
        </div>
      </div>
    </main>
  )
}
