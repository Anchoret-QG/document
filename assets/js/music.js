const ap = new APlayer({
    container: document.getElementById('aplayer'),
    autoplay: true,
    theme: '#FADFA3',
    volume: 0.9,
    fixed: true,
    audio: [
         {
        name: 'You',
        artist: 'Approaching Nirvana',
        url: 'https://cdn.anchoret.top/music/you.flac',
        cover: 'https://cdn.anchoret.top/music/pic.jpg',
      }
    ]
});
