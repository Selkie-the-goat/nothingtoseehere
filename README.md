# 💕 A Romantic Valentine's Day Experience

A beautifully crafted, production-ready Valentine's Day interactive website built with modern web technologies. Choose your mood, enjoy animated flowers blooming, read a heartfelt message, and answer the ultimate Valentine's question!

## ✨ Features

- 🎵 **Music Selection** - Choose between "Party & Upbeat" or "Romantic & Timeless" playlists
- 🌹 **Animated Flora** - Watch stunning flower animations with particle effects
- 💝 **Heartfelt Messages** - Beautifully animated romantic messages
- 💕 **Interactive Question** - A fun Valentine's question that scales buttons based on interaction
- ✨ **Confetti Celebration** - Celebratory confetti animation on your answer
- 🎨 **Smooth Transitions** - Page transitions with Framer Motion
- 📱 **Fully Responsive** - Beautiful on all devices from mobile to desktop
- 🎵 **Web Audio API** - Simple audio generation (Web Audio synth)

## 🛠 Tech Stack

- **Next.js 14** - React framework for production
- **React 18** - UI library
- **TypeScript** - Type-safe JavaScript
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Professional animations
- **Web Audio API** - Audio synthesis

## 🚀 Getting Started

### Prerequisites

- Node.js 16+ (with npm or yarn)

### Installation

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Run the development server:**
   ```bash
   npm run dev
   ```

3. **Open your browser:**
   Navigate to `http://localhost:3000`

### Building for Production

```bash
npm run build
npm start
```

## 📁 Project Structure

```
├── app/
│   ├── layout.tsx          # Root layout
│   ├── page.tsx            # Main page with all flows
│   └── globals.css         # Global styles
├── components/
│   ├── Section.tsx         # Section wrapper component
│   ├── MusicSelection.tsx   # Music mood selection
│   ├── FloralAnimation.tsx  # Flower animation
│   ├── Message.tsx         # Romantic message
│   ├── ValentineQuestion.tsx # Question with responsive buttons
│   ├── FinalSection.tsx    # Final celebration
│   ├── Confetti.tsx        # Confetti particles
│   └── ParticleBackground.tsx # Background particles
├── lib/
│   ├── musicData.ts        # Music playlist data
│   └── utils.ts            # Utility functions
├── public/                 # Static assets
├── package.json
├── tsconfig.json
├── tailwind.config.js
└── next.config.js
```

## 🎨 Customization

### Changing Colors

Edit the Tailwind config in `tailwind.config.js`:

```js
colors: {
  'dark-red': '#c41e3a',
  'vibrant-pink': '#ff69b4',
  'soft-pink': '#ffb3d9',
  // ... add more colors
}
```

### Adding More Songs

Edit `lib/musicData.ts`:

```ts
a: {
  mood: 'Your Mood',
  vibe: 'Your Vibe Description',
  songs: [
    { title: 'Song Title', artist: 'Artist Name' },
    // ... add more songs
  ]
}
```

### Adjusting Animations

All animations use Framer Motion. Edit component files to modify:
- Duration
- Easing
- Delay
- Repeat behavior

## 🌐 Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Visit [vercel.com](https://vercel.com)
3. Import your repository
4. Click deploy!

### Deploy to Other Platforms

This Next.js app can be deployed to:
- Netlify
- GitHub Pages (with `next export`)
- AWS Amplify
- Any Node.js hosting

## 📝 License

This project is open source and available under the MIT License.

## 💌 Notes

- All animations are GPU-accelerated for smooth performance
- Mobile-first responsive design
- Accessibility considerations with semantic HTML
- Clean, component-based architecture for easy maintenance

---

**Made with 💕 for your special Valentine!**
