# Quick Start Guide - Valentine's Day Website

## Installation & Setup (3 minutes)

### Step 1: Install Node.js
If you don't have Node.js installed:
- Download from: https://nodejs.org/ (LTS version)
- Install and restart your terminal

### Step 2: Open Terminal in Project Directory
```
cd "c:\Users\neeks\OneDrive\Desktop\top"
```

### Step 3: Install Dependencies
```
npm install
```
This will take 2-3 minutes. It installs Next.js, React, Tailwind, Framer Motion, and other dependencies.

### Step 4: Run Development Server
```
npm run dev
```

### Step 5: View in Browser
Open: http://localhost:3000

## What to Expect

### Page Flow:
1. **Music Selection Page** - Choose your mood
2. **Floral Animation** - Watch beautiful flowers bloom
3. **Message Page** - View romantic message
4. **Question Page** - Answer the Valentine question
5. **Final Page** - Celebrate with confetti!

## Production Build

When ready to deploy:

```bash
npm run build
npm start
```

## File Structure Overview

```
Components (in /components):
- MusicSelection: The first interactive page
- FloralAnimation: Beautiful flower effects
- Message: Romantic text messaging
- ValentineQuestion: The yes/no interaction
- FinalSection: Celebration with confetti

Configuration:
- tailwind.config.js: Colors and theme
- lib/musicData.ts: Songs and moods
```

## Customization Tips

### Change Song List
Edit `lib/musicData.ts`:
```ts
a: {
  songs: [
    { title: 'Your Song', artist: 'Artist Name' }
  ]
}
```

### Change Colors
Edit `tailwind.config.js`:
```js
colors: {
  'dark-red': '#yourcolor',
  'vibrant-pink': '#yourcolor'
}
```

### Change Messages
Edit component files directly (in /components):
- `Message.tsx` - Main message
- `FinalSection.tsx` - Final text
- `ValentineQuestion.tsx` - Question text

## Troubleshooting

**Port 3000 already in use?**
```
npm run dev -- -p 3001
```

**Module not found errors?**
```
npm install
```

**Need to stop the server?**
Press `Ctrl + C` in terminal

## Next Steps

1. Customize colors and messages
2. Add your own songs to musicData.ts
3. Test on mobile devices
4. Deploy to Vercel or your preferred hosting

Enjoy! 💕
