'use client'

import { motion } from 'framer-motion'
import { ReactNode } from 'react'

interface SectionProps {
  children: ReactNode
  bgGradient?: string
  id?: string
}

export default function Section({ 
  children, 
  bgGradient = 'linear-gradient(180deg, rgba(255, 179, 217, 0.08) 0%, rgba(212, 175, 55, 0.05) 100%)',
  id 
}: SectionProps) {
  return (
    <motion.section
      id={id}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      style={{ background: bgGradient }}
      className="min-h-screen w-full flex items-center justify-center px-6 py-20 relative z-10"
    >
      <div className="w-full max-w-7xl mx-auto">
        {children}
      </div>
    </motion.section>
  )
}
