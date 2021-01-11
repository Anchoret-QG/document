const ap = new APlayer({
    container: document.getElementById('aplayer'),
    autoplay: true,
    theme: '#FADFA3',
    volume: 0.9,
    fixed: true,
    audio: [
         {
        name: 'City',
        artist: '羽肿',
        url: 'https://cdn.jsdelivr.net/gh/anchoret-qg/document@main/download/cityc.mp3',
        cover: 'https://cdn.jsdelivr.net/gh/anchoret-qg/document@main/images/Dusk.jpg',
      }
    ]
});
