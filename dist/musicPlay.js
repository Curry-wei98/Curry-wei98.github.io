const ap = new APlayer({
    container: document.getElementById('aplayer'),
    // mini: false,
    fixed: false,//吸底模式
    autoplay: true,//默认是否自动播放
    theme: '#FADFA3',
    loop: 'all',
    order: 'random',
    preload: 'auto',
    volume: 0.5,//默认音量
    mutex: true,//是否不允许多个播放器同时播放
    listFolded: true,//是否默认收起播放列表
    listMaxHeight: 90,//播放列表的高度
    //lrcType: 3, //使用lrc文件提供歌词
	//网易云默认外链链接：http://music.163.com/song/media/outer/url?id=ID数字.mp3
    audio: [
        {
            name: '世间美好与你环环相扣',
            artist: '小力',
            url: 'http://music.163.com/song/1399534395/?userid=487210035',
            cover: 'http://p3.music.126.net/tBTNafgjNnTL1KlZMt7lVA==/18885211718935735.jpg',
            lrc: '/./dist/music/lrc/29751409.lrc',
            theme: '#46718b'
        },
		{
            name: 'Hey Jude',
            artist: 'The Beatles Tribute Band',
            url: 'http://m7.music.126.net/20200415191729/809c982458432b2aa5aacf821a93ee7b/ymusic/e60c/5dfb/f201/86dbb4fcba6b5b6e0a3e26135668fd57.mp3',
            cover: 'http://p3.music.126.net/tBTNafgjNnTL1KlZMt7lVA==/18885211718935735.jpg',
            lrc: '/./dist/music/lrc/38689234.lrc',
	    theme: '#46718b'
        },
        {
            name: 'Bressanone',
            artist: 'Matthew Lien',
            url: 'http://m7.music.126.net/20200415191210/91510efc4c64706fba7f854b99d2de71/ymusic/741c/fa6f/b88e/07186eb74985171b293406cd282024de.mp3',
            cover: 'http://p3.music.126.net/tBTNafgjNnTL1KlZMt7lVA==/18885211718935735.jpg',
            lrc: '/./dist/music/lrc/38689234.lrc',
	    theme: '#46718b'
        },

    ]
});