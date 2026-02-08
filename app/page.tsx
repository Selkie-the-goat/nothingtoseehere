'use client'

import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Section from '@/components/Section'
import MusicSelection from '@/components/MusicSelection'
import FloralAnimation from '@/components/FloralAnimation'
import ValentineQuestion from '@/components/ValentineQuestion'
import FinalSection from '@/components/FinalSection'
import Confetti from '@/components/Confetti'
import ParticleBackground from '@/components/ParticleBackground'
import { createConfetti } from '@/lib/utils'

type Page = 'music' | 'floral' | 'question' | 'final'

interface Song {
  title: string
  artist: string
  file: string
  cover?: string
}

export default function Home() {
  const [currentPage, setCurrentPage] = useState<Page>('music')
  const [confettiPieces, setConfettiPieces] = useState<any[]>([])
  const [selectedSong, setSelectedSong] = useState<Song | null>(null)
  const audioRef = useRef<HTMLAudioElement | null>(null)
  const [nowPlaying, setNowPlaying] = useState<{ title: string; artist: string } | null>(null)

  const fadeOutAudio = (audio: HTMLAudioElement, duration: number = 1000): Promise<void> => {
    return new Promise((resolve) => {
      const startVolume = audio.volume
      const startTime = Date.now()
      
      const fadeInterval = setInterval(() => {
        const elapsed = Date.now() - startTime
        const progress = elapsed / duration
        
        if (progress >= 1) {
          audio.volume = 0
          clearInterval(fadeInterval)
          resolve()
        } else {
          audio.volume = startVolume * (1 - progress)
        }
      }, 50)
    })
  }

  const fadeInAudio = (audio: HTMLAudioElement, duration: number = 1000): void => {
    audio.volume = 0
    const targetVolume = 1
    const startTime = Date.now()
    
    const fadeInterval = setInterval(() => {
      const elapsed = Date.now() - startTime
      const progress = Math.min(elapsed / duration, 1)
      
      audio.volume = targetVolume * progress
      
      if (progress >= 1) {
        clearInterval(fadeInterval)
      }
    }, 50)
  }

  const handleMusicSelect = (song: Song) => {
    setSelectedSong(song)

    // Play the selected song
    if (song && song.file) {
      stopAudio()
      const audio = new Audio(song.file)
      audioRef.current = audio
      audio.volume = 0
      audio.loop = true // Loop the single song
      audio.play().catch(() => {})
      fadeInAudio(audio, 1500)
      setNowPlaying({ title: song.title, artist: song.artist })
    }

    setTimeout(() => {
      setCurrentPage('floral')
    }, 500)
  }

  const stopAudio = () => {
    if (audioRef.current) {
      try {
        audioRef.current.pause()
        audioRef.current.currentTime = 0
        audioRef.current.volume = 1
      } catch (e) {}
      audioRef.current = null
    }
    setNowPlaying(null)
  }

  const handleYes = () => {
    setConfettiPieces(createConfetti(200))
    
    setTimeout(() => {
      setCurrentPage('final')
    }, 2000)
  }

  useEffect(() => {
    const handleAutoScroll = () => {
      if (currentPage === 'floral') {
        const timer = setTimeout(() => {
          setCurrentPage('question')
        }, 18000) // Increased to match slower animation
        return () => clearTimeout(timer)
      }
    }

    handleAutoScroll()
  }, [currentPage])

  useEffect(() => {
    return () => {
      stopAudio()
    }
  }, [])

  const pageVariants = {
    enter: { opacity: 0 },
    center: { opacity: 1 },
    exit: { opacity: 0 },
  }

  const pageTransition = {
    type: 'tween',
    ease: 'anticipate',
    duration: 0.8,
  }

  return (
    <main className="relative">
      <ParticleBackground />
      
      <AnimatePresence mode="wait">
        {currentPage === 'music' && (
          <motion.div
            key="music"
            variants={pageVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={pageTransition}
          >
            <Section bgGradient="linear-gradient(180deg, rgba(255, 179, 217, 0.15) 0%, rgba(196, 30, 58, 0.08) 100%)">
              <MusicSelection onSelect={handleMusicSelect} />
            </Section>
          </motion.div>
        )}

        {currentPage === 'floral' && (
          <motion.div
            key="floral"
            variants={pageVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={pageTransition}
          >
            <Section bgGradient="linear-gradient(180deg, rgba(255, 179, 217, 0.08) 0%, rgba(212, 175, 55, 0.05) 100%)">
              <FloralAnimation onComplete={() => setCurrentPage('question')} />
            </Section>
          </motion.div>
        )}

        {currentPage === 'question' && (
          <motion.div
            key="question"
            initial={{ opacity: 1 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0 }}
          >
            <Section bgGradient="linear-gradient(180deg, rgba(255, 105, 180, 0.1) 0%, rgba(196, 30, 58, 0.06) 100%)">
              <ValentineQuestion onYes={handleYes} />
            </Section>
          </motion.div>
        )}

        {currentPage === 'final' && (
          <motion.div
            key="final"
            variants={pageVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={pageTransition}
          >
            <Section bgGradient="linear-gradient(180deg, rgba(255, 179, 217, 0.1) 0%, rgba(255, 105, 180, 0.08) 100%)">
              <FinalSection />
            </Section>
          </motion.div>
        )}
      </AnimatePresence>

      {nowPlaying && (
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          className="fixed bottom-6 left-6 bg-gradient-to-r from-vibrant-pink/95 to-dark-red/95 text-white px-5 py-4 rounded-3xl shadow-2xl backdrop-blur-md z-50 border border-white/20"
        >
          <div className="font-semibold text-base mb-1">♫ {nowPlaying.title}</div>
          <div className="text-sm opacity-90 italic">{nowPlaying.artist}</div>
        </motion.div>
      )}

      <Confetti confettiPieces={confettiPieces} />
    </main>
  )
}
