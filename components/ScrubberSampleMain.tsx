import { useState, useRef, useEffect } from 'react';
import MusicScrubber from './components/Scrubber';
import testSoundFile from "./assets/FoodDrop.mp3";
import './App.css';
import TestAudioPlayer from './components/TestAudioPlayer';

function App() {
  const [count, setCount] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const togglePlay = () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (isPlaying) {
      audio.pause();
    } else {
      audio.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <>
      <MusicScrubber audioRef={audioRef}></MusicScrubber>
      <TestAudioPlayer ref={audioRef} src={testSoundFile} />
      <button onClick={togglePlay}>{isPlaying ? "Pause": "Play"}</button>
    </>
  )
}

export default App;
