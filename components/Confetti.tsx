'use client'

import { motion } from 'framer-motion'

export default function Confetti({ confettiPieces }: { confettiPieces: any[] }) {
  return (
    <>
      {confettiPieces.map((piece) => {
        const isCircle = piece.shape === 'circle'
        const borderRadius = isCircle ? '50%' : piece.shape === 'square' ? '4px' : '2px'
        const width = piece.shape === 'rectangle' ? piece.size * 1.5 : piece.size
        const height = piece.shape === 'rectangle' ? piece.size * 0.7 : piece.size

        return (
          <motion.div
            key={piece.id}
            initial={{
              left: `${piece.left}%`,
              top: '-20px',
              opacity: 1,
              rotate: piece.rotation,
              x: 0,
            }}
            animate={{
              top: `${100}vh`,
              opacity: 0,
              rotate: piece.rotation + 720,
              x: (Math.random() - 0.5) * 200,
            }}
            transition={{
              duration: piece.duration,
              delay: piece.delay,
              ease: 'easeIn',
            }}
            className="fixed pointer-events-none shadow-lg"
            style={{
              width: `${width}px`,
              height: `${height}px`,
              backgroundColor: piece.color,
              borderRadius: borderRadius,
              boxShadow: `0 0 10px ${piece.color}80`,
            }}
          />
        )
      })}
    </>
  )
}
