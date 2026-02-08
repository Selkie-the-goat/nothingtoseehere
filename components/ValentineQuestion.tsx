'use client'

import { motion } from 'framer-motion'
import { useState, useRef } from 'react'

interface ValentineQuestionProps {
  onYes: () => void
}

export default function ValentineQuestion({ onYes }: ValentineQuestionProps) {
  const [noClickCount, setNoClickCount] = useState(0)
  const [yesScale, setYesScale] = useState(1)
  const [noPosition, setNoPosition] = useState({ x: 0, y: 0 })
  const noButtonRef = useRef<HTMLButtonElement>(null)

  const handleNoClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    const newCount = noClickCount + 1
    
    // Move No button to random position relative to viewport center
    const maxOffsetX = (window.innerWidth * 0.4) - 150
    const maxOffsetY = (window.innerHeight * 0.4) - 50
    
    const randomX = (Math.random() - 0.5) * 2 * maxOffsetX
    const randomY = (Math.random() - 0.5) * 2 * maxOffsetY
    
    setNoPosition({ x: randomX, y: randomY })
    setNoClickCount(newCount)

    // Enlarge Yes button progressively (but slower to accommodate more clicks)
    setYesScale(1 + newCount * 0.15)

    // After 8 clicks, automatically trigger Yes
    if (newCount >= 8) {
      setTimeout(() => {
        onYes()
      }, 500)
    }
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
    },
  }

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      className="w-full max-w-3xl mx-auto text-center px-6"
    >
      {/* Sparkle effects */}
      {Array.from({ length: 15 }, (_, i) => (
        <motion.div
          key={`sparkle-${i}`}
          className="absolute pointer-events-none"
          initial={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            opacity: 0,
            scale: 0,
          }}
          animate={{
            opacity: [0, 1, 1, 0],
            scale: [0, 1.2, 1, 0],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 2 + Math.random() * 1.5,
            delay: Math.random() * 2,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          style={{
            width: '6px',
            height: '6px',
            background: 'radial-gradient(circle, #fff 0%, rgba(255, 107, 157, 0.8) 50%, transparent 100%)',
            borderRadius: '50%',
            boxShadow: '0 0 8px rgba(255, 255, 255, 0.9), 0 0 16px rgba(255, 107, 157, 0.6)',
          }}
        />
      ))}

      <motion.p
        variants={itemVariants}
        className="text-lg md:text-xl text-vibrant-pink mb-6 italic font-serif"
      >
        so be real with me... 😋
      </motion.p>

      <motion.h2
        variants={itemVariants}
        className="hero-text text-6xl md:text-7xl text-dark-red mb-8 leading-tight"
      >
        Will you be my Valentine?
      </motion.h2>

      <motion.p
        variants={itemVariants}
        className="text-base md:text-lg text-light-text mb-12 italic font-serif max-w-xl mx-auto"
      >
        I think you already know the answer 🤭
      </motion.p>

      {/* Buttons container - both buttons start at same level */}
      <motion.div
        variants={itemVariants}
        className="flex gap-6 justify-center items-center flex-wrap relative"
        style={{ minHeight: '80px' }}
      >
        <motion.button
          animate={{ scale: yesScale }}
          whileHover={{ scale: yesScale * 1.08 }}
          whileTap={{ scale: yesScale * 0.98 }}
          onClick={onYes}
          className="px-10 py-4 bg-gradient-to-r from-dark-red to-vibrant-pink text-white text-2xl font-bold rounded-full shadow-xl hover:shadow-2xl transition-all z-10 relative"
        >
          Absolutely! 😎<br />
          <span className="text-sm italic">let's go</span>
        </motion.button>

        <motion.button
          ref={noButtonRef}
          animate={{ 
            x: noPosition.x,
            y: noPosition.y,
            scale: Math.max(0.6, 1 - noClickCount * 0.05)
          }}
          transition={{
            type: 'spring',
            stiffness: 300,
            damping: 20
          }}
          whileHover={{ scale: Math.max(0.6, 1 - noClickCount * 0.05) * 1.05 }}
          whileTap={{ scale: Math.max(0.6, 1 - noClickCount * 0.05) * 0.98 }}
          onClick={handleNoClick}
          className="px-10 py-4 bg-gradient-to-r from-gray-400 to-gray-500 text-white text-2xl font-bold rounded-full shadow-lg hover:shadow-xl transition-all relative"
        >
          Nah 😅<br />
          <span className="text-sm italic">c'mon...</span>
        </motion.button>
      </motion.div>

      {noClickCount >= 8 && (
        <motion.p
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          className="mt-8 text-xl text-light-text italic"
        >
          yeah i knew it 😎
        </motion.p>
      )}
    </motion.div>
  )
}
