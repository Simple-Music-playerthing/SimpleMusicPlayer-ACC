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

function App() {
  const [isLooping, setIsLooping] = useState(false);
  // note: don't use typing like this commented out section in jsx files 
  const audioRef = useRef/*<HTMLAudioElement>*/(null);
  
  // TODO: Make this advance at song end
  // TODO: Make sure looping works correctly
  // TODO: Sync what the queue / carousel and skip buttons are doing with this
  let currentSong = songs[0];

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

  return (
    <div style={{ position: "relative", width: "100vw", height: "100vh", overflow: "hidden" }}>
      <img // ** BACKGROUND **
        src={bg}
        alt=""
        style={{
          position: "fixed",
          top: "50%",
          left: "50%",
          width: "360px",
          height: "640px",
          transform: "translate(-50%, -50%)",
          zIndex: -1,
          userSelect: "none",
          pointerEvents: "none",
        }}
      />


      {/* AUDIO PLAYER ELEMENT STUFF */}
      {/* <audio ref={audioRef} src="/music/5150.mp3" /> */}
      <div className="audio">
        <AudioPlayer ref={audioRef} src={currentSong.file}></AudioPlayer>
      </div>

      <div className="scrubber">
        <AudioScrubber audioRef={audioRef} />
      </div>

      <div className="playPause">
        <PlayPauseButton onPlayChange={onPlayChange}/>
      </div>

      <div className="carousel">
        <Carousel/>
      </div>
      <div classname = "queue">
        <QueueButton/>
      </div>
        <LoopButton onLoopChange={handleLoopChange} />
      </div>
  );
}

export default App;
