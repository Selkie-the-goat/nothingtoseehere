export const musicData = {
  a: {
    mood: 'Party & Upbeat',
    vibe: 'Energetic, fun, and celebratory',
    songs: [
      { title: 'No. 1 Party Anthem', artist: 'Arctic Monkeys', file: '/songs/party/Arctic Monkeys - No 1 Party Anthem.mp3', cover: '/album-covers/no1_partyanthem - Artic monkey.png' },
      { title: 'Nothing on You', artist: 'B.o.B', file: '/songs/party/B.o.B - Nothin\' On You (feat. Bruno Mars) [Official Video] - B.o.B.mp3', cover: '/album-covers/nothingonyou-BoB.jpg' },
      { title: 'Congratulation', artist: 'Mac Miller', file: '/songs/party/Mac Miller - Congratulations (feat. Bilal) - Mac Miller.mp3', cover: '/album-covers/congratulation-macmiller.png' }
    ]
  },
  b: {
    mood: 'Romantic & Timeless',
    vibe: 'Tender, intimate, and everlasting',
    songs: [
      { title: "Can't Help Falling in Love", artist: 'Elvis Presley', file: '/songs/romantic/Elvis Presley - Can\'t Help Falling In Love (Official Audio) - ElvisPresleyVEVO.mp3', cover: '/album-covers/canthelpfallinginlove -elvinpresley.jpg' },
      { title: 'Stand by Me', artist: 'Ben E. King', file: '/songs/romantic/Ben E King - Stand By Me Audio.mp3', cover: '/album-covers/standbyme- Ben e king.jpg' },
      { title: 'Lovers Rock', artist: 'TV Girl', file: '/songs/romantic/TV Girl - Lovers Rock (Lyrics) - Dan Music.mp3', cover: '/album-covers/loverrock-tvgirl.png' }
    ]
  }
}

export type MusicSet = keyof typeof musicData
