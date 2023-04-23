import reactLogo from './assets/react.svg'
import play from './assets/play.svg'
import peakpx from './assets/peakpx.jpg'
import green from './assets/green.jpg'
import purple from './assets/purple.jpg'
import black from './assets/black.jpg'
import { useEffect, useMemo, useState } from 'react'
import screw from './assets/screw.svg'
import wheel from './assets/wheel.svg'
import next from './assets/next.svg'
import previous from './assets/previous.svg'
import pause from './assets/pause.svg'
import happyDay from './assets/happyDay.mp3'
import { Audio, AudioPlaylist } from 'ts-audio';
import ColorThief from 'colorthief';
import './App.css';
//music import 
import Broken from './assets/musicc/Tracks/06. Can t Be Broken.mp3'
import Teen from './assets/musicc/Tracks/07. 8TEEN.mp3'
import Alone from './assets/musicc/Tracks/Alone.mp3'
import Alubarika from './assets/musicc/Tracks/Alubarika-ft-Timaya_StarNaija.com_.mp3'
import Energy from './assets/musicc/Tracks/Fireboy-DML-Energy-(JustNaija.com).mp3'
import DeathBed from './assets/musicc/Tracks/Powfu - death bed (coffee for your head) (Official Video) ft. beabadoobee.mp3'
import Moonwalking from './assets/musicc/Tracks/Roddy_Ricch_Ft_Lil_Durk_-_Moonwalkin_TopCitySound.com.mp3'
import siuu from './assets/musicc/Tracks/siiu.mp3'
import MoveOn from './assets/musicc/Tracks/Simi-–-Move-On.mp3'
import Moonlight from './assets/musicc/Tracks/XXXTENTACION_-_MOONLIGHT_(OFFICIAL_MUSIC_VIDEO).mp3'



//images import
import TeenPic from './assets/musicc/TrackCoverImg/8teen.jpg'
import alonePic from './assets/musicc/TrackCoverImg/alone.jpg'
import alubarikaPic from './assets/musicc/TrackCoverImg/alubarika.jpg'
import BrokenPic from './assets/musicc/TrackCoverImg/broken.jpg'
import deathbedPic from './assets/musicc/TrackCoverImg/deathbed.jpg'
import energyPic from './assets/musicc/TrackCoverImg/energy.jpg'
import moonlightPic from './assets/musicc/TrackCoverImg/moonlight.jpg'
import moonwalkingPic from './assets/musicc/TrackCoverImg/moonwalking.jpg'
import moveOnPic from './assets/musicc/TrackCoverImg/move on.jpg'
import siuuPic from './assets/musicc/TrackCoverImg/siuu.jpg'

function App() {
  const [currentSong, setCurrentSong] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [bgImg, setBgImg] = useState(purple);
  const [color, setColor] = useState('#8A1D9B');
  const [colorName, setColorName] = useState('PURPLE')

  const setBgImag = () => {
    let images = ['green', 'purple', 'black'];
    let randomImg = Math.floor(Math.random() * images.length);
    if (randomImg == 0) {
      setColor('#187913')
    } else if (randomImg == 1) {
      setColor('#8A1D9B')
    } else {
      setColor('#1E1E1E')
    }
    setColorName(images[randomImg].toUpperCase())
    setBgImg(eval(images[randomImg]));
  }

  const songs = useMemo(
    () => [
      {
        title: '8Teen',
        artist: 'Khalid',
        img_src: TeenPic,
        src: Teen,
      },
      {
        title: 'Broken',
        artist: 'Lil Wayne',
        img_src: BrokenPic,
        src: Broken,
      },
      {
        title: 'Alone',
        artist: 'Burna Boy',
        img_src: alonePic,
        src: Alone,
      },
      {
        title: 'Alubarika',
        artist: 'Patoranking ft. Timaya',
        img_src: alubarikaPic,
        src: Alubarika,
      },
      {
        title: 'Energy',
        artist: 'FireboyDML',
        img_src: energyPic,
        src: Energy,
      },
      {
        title: 'DeathBed',
        artist: 'Powfu',
        img_src: deathbedPic,
        src: DeathBed,
      },
      {
        title: 'Moonwalking',
        artist: 'Roddy Ricch ft. Lil Durk',
        img_src: moonwalkingPic,
        src: Moonwalking,
      },
      {
        title: 'Siuu',
        artist: 'CR7',
        img_src: siuuPic,
        src: siuu,
      },
      {
        title: 'Move On',
        artist: 'Simi',
        img_src: moveOnPic,
        src: MoveOn,
      },
      {
        title: 'Moonlight',
        artist: 'XXXTentacion',
        img_src: moonlightPic,
        src: Moonlight,
      },
    ],
    []
  );
  const playlist = useMemo(() => {
    return AudioPlaylist({
      files: songs.map((song) => song.src),
    });
  }, [songs]);

  const handlePlay = () => {
		playlist.play();
		setIsPlaying(true);
	};

  const handlePause = () => {
		playlist.pause();
		setIsPlaying(false);
	};

  const handleSkip = () => {
		playlist.next();
		setIsPlaying(true);

		setCurrentSong(
			(currentSong) => (currentSong + 1 + songs.length) % songs.length
		);
	};

  const handlePrevious = () => {
		playlist.prev();
		setIsPlaying(false);
		setCurrentSong(
			(currentSong) => (currentSong - 1 + songs.length) % songs.length
		);
	};

const styles = {
  backgroundImage: `url(${bgImg})`,
  backgroundPosition: 'center',
  objectFit: 'center',
  backgroundRepeat: 'no-repeat'
}
// green#0AB601 #187913
// black#1E1E1E
// purple#8A1D9B
  useEffect(() => {
    // document.getElementById('bgImg').style.backgroundImage="url('https://images.unsplash.com/photo-1682070410768-1bd8c48cbdf4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80')"
  },[]);
  
  return (
    <div className='main-container' style={styles}>
      <div className='cassette-container'>
        <img src={screw} width='20px' className='left-top'/>
        <img src={screw} width='20px' className='right-top'/>
        <img src={screw} width='20px' className='bottom-left'/>
        <img src={screw} width='20px' className='bottom-right'/>
        <div className='control-container' id='bgImg'>
            <img className='control-bg-img' src={songs[currentSong].img_src} alt='pic'/>
            <div className='controls' style={{backgroundColor: `${color}`}}>
              <img src={wheel} width='45x' className={isPlaying ? 'wheel' : ''} id='wheelId'/>
              <div className='play-control'>
                <img src={previous} width='30px' onClick={handlePrevious} />
                {
                  isPlaying ? 
                  <img src={pause} width='30px' onClick={handlePause}/>:
                  <img src={play} width='30px' onClick={handlePlay}/>
                }
                <img src={next} width='30px' onClick={handleSkip}/>
              </div>
              <img src={wheel} width='45px' className={isPlaying ? 'wheel' : ''} id='wheelId'/>
            </div>
        </div>
        <div className='song-title'>
          <span className='note-left'>&#9836;</span>
         <span className='titleName'>{songs[currentSong].title} - {songs[currentSong].artist}</span>
         <span className='note-right'>&#9836;&#9834;</span>
        </div>
      </div>
      <div className='color-control' style={{color: 'white'}}>
        <span>COLOR</span>
          <div className='col-container' style={{backgroundColor: `${color}`}} onClick={() => setBgImag()}>
              <span>{colorName}</span>
          </div>
      </div>
    </div>
  )
}

export default App
