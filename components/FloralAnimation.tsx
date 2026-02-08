"use client"

import { useEffect } from 'react'
import { motion } from 'framer-motion'

export default function FloralAnimation({ onComplete }: { onComplete?: () => void }) {
  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo({ top: 0, behavior: 'smooth' })
    
    const timer = setTimeout(() => {
      if (onComplete) onComplete()
    }, 18000) // Increased from 12000 to 18000 (slower)
    return () => clearTimeout(timer)
  }, [onComplete])

  return (
    <div className="relative w-full h-screen flex flex-col items-center justify-center overflow-hidden">
      {/* Caption at the top */}
      <motion.div
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1.2, delay: 0.4, ease: 'easeOut' }}
        className="mb-4 w-full text-center z-10"
      >
        <div className="mx-auto inline-block bg-white/20 backdrop-blur-md px-8 py-4 rounded-full shadow-xl border-2 border-white/30">
          <span className="text-2xl md:text-3xl text-dark-red font-display font-bold">For my beautiful girlfriend 🥺</span>
        </div>
      </motion.div>

      {/* Sparkle particles */}
      {Array.from({ length: 20 }, (_, i) => (
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
            background: 'radial-gradient(circle, #fff 0%, transparent 70%)',
            borderRadius: '50%',
            boxShadow: '0 0 10px rgba(255, 107, 157, 0.8), 0 0 20px rgba(255, 107, 157, 0.5)',
          }}
        />
      ))}

      <div className="flowers" style={{
        position: 'relative',
        transform: 'scale(1.2)', // Increased scale
        width: '100vw',
        maxWidth: '700px', // Increased max-width
        height: '90vh', // Increased height
        margin: '0 auto',
        marginBottom: '2rem'
      }}>
        {/* Flower 1 */}
        <div className="flower flower--1" style={{
          position: 'absolute',
          bottom: '10vmin',
          transformOrigin: 'bottom center',
          zIndex: 10,
        }}>
          <div className="flower__leafs flower__leafs--1" style={{
            position: 'relative',
          }}>
            <div className="flower__leaf flower__leaf--1"></div>
            <div className="flower__leaf flower__leaf--2"></div>
            <div className="flower__leaf flower__leaf--3"></div>
            <div className="flower__leaf flower__leaf--4"></div>
            <div className="flower__white-circle"></div>
            {Array.from({ length: 8 }, (_, i) => (
              <div key={i} className={`flower__light flower__light--${i + 1}`}></div>
            ))}
          </div>
          <div className="flower__line" style={{
            height: '70vmin',
            width: '1.5vmin',
            backgroundImage: 'linear-gradient(to left, rgba(0, 0, 0, 0.2), transparent, rgba(255, 255, 255, 0.2)), linear-gradient(to top, transparent 10%, #8b0000, #d64a73)',
            boxShadow: 'inset 0 0 2px rgba(0, 0, 0, 0.5)',
            animation: 'grow-flower-tree 4s backwards',
            animationDelay: '0.3s'
          }}>
            {Array.from({ length: 6 }, (_, i) => (
              <div key={i} className={`flower__line__leaf flower__line__leaf--${i + 1}`}></div>
            ))}
          </div>
        </div>

        {/* Flower 2 */}
        <div className="flower flower--2" style={{
          position: 'absolute',
          left: '50%',
          bottom: '10vmin',
          transform: 'rotate(20deg)',
          transformOrigin: 'bottom center',
          zIndex: 10,
        }}>
          <div className="flower__leafs flower__leafs--2" style={{
            position: 'relative',
          }}>
            <div className="flower__leaf flower__leaf--1"></div>
            <div className="flower__leaf flower__leaf--2"></div>
            <div className="flower__leaf flower__leaf--3"></div>
            <div className="flower__leaf flower__leaf--4"></div>
            <div className="flower__white-circle"></div>
            {Array.from({ length: 8 }, (_, i) => (
              <div key={i} className={`flower__light flower__light--${i + 1}`}></div>
            ))}
          </div>
          <div className="flower__line" style={{
            height: '60vmin',
            width: '1.5vmin',
            backgroundImage: 'linear-gradient(to left, rgba(0, 0, 0, 0.2), transparent, rgba(255, 255, 255, 0.2)), linear-gradient(to top, transparent 10%, #8b0000, #d64a73)',
            boxShadow: 'inset 0 0 2px rgba(0, 0, 0, 0.5)',
            animation: 'grow-flower-tree 4s backwards',
            animationDelay: '0.6s'
          }}>
            {Array.from({ length: 4 }, (_, i) => (
              <div key={i} className={`flower__line__leaf flower__line__leaf--${i + 1}`}></div>
            ))}
          </div>
        </div>

        {/* Flower 3 */}
        <div className="flower flower--3" style={{
          position: 'absolute',
          left: '50%',
          bottom: '10vmin',
          transform: 'rotate(-15deg)',
          transformOrigin: 'bottom center',
          zIndex: 10,
        }}>
          <div className="flower__leafs flower__leafs--3" style={{
            position: 'relative',
          }}>
            <div className="flower__leaf flower__leaf--1"></div>
            <div className="flower__leaf flower__leaf--2"></div>
            <div className="flower__leaf flower__leaf--3"></div>
            <div className="flower__leaf flower__leaf--4"></div>
            <div className="flower__white-circle"></div>
            {Array.from({ length: 8 }, (_, i) => (
              <div key={i} className={`flower__light flower__light--${i + 1}`}></div>
            ))}
          </div>
          <div className="flower__line" style={{
            height: '55vmin',
            width: '1.5vmin',
            backgroundImage: 'linear-gradient(to left, rgba(0, 0, 0, 0.2), transparent, rgba(255, 255, 255, 0.2)), linear-gradient(to top, transparent 10%, #8b0000, #d64a73)',
            boxShadow: 'inset 0 0 2px rgba(0, 0, 0, 0.5)',
            animation: 'grow-flower-tree 4s backwards',
            animationDelay: '0.9s'
          }}>
            {Array.from({ length: 4 }, (_, i) => (
              <div key={i} className={`flower__line__leaf flower__line__leaf--${i + 1}`}></div>
            ))}
          </div>
        </div>
      </div>

      {/* Next Button */}
      <motion.button
        onClick={() => {
          if (onComplete) onComplete()
        }}
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 4, ease: 'easeOut' }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="absolute bottom-16 px-8 py-3 bg-dark-red text-white rounded-full font-semibold shadow-lg hover:shadow-xl transition-shadow"
      >
        Next →
      </motion.button>
    </div>
  )
}
