"use client"

import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

export default function RoseBloom({ onComplete }: { onComplete?: () => void }) {
  const [isAnimating, setIsAnimating] = useState(false)

  useEffect(() => {
    setIsAnimating(true)
    const timer = setTimeout(() => {
      if (onComplete) onComplete()
    }, 5000)
    return () => clearTimeout(timer)
  }, [onComplete])

  // Create multiple layers of petals for a blooming effect
  const outerPetals = Array.from({ length: 8 }, (_, i) => i)
  const middlePetals = Array.from({ length: 6 }, (_, i) => i)
  const innerPetals = Array.from({ length: 4 }, (_, i) => i)

  const petalVariants = {
    hidden: { 
      scale: 0, 
      rotate: 0,
      opacity: 0,
    },
    visible: (delay: number) => ({
      scale: [0, 1.15, 1],
      rotate: [0, 3, 0],
      opacity: [0, 0.9, 1],
      transition: {
        duration: 1.2,
        delay: delay,
        ease: [0.34, 1.56, 0.64, 1]
      }
    })
  }

  const centerVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: {
      scale: [0, 1.2, 1],
      opacity: [0, 1, 1],
      transition: {
        duration: 1,
        delay: 2.8,
        ease: 'easeOut'
      }
    }
  }

  return (
    <div className="relative w-full h-screen flex items-center justify-center pointer-events-none">
      {/* Caption */}
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1.2, delay: 0.4, ease: 'easeOut' }}
        className="absolute bottom-56 w-full text-center pointer-events-auto z-10"
      >
        <div className="mx-auto inline-block bg-white/10 backdrop-blur-md px-6 py-2 rounded-full shadow-lg">
          <span className="text-2xl md:text-3xl text-dark-red font-display">For my beautiful girlfriend 🥺</span>
        </div>
      </motion.div>

      {/* Rose Container */}
      <div className="relative" style={{ width: 450, height: 450 }}>
        <svg 
          viewBox="0 0 400 400" 
          width="100%" 
          height="100%" 
          xmlns="http://www.w3.org/2000/svg"
          className="absolute inset-0"
        >
          <defs>
            {/* Gradient for outer petals */}
            <radialGradient id="outerGradient" cx="50%" cy="50%">
              <stop offset="0%" stopColor="#ffb3d9" />
              <stop offset="50%" stopColor="#ff6b9d" />
              <stop offset="100%" stopColor="#c41e3a" />
            </radialGradient>
            
            {/* Gradient for middle petals */}
            <radialGradient id="middleGradient" cx="50%" cy="50%">
              <stop offset="0%" stopColor="#ffd9ec" />
              <stop offset="60%" stopColor="#ff8fb3" />
              <stop offset="100%" stopColor="#ff69b4" />
            </radialGradient>
            
            {/* Gradient for inner petals */}
            <radialGradient id="innerGradient" cx="50%" cy="50%">
              <stop offset="0%" stopColor="#ffe6f0" />
              <stop offset="70%" stopColor="#ffb3d9" />
              <stop offset="100%" stopColor="#ff6b9d" />
            </radialGradient>

            {/* Glow filter */}
            <filter id="glow">
              <feGaussianBlur stdDeviation="4" result="coloredBlur"/>
              <feMerge>
                <feMergeNode in="coloredBlur"/>
                <feMergeNode in="SourceGraphic"/>
              </feMerge>
            </filter>
          </defs>

          <g transform="translate(200, 200)">
            {/* Outer petals - bloom first */}
            {outerPetals.map((i) => {
              const angle = (i / outerPetals.length) * 360
              return (
                <motion.g
                  key={`outer-${i}`}
                  custom={i * 0.12}
                  variants={petalVariants}
                  initial="hidden"
                  animate={isAnimating ? "visible" : "hidden"}
                  style={{
                    transformOrigin: '200px 200px',
                    transform: `rotate(${angle}deg) translate(0, -140px)`
                  }}
                >
                  <path
                    d="M 0,0 Q -25,-70 -15,-120 Q -5,-135 0,-135 Q 5,-135 15,-120 Q 25,-70 0,0 Z"
                    fill="url(#outerGradient)"
                    opacity={0.9}
                    filter="url(#glow)"
                  />
                </motion.g>
              )
            })}

            {/* Middle petals - bloom second */}
            {middlePetals.map((i) => {
              const angle = (i / middlePetals.length) * 360
              return (
                <motion.g
                  key={`middle-${i}`}
                  custom={1.0 + i * 0.1}
                  variants={petalVariants}
                  initial="hidden"
                  animate={isAnimating ? "visible" : "hidden"}
                  style={{
                    transformOrigin: '200px 200px',
                    transform: `rotate(${angle}deg) translate(0, -100px)`
                  }}
                >
                  <path
                    d="M 0,0 Q -18,-55 -12,-90 Q -6,-100 0,-100 Q 6,-100 12,-90 Q 18,-55 0,0 Z"
                    fill="url(#middleGradient)"
                    opacity={0.95}
                    filter="url(#glow)"
                  />
                </motion.g>
              )
            })}

            {/* Inner petals - bloom third */}
            {innerPetals.map((i) => {
              const angle = (i / innerPetals.length) * 360
              return (
                <motion.g
                  key={`inner-${i}`}
                  custom={1.8 + i * 0.12}
                  variants={petalVariants}
                  initial="hidden"
                  animate={isAnimating ? "visible" : "hidden"}
                  style={{
                    transformOrigin: '200px 200px',
                    transform: `rotate(${angle}deg) translate(0, -70px)`
                  }}
                >
                  <path
                    d="M 0,0 Q -12,-35 -8,-60 Q -4,-70 0,-70 Q 4,-70 8,-60 Q 12,-35 0,0 Z"
                    fill="url(#innerGradient)"
                    opacity={1}
                    filter="url(#glow)"
                  />
                </motion.g>
              )
            })}

            {/* Center of the rose */}
            <motion.circle
              cx={0}
              cy={0}
              r={22}
              fill="#ff6b9d"
              variants={centerVariants}
              initial="hidden"
              animate={isAnimating ? "visible" : "hidden"}
              filter="url(#glow)"
            />
            
            {/* Inner center highlight */}
            <motion.circle
              cx={0}
              cy={0}
              r={10}
              fill="#ffb3d9"
              variants={centerVariants}
              initial="hidden"
              animate={isAnimating ? "visible" : "hidden"}
            />
          </g>
        </svg>

        {/* Ambient glow effect */}
        <motion.div
          className="absolute inset-0 rounded-full pointer-events-none"
          style={{
            background: 'radial-gradient(circle, rgba(255, 107, 157, 0.4) 0%, transparent 70%)',
            filter: 'blur(50px)',
            transform: 'translate(-50%, -50%)',
            left: '50%',
            top: '50%',
            width: '350px',
            height: '350px'
          }}
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.4, 0.7, 0.4]
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: 'easeInOut'
          }}
        />
      </div>
    </div>
  )
}
