'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import { musicData } from '@/lib/musicData'

interface Song {
  title: string
  artist: string
  file: string
  cover?: string
}

interface MusicSelectionProps {
  onSelect: (song: Song) => void
}

export default function MusicSelection({ onSelect }: MusicSelectionProps) {
  const [selectedSong, setSelectedSong] = useState<Song | null>(null)

  // Get all songs from both sets
  const allSongs: Song[] = [
    ...musicData.a.songs,
    ...musicData.b.songs
  ]

  const handleSelect = (song: Song) => {
    setSelectedSong(song)
  }

  const handleStart = () => {
    if (selectedSong) {
      onSelect(selectedSong)
    }
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8, rotate: -10 },
    visible: {
      opacity: 1,
      scale: 1,
      rotate: 0,
      transition: { duration: 0.5, ease: 'easeOut' },
    },
  }

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="w-full max-w-6xl mx-auto text-center flex flex-col items-center justify-center"
    >
      <motion.h1
        variants={itemVariants}
        className="hero-text text-5xl md:text-7xl text-dark-red mb-4"
      >
        Choose Your Song
      </motion.h1>

      <motion.p
        variants={itemVariants}
        className="text-xl text-light-text mb-4 italic font-serif"
      >
        Pick a song to set the perfect mood
      </motion.p>

      <motion.p
        variants={itemVariants}
        className="text-base text-vibrant-pink mb-12 font-serif"
      >
        Each song tells a story, just like us 🤭
      </motion.p>

      <motion.div
        variants={itemVariants}
        className="grid grid-cols-2 md:grid-cols-3 gap-6 mb-10 justify-items-center"
      >
        {allSongs.map((song, idx) => (
          <div key={idx} className="flex flex-col items-center">
            <motion.button
              onClick={() => handleSelect(song)}
              variants={itemVariants}
              whileHover={{ scale: 1.05, rotate: 5 }}
              whileTap={{ scale: 0.95 }}
              className={`relative w-48 h-48 md:w-56 md:h-56 rounded-full transition-all duration-300 overflow-hidden ${
                selectedSong === song
                  ? 'ring-4 ring-dark-red ring-offset-4 ring-offset-white shadow-2xl'
                  : 'shadow-xl hover:shadow-2xl'
              }`}
              style={{
                background: selectedSong === song
                  ? 'linear-gradient(135deg, #c41e3a 0%, #ff69b4 100%)'
                  : 'linear-gradient(135deg, #2c2c2c 0%, #1a1a1a 100%)',
              }}
            >
              {/* Album cover background */}
              {song.cover && (
                <div className="absolute inset-0 rounded-full overflow-hidden">
                  <img
                    src={song.cover}
                    alt={`${song.title} by ${song.artist}`}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      // Fallback to default if image fails to load
                      e.currentTarget.style.display = 'none'
                    }}
                  />
                  {/* Overlay for better visibility */}
                  <div className={`absolute inset-0 rounded-full ${
                    selectedSong === song 
                      ? 'bg-gradient-to-br from-dark-red/40 to-vibrant-pink/40' 
                      : 'bg-black/30'
                  }`}></div>
                </div>
              )}

              {/* Vinyl grooves overlay */}
              <div className="absolute inset-0 rounded-full pointer-events-none" style={{
                backgroundImage: song.cover 
                  ? `radial-gradient(circle at center, transparent 20%, rgba(0, 0, 0, 0.1) 20%, transparent 25%, rgba(0, 0, 0, 0.1) 25%, transparent 30%, rgba(0, 0, 0, 0.1) 30%, transparent 35%, rgba(0, 0, 0, 0.1) 35%, transparent 40%, rgba(0, 0, 0, 0.1) 40%, transparent 45%, rgba(0, 0, 0, 0.1) 45%, transparent 50%, rgba(0, 0, 0, 0.1) 50%, transparent 55%, rgba(0, 0, 0, 0.1) 55%, transparent 60%, rgba(0, 0, 0, 0.1) 60%, transparent 65%, rgba(0, 0, 0, 0.1) 65%, transparent 70%, rgba(0, 0, 0, 0.1) 70%, transparent 75%, rgba(0, 0, 0, 0.1) 75%, transparent 80%, rgba(0, 0, 0, 0.1) 80%, transparent 85%, rgba(0, 0, 0, 0.1) 85%, transparent 90%, rgba(0, 0, 0, 0.1) 90%, transparent 95%, rgba(0, 0, 0, 0.1) 95%)`
                  : `
                    repeating-conic-gradient(from 0deg, transparent 0deg 1deg, rgba(255, 255, 255, 0.03) 1deg 2deg),
                    radial-gradient(circle at center, transparent 20%, rgba(0, 0, 0, 0.1) 20%, transparent 25%, rgba(0, 0, 0, 0.1) 25%, transparent 30%, rgba(0, 0, 0, 0.1) 30%, transparent 35%, rgba(0, 0, 0, 0.1) 35%, transparent 40%, rgba(0, 0, 0, 0.1) 40%, transparent 45%, rgba(0, 0, 0, 0.1) 45%, transparent 50%, rgba(0, 0, 0, 0.1) 50%, transparent 55%, rgba(0, 0, 0, 0.1) 55%, transparent 60%, rgba(0, 0, 0, 0.1) 60%, transparent 65%, rgba(0, 0, 0, 0.1) 65%, transparent 70%, rgba(0, 0, 0, 0.1) 70%, transparent 75%, rgba(0, 0, 0, 0.1) 75%, transparent 80%, rgba(0, 0, 0, 0.1) 80%, transparent 85%, rgba(0, 0, 0, 0.1) 85%, transparent 90%, rgba(0, 0, 0, 0.1) 90%, transparent 95%, rgba(0, 0, 0, 0.1) 95%)
                  `
              }}></div>

              {/* Vinyl center circle */}
              <div
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-12 h-12 md:w-16 md:h-16 rounded-full bg-white/30 backdrop-blur-sm flex items-center justify-center z-20"
                style={{
                  boxShadow: 'inset 0 0 10px rgba(0, 0, 0, 0.3), 0 0 10px rgba(0, 0, 0, 0.2)'
                }}
              >
                <div className="w-6 h-6 md:w-8 md:h-8 rounded-full bg-dark-red"></div>
              </div>

              {/* Selection indicator */}
              {selectedSong === song && (
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-dark-red flex items-center justify-center text-white text-lg z-30"
                >
                  ✓
                </motion.div>
              )}
            </motion.button>
            
            {/* Song name below vinyl */}
            <div className="mt-4 text-center max-w-[224px] md:max-w-[256px]">
              <div className={`text-sm md:text-base font-bold mb-1 ${
                selectedSong === song ? 'text-dark-red' : 'text-dark-text'
              }`}>
                {song.title}
              </div>
              <div className={`text-xs md:text-sm italic ${
                selectedSong === song ? 'text-vibrant-pink' : 'text-light-text'
              }`}>
                {song.artist}
              </div>
            </div>
          </div>
        ))}
      </motion.div>

      <motion.button
        variants={itemVariants}
        onClick={handleStart}
        disabled={!selectedSong}
        whileHover={selectedSong ? { scale: 1.05 } : {}}
        whileTap={selectedSong ? { scale: 0.98 } : {}}
        className={`px-10 py-4 text-xl font-bold rounded-full transition-all duration-300 ${
          selectedSong
            ? 'bg-gradient-to-r from-dark-red to-vibrant-pink text-white shadow-xl hover:shadow-2xl cursor-pointer'
            : 'bg-gray-300 text-gray-500 cursor-not-allowed opacity-50'
        }`}
      >
        Start the Experience 💕
      </motion.button>
    </motion.div>
  )
}
