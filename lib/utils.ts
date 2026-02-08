export const createConfetti = (count: number = 150) => {
  const confetti = []
  const colors = ['#ff6b9d', '#c41e3a', '#ffd700', '#ffb3d9', '#ff69b4', '#ff1493', '#ff4500', '#ffb347']
  const shapes = ['circle', 'square', 'rectangle']
  
  for (let i = 0; i < count; i++) {
    const shape = shapes[Math.floor(Math.random() * shapes.length)]
    const size = shape === 'circle' ? 6 + Math.random() * 6 : 8 + Math.random() * 6
    
    confetti.push({
      id: i,
      left: Math.random() * 100,
      delay: Math.random() * 0.5,
      duration: 2 + Math.random() * 1.5,
      color: colors[Math.floor(Math.random() * colors.length)],
      size: size,
      shape: shape,
      rotation: Math.random() * 360,
    })
  }
  
  return confetti
}

export const playAudio = (audioContext: AudioContext, frequency: number, duration: number = 0.5) => {
  const now = audioContext.currentTime
  const osc = audioContext.createOscillator()
  const gain = audioContext.createGain()
  
  osc.type = 'sine'
  osc.frequency.value = frequency
  osc.connect(gain)
  gain.connect(audioContext.destination)
  
  gain.gain.setValueAtTime(0.1, now)
  gain.gain.exponentialRampToValueAtTime(0.01, now + duration)
  
  osc.start(now)
  osc.stop(now + duration)
}
