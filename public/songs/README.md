# 🎵 Songs Directory

Place your audio files here to use in the Valentine's Day experience.

## File Structure

```
songs/
├── party/           (For "Party & Upbeat" playlist)
│   ├── song1.mp3
│   ├── song2.mp3
│   └── song3.mp3
├── romantic/        (For "Romantic & Timeless" playlist)
│   ├── song1.mp3
│   ├── song2.mp3
│   └── song3.mp3
└── background/      (Optional background music)
    └── ambient.mp3
```

## Supported Formats

- MP3 (.mp3)
- WAV (.wav)
- OGG (.ogg)
- M4A (.m4a)

## Adding Songs

1. Place your audio files in the appropriate folders
2. Update `lib/musicData.ts` with the file paths
3. The Web Audio API will play generated tones by default

### Example Configuration

To use actual audio files instead of generated tones, update the `playCurrentSong()` function in `app/page.tsx`:

```typescript
const audio = new Audio(`/songs/party/song1.mp3`)
audio.play()
```

## Note

The current implementation uses Web Audio API to generate simple musical tones. To integrate real audio files, you'll need to update the audio playback logic in the page component.
