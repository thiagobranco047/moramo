'use client'

import { motion, useInView } from 'framer-motion'
import { useRef, useEffect, useState } from 'react'
import Navigation from '@/components/Navigation'
import { Heart, Award, Shield, Users, Star, CheckCircle } from 'lucide-react'
import Image from 'next/image'

export default function SobrePage() {
  const [isMounted, setIsMounted] = useState(false)
  const heroBannerRef = useRef(null)
  const heroSectionRef = useRef(null)
  const missionRef = useRef(null)
  const valuesRef = useRef(null)
  const productsRef = useRef(null)
  const whyChooseRef = useRef(null)
  const contactRef = useRef(null)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  const isHeroBannerInView = useInView(heroBannerRef, { once: true, amount: 0.3 })
  const isHeroSectionInView = useInView(heroSectionRef, { once: true, amount: 0.3 })
  const isMissionInView = useInView(missionRef, { once: true, amount: 0.3 })
  const isValuesInView = useInView(valuesRef, { once: true, amount: 0.3 })
  const isProductsInView = useInView(productsRef, { once: true, amount: 0.3 })
  const isWhyChooseInView = useInView(whyChooseRef, { once: true, amount: 0.3 })
  const isContactInView = useInView(contactRef, { once: true, amount: 0.3 })

  return (
    <main className="h-full bg-white dark:bg-black overflow-auto">
      <Navigation href="/" label="Voltar ao início" />
      
      {/* Hero Banner */}
      <motion.div 
        ref={heroBannerRef}
        initial={{ opacity: isMounted ? 0 : 1 }}
        animate={isMounted && isHeroBannerInView ? { opacity: 1 } : { opacity: 1 }}
        transition={{ duration: 1 }}
        className="relative w-full h-[60vh] min-h-[400px] overflow-hidden"
      >
        <Image
          src="/images/moveis.webp"
          alt="Moramo Brasil - Produtos de Decoração e Bem-estar"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
          <div className="text-center text-white px-6">
            <motion.h1 
              initial={{ opacity: isMounted ? 0 : 1, y: isMounted ? 30 : 0 }}
              animate={isMounted && isHeroBannerInView ? { opacity: 1, y: 0 } : { opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="font-serif text-5xl md:text-6xl lg:text-7xl font-light mb-4"
            >
              Moramo Brasil
            </motion.h1>
            <motion.p 
              initial={{ opacity: isMounted ? 0 : 1, y: isMounted ? 30 : 0 }}
              animate={isMounted && isHeroBannerInView ? { opacity: 1, y: 0 } : { opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="text-xl md:text-2xl font-light max-w-3xl mx-auto leading-relaxed"
            >
              Transformando ambientes com elegância e qualidade
            </motion.p>
          </div>
        </div>
      </motion.div>
      
      <div className="max-w-4xl mx-auto px-6 py-8">
        {/* Hero Section */}
        <motion.div 
          ref={heroSectionRef}
          initial={{ opacity: isMounted ? 0 : 1, y: isMounted ? 20 : 0 }}
          animate={isMounted && isHeroSectionInView ? { opacity: 1, y: 0 } : { opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h1 className="font-serif text-4xl md:text-5xl font-light text-[#1e293b] dark:text-white mb-6">
            Sobre a Moramo Brasil
          </h1>
          <p className="font-sans text-lg text-[#64748b] dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Somos uma marca brasileira dedicada a criar produtos de decoração e bem-estar que 
            transformam ambientes e melhoram a qualidade de vida das pessoas.
          </p>
        </motion.div>

        {/* Mission & Vision */}
        <motion.div 
          ref={missionRef}
          initial={{ opacity: isMounted ? 0 : 1, y: isMounted ? 20 : 0 }}
          animate={isMounted && isMissionInView ? { opacity: 1, y: 0 } : { opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid md:grid-cols-2 gap-8 mb-16"
        >
          <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-8">
            <div className="w-12 h-12 bg-[#d7c4b3] rounded-full flex items-center justify-center mb-4">
              <Heart className="w-6 h-6 text-white" />
            </div>
            <h2 className="font-serif text-2xl font-medium text-[#1e293b] dark:text-white mb-4">
              Nossa Missão
            </h2>
            <p className="text-[#64748b] dark:text-gray-300 leading-relaxed">
              Criar produtos de decoração e bem-estar que combinem elegância, funcionalidade e 
              qualidade, proporcionando experiências únicas em cada ambiente.
            </p>
          </div>

          <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-8">
            <div className="w-12 h-12 bg-[#d7c4b3] rounded-full flex items-center justify-center mb-4">
              <Award className="w-6 h-6 text-white" />
            </div>
            <h2 className="font-serif text-2xl font-medium text-[#1e293b] dark:text-white mb-4">
              Nossa Visão
            </h2>
            <p className="text-[#64748b] dark:text-gray-300 leading-relaxed">
              Ser referência em produtos de decoração e bem-estar no Brasil, reconhecida pela 
              qualidade, inovação e compromisso com a satisfação do cliente.
            </p>
          </div>
        </motion.div>

        {/* Values */}
        <motion.div 
          ref={valuesRef}
          initial={{ opacity: isMounted ? 0 : 1, y: isMounted ? 20 : 0 }}
          animate={isMounted && isValuesInView ? { opacity: 1, y: 0 } : { opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-16"
        >
          <h2 className="font-serif text-3xl font-medium text-[#1e293b] dark:text-white text-center mb-8">
            Nossos Valores
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-[#d7c4b3] rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-serif text-xl font-medium text-[#1e293b] dark:text-white mb-2">
                Qualidade
              </h3>
              <p className="text-[#64748b] dark:text-gray-300 text-sm">
                Compromisso com materiais premium e acabamentos perfeitos em todos os produtos.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[#d7c4b3] rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-serif text-xl font-medium text-[#1e293b] dark:text-white mb-2">
                Cliente
              </h3>
              <p className="text-[#64748b] dark:text-gray-300 text-sm">
                Foco total na satisfação e experiência positiva de cada cliente.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[#d7c4b3] rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-serif text-xl font-medium text-[#1e293b] dark:text-white mb-2">
                Inovação
              </h3>
              <p className="text-[#64748b] dark:text-gray-300 text-sm">
                Busca constante por novos designs e soluções criativas para decoração.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Products Section */}
        <motion.div 
          ref={productsRef}
          initial={{ opacity: isMounted ? 0 : 1, y: isMounted ? 20 : 0 }}
          animate={isMounted && isProductsInView ? { opacity: 1, y: 0 } : { opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mb-16"
        >
          <h2 className="font-serif text-3xl font-medium text-[#1e293b] dark:text-white text-center mb-8">
            Nossos Produtos
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-8">
              <h3 className="font-serif text-2xl font-medium text-[#1e293b] dark:text-white mb-4">
                Objetos de Decoração
              </h3>
              <p className="text-[#64748b] dark:text-gray-300 mb-6 leading-relaxed">
                Nossa linha de objetos de decoração inclui espelhos elegantes, nichos funcionais 
                e outros acessórios que transformam qualquer ambiente em um espaço sofisticado 
                e acolhedor.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center text-[#64748b] dark:text-gray-300">
                  <CheckCircle className="w-4 h-4 text-[#d7c4b3] mr-2" />
                  Espelhos com design exclusivo
                </li>
                <li className="flex items-center text-[#64748b] dark:text-gray-300">
                  <CheckCircle className="w-4 h-4 text-[#d7c4b3] mr-2" />
                  Nichos organizadores funcionais
                </li>
                <li className="flex items-center text-[#64748b] dark:text-gray-300">
                  <CheckCircle className="w-4 h-4 text-[#d7c4b3] mr-2" />
                  Acabamentos premium
                </li>
              </ul>
            </div>

            <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-8">
              <h3 className="font-serif text-2xl font-medium text-[#1e293b] dark:text-white mb-4">
                Travesseiros Premium
              </h3>
              <p className="text-[#64748b] dark:text-gray-300 mb-6 leading-relaxed">
                Desenvolvidos com materiais de alta qualidade, nossos travesseiros garantem 
                o conforto ideal para noites de sono perfeitas e relaxantes.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center text-[#64748b] dark:text-gray-300">
                  <CheckCircle className="w-4 h-4 text-[#d7c4b3] mr-2" />
                  Materiais hipoalergênicos
                </li>
                <li className="flex items-center text-[#64748b] dark:text-gray-300">
                  <CheckCircle className="w-4 h-4 text-[#d7c4b3] mr-2" />
                  Diferentes densidades
                </li>
                <li className="flex items-center text-[#64748b] dark:text-gray-300">
                  <CheckCircle className="w-4 h-4 text-[#d7c4b3] mr-2" />
                  Suporte cervical ideal
                </li>
              </ul>
            </div>
          </div>
        </motion.div>

        {/* Why Choose Us */}
        <motion.div 
          ref={whyChooseRef}
          initial={{ opacity: isMounted ? 0 : 1, y: isMounted ? 20 : 0 }}
          animate={isMounted && isWhyChooseInView ? { opacity: 1, y: 0 } : { opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="bg-[#d7c4b3] bg-opacity-10 dark:bg-opacity-20 rounded-2xl p-8 mb-16"
        >
          <h2 className="font-serif text-3xl font-medium text-[#1e293b] dark:text-white text-center mb-8">
            Por que Escolher a Moramo?
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="flex items-start">
              <div className="w-8 h-8 bg-[#d7c4b3] rounded-full flex items-center justify-center mr-4 mt-1">
                <CheckCircle className="w-4 h-4 text-white" />
              </div>
              <div>
                <h3 className="font-medium text-[#1e293b] dark:text-white mb-2">
                  Qualidade Garantida
                </h3>
                <p className="text-[#64748b] dark:text-gray-300 text-sm">
                  Todos os nossos produtos passam por rigoroso controle de qualidade.
                </p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="w-8 h-8 bg-[#d7c4b3] rounded-full flex items-center justify-center mr-4 mt-1">
                <CheckCircle className="w-4 h-4 text-white" />
              </div>
              <div>
                <h3 className="font-medium text-[#1e293b] dark:text-white mb-2">
                  Design Exclusivo
                </h3>
                <p className="text-[#64748b] dark:text-gray-300 text-sm">
                  Produtos com design único e contemporâneo para sua casa.
                </p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="w-8 h-8 bg-[#d7c4b3] rounded-full flex items-center justify-center mr-4 mt-1">
                <CheckCircle className="w-4 h-4 text-white" />
              </div>
              <div>
                <h3 className="font-medium text-[#1e293b] dark:text-white mb-2">
                  Atendimento Personalizado
                </h3>
                <p className="text-[#64748b] dark:text-gray-300 text-sm">
                  Suporte especializado para ajudar você a escolher o produto ideal.
                </p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="w-8 h-8 bg-[#d7c4b3] rounded-full flex items-center justify-center mr-4 mt-1">
                <CheckCircle className="w-4 h-4 text-white" />
              </div>
              <div>
                <h3 className="font-medium text-[#1e293b] dark:text-white mb-2">
                  Entrega Segura
                </h3>
                <p className="text-[#64748b] dark:text-gray-300 text-sm">
                  Logística cuidadosa para garantir que seus produtos cheguem em perfeito estado.
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Contact CTA */}
        <motion.div 
          ref={contactRef}
          initial={{ opacity: isMounted ? 0 : 1, y: isMounted ? 20 : 0 }}
          animate={isMounted && isContactInView ? { opacity: 1, y: 0 } : { opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.0 }}
          className="text-center"
        >
          <h2 className="font-serif text-2xl font-medium text-[#1e293b] dark:text-white mb-4">
            Entre em Contato
          </h2>
          <p className="text-[#64748b] dark:text-gray-300 mb-6 max-w-2xl mx-auto">
            Estamos aqui para ajudar você a encontrar os produtos perfeitos para sua casa. 
            Entre em contato conosco e descubra como podemos transformar seu ambiente.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="https://wa.me/5511999999999" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-6 py-3 bg-[#d7c4b3] text-white rounded-lg hover:bg-[#c4b3a3] transition-colors duration-300"
            >
              <span>Falar no WhatsApp</span>
            </a>
            <a 
              href="mailto:contato@moramo.com.br" 
              className="inline-flex items-center justify-center px-6 py-3 border border-[#d7c4b3] text-[#d7c4b3] rounded-lg hover:bg-[#d7c4b3] hover:text-white transition-colors duration-300"
            >
              <span>Enviar E-mail</span>
            </a>
          </div>
        </motion.div>
      </div>
    </main>
  )
}
