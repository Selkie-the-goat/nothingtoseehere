'use client'

import { motion } from 'framer-motion'
import { useEffect } from 'react'

interface MessageProps {
  onComplete?: () => void
  autoScroll?: boolean
}

export default function Message({ onComplete, autoScroll = true }: MessageProps) {
  const messageVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1.2,
        ease: 'easeOut',
      },
    },
  }

  useEffect(() => {
    if (autoScroll && onComplete) {
      const timer = setTimeout(() => {
        onComplete()
      }, 5000)
      return () => clearTimeout(timer)
    }
  }, [autoScroll, onComplete])

  return (
    <motion.div
      variants={messageVariants}
      initial="hidden"
      whileInView="visible"
      className="text-center max-w-4xl mx-auto px-6"
    >
      <motion.p
        className="hero-text text-5xl md:text-7xl text-dark-red leading-tight drop-shadow-lg"
      >
        You know,
        <motion.span
          animate={{ 
            color: ['#c41e3a', '#ff69b4', '#c41e3a'],
            scale: [1, 1.02, 1]
          }}
          transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
          className="block mt-6"
        >
          you really changed my world 😋
        </motion.span>
      </motion.p>
    </motion.div>
  )
}
