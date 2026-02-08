'use client'

import { motion } from 'framer-motion'

export default function ParticleBackground() {
  const particles = Array.from({ length: 50 }, (_, i) => ({
    id: i,
    left: Math.random() * 100,
    delay: Math.random() * 3,
    duration: 10 + Math.random() * 6,
    size: 2 + Math.random() * 4,
  }))

  const sparkles = Array.from({ length: 30 }, (_, i) => ({
    id: `sparkle-${i}`,
    left: Math.random() * 100,
    top: Math.random() * 100,
    delay: Math.random() * 2,
    duration: 1.5 + Math.random() * 1,
  }))

  return (
    <>
      {/* Enhanced falling particles */}
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="fixed pointer-events-none z-0"
          initial={{
            left: `${particle.left}%`,
            top: '-10px',
            opacity: 0.4,
            scale: 0,
          }}
          animate={{
            top: '110%',
            opacity: [0.4, 0.8, 0.4, 0],
            scale: [0, 1, 1, 0],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: particle.duration,
            delay: particle.delay,
            ease: 'linear',
            repeat: Infinity,
          }}
          style={{
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            background: `radial-gradient(circle, rgba(255, 107, 157, 0.9) 0%, rgba(196, 30, 58, 0.5) 50%, transparent 100%)`,
            borderRadius: '50%',
            boxShadow: `0 0 ${particle.size * 2}px rgba(255, 107, 157, 0.6), 0 0 ${particle.size * 4}px rgba(255, 107, 157, 0.3)`,
          }}
        />
      ))}

      {/* Sparkle effects */}
      {sparkles.map((sparkle) => (
        <motion.div
          key={sparkle.id}
          className="fixed pointer-events-none z-0"
          initial={{
            left: `${sparkle.left}%`,
            top: `${sparkle.top}%`,
            opacity: 0,
            scale: 0,
          }}
          animate={{
            opacity: [0, 1, 1, 0],
            scale: [0, 1.5, 1, 0],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: sparkle.duration,
            delay: sparkle.delay,
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
    </>
  )
}
