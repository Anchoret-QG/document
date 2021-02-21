const ap = new APlayer({
    container: document.getElementById('aplayer'),
    autoplay: false,
    theme: '#FADFA3',
    volume: 0.9,
    fixed: true,
    audio: [
         {
        name: '水星湖',
        artist: '羽肿',
        url: 'https://cdn.jsdelivr.net/gh/anchoret-qg/document@main/download/sxh.mp3',
        cover: 'https://cdn.jsdelivr.net/gh/anchoret-qg/document@main/images/Dusk.jpg',
      }
    ]
});
