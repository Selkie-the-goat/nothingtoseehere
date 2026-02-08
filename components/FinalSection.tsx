'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'

export default function FinalSection() {
  const [clicked, setClicked] = useState(false)
  
  const heartVariants = {
    hidden: { opacity: 0, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  }

  const floatingVariants = {
    animate: {
      y: [0, -30, 0],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: 'easeInOut',
      },
    },
  }

  const textVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1.2,
        ease: 'easeOut',
        staggerChildren: 0.3
      }
    }
  }

  const lineVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: 'easeOut' }
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="w-full max-w-5xl mx-auto text-center px-6 relative"
    >
      {/* Sparkle effects */}
      {Array.from({ length: 25 }, (_, i) => (
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
            scale: [0, 1.5, 1, 0],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 2 + Math.random() * 2,
            delay: Math.random() * 3,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          style={{
            width: '8px',
            height: '8px',
            background: 'radial-gradient(circle, #fff 0%, rgba(255, 107, 157, 0.8) 50%, transparent 100%)',
            borderRadius: '50%',
            boxShadow: '0 0 10px rgba(255, 255, 255, 0.9), 0 0 20px rgba(255, 107, 157, 0.6), 0 0 30px rgba(196, 30, 58, 0.4)',
          }}
        />
      ))}

      <motion.div
        variants={textVariants}
        initial="hidden"
        whileInView="visible"
        className="space-y-8"
      >
        <motion.p
          variants={lineVariants}
          className="text-5xl md:text-6xl text-dark-red leading-relaxed font-serif"
        >
          You made me really happy
        </motion.p>

        <motion.p
          variants={lineVariants}
          className="text-4xl md:text-5xl text-vibrant-pink leading-relaxed font-serif italic"
        >
          and I'm never going to stop reminding you 😜
        </motion.p>

        <motion.p
          variants={lineVariants}
          className="text-4xl md:text-5xl text-dark-red leading-relaxed font-serif"
        >
          so thanks for being there, and for putting up with me being me
        </motion.p>

        <motion.span
          variants={lineVariants}
          className="block text-6xl md:text-7xl text-vibrant-pink font-serif mt-12"
          animate={{
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: 'easeInOut'
          }}
        >
          honestly 😎
        </motion.span>
      </motion.div>

      <motion.div
        variants={floatingVariants}
        animate="animate"
        className="text-7xl md:text-8xl mt-16 space-x-8 flex justify-center"
      >
        <motion.span
          animate={{ rotate: [0, 10, -10, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
          whileHover={{ scale: 1.2 }}
        >
          �
        </motion.span>
        <motion.span
          animate={{ rotate: [0, -10, 10, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
          whileHover={{ scale: 1.2 }}
        >
          😋
        </motion.span>
        <motion.span
          animate={{ rotate: [0, 10, -10, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
          whileHover={{ scale: 1.2 }}
        >
          🥺
        </motion.span>
      </motion.div>

      {/* Interactive button */}
      <motion.button
        onClick={() => setClicked(!clicked)}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 2, duration: 1 }}
        className="mt-16 pt-8 border-t-2 border-vibrant-pink/30 inline-block px-8 py-4 bg-gradient-to-r from-dark-red/20 to-vibrant-pink/20 hover:from-dark-red/40 hover:to-vibrant-pink/40 text-dark-red font-bold rounded-full text-lg transition-all duration-300 backdrop-blur-sm"
      >
        {clicked ? "you know what's up 😎" : "click if you agree"}
      </motion.button>

      {/* Secret message on click */}
      {clicked && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ type: 'spring', stiffness: 200 }}
          className="mt-12 pt-8 border-t-2 border-vibrant-pink/30"
        >
          <p className="text-2xl md:text-3xl text-light-text italic font-serif mb-4">
            you get it 🤭
          </p>
          <p className="text-xl text-vibrant-pink italic">
            and you're really special to me
          </p>
        </motion.div>
      )}
    </motion.div>
  )
}
