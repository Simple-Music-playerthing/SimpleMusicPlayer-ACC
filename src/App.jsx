import React, { useState, useRef, createRef } from "react";
import Carousel from "./components/carousel";
import AudioScrubber from "./components/Scrubber";
import bg from "./assets/background.svg";
import "./App.css";
import LoopButton from "./components/loopbutton";
import QueueButton from "./components/QueueButton.jsx";
import SongQueue from "./components/SongQueue.jsx";
import PlayPauseButton from "./components/playButton.jsx";
import AudioPlayer from "./components/AudioPlayer.jsx";
import { songs } from "./components/songs.js";
import Shuffle from "./components/shuffleButton.jsx";

function App() {
  const [isLooping, setIsLooping] = useState(false);
  const [songIndex, setSongIndex] = useState(0);
  const [shuffleActive, setShuffleActive] = useState(false);
  // note: don't use typing like this commented out section in jsx files 
  const audioRef = useRef/*<HTMLAudioElement>*/(null);
  const playButtonRef = useRef(null);
  const carouselRef = useRef(null);

  const handleLoopChange = (newState) => {
    setIsLooping(newState);

    if (audioRef.current) {
      audioRef.current.loop = newState; 
    }

    console.log(newState ? "Loop ON" : "Loop OFF"); // ** temporary: only for testing
  };

  const onPlayChange = (state) => {
    const audio = audioRef.current;
    if (!audio) {
      console.warn("Warning: Audio was not present");
      return;
    }

    if (state) {
      audio.play();
    } else {
      audio.pause();
    }
  };

  const handleShuffleChange = (isActive) => {
    setShuffleActive(isActive);
  };

  const onSongChanged = (new_index) => {
    const audio = audioRef.current;
    if (!audio) {
      console.warn("Warning: Audio was not present");
      return;
    }

    const onCanPlay = () => {
      audio.currentTime = 0;
      audio.play();
      console.log("Play");
      playButtonRef.current.setPlaying(true);
      audio.removeEventListener("canplay", onCanPlay);
    };

    setSongIndex(new_index);
    audio.addEventListener("canplay", onCanPlay);
  };

  const onAudioEnded = () => {
    const audio = audioRef.current;
    if (!audio) {
      console.warn("Warning: Audio was not present");
      return;
    }

    if (isLooping) {
      // Loop
      audio.currentTime = 0;
    } else {
      // Advance
      carouselRef.current.forceAdvance();
    }
  };

  return (
    <div style={{ position: "relative", width: "100vw", height: "100vh", overflow: "hidden" }}>
      <div className="background">
        <img // ** BACKGROUND **
          src={bg}
          alt=""
          style={{
            position: "absolute",
            top: 0,
            left: 0,
          }}
        />
        <div className="loopButtonOuter">
          <LoopButton onLoopChange={handleLoopChange} />
        </div>

        <div className="scrubber">
          <AudioScrubber audioRef={audioRef} />
        </div>

        <div className="playPause">
          <PlayPauseButton ref={playButtonRef} onPlayChange={onPlayChange}/>
        </div>

        <div className="carousel">
          <Carousel ref={carouselRef} shuffle={shuffleActive} onSongChanged={onSongChanged}/>
        </div>

        <div className="shuffle">
          <Shuffle onShuffleChange={handleShuffleChange} />
        </div>

      </div>

      {/* AUDIO PLAYER ELEMENT STUFF */}
      {/* <audio ref={audioRef} src="/music/5150.mp3" /> */}
      <div className="audio">
        <AudioPlayer ref={audioRef} src={songs[songIndex].file} ended={onAudioEnded}></AudioPlayer>
      </div>

      <div className = "queue">
        <QueueButton/>
      </div>
    </div>
  );
}

export default App;