'use client'

import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'

interface NavigationProps {
  href?: string
  label?: string
}

export default function Navigation({ href = '/', label = 'Voltar ao início' }: NavigationProps) {
  return (
    <nav className="p-6">
      <Link 
        href={href} 
        className="inline-flex items-center text-[#a0a0a0] hover:text-[#6b46c1] transition-colors duration-300"
      >
        <ArrowLeft className="w-4 h-4 mr-2" />
        {label}
      </Link>
    </nav>
  )
}
