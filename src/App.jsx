import React, { useState, useRef } from "react";
import Carousel from "./components/carousel";
import AudioScrubber from "./components/Scrubber";
import bg from "./assets/background.svg";
import "./App.css";
import LoopButton from "./components/loopbutton";
import QueueButton from "./components/QueueButton.jsx";
import SongQueue from "./components/SongQueue.jsx";
import PlayPauseButton from "./components/playButton.jsx";

function App() {
  const [isLooping, setIsLooping] = useState(false);
  const audioRef = useRef(null);

    const handleLoopChange = (newState) => {
      setIsLooping(newState);

      if (audioRef.current) {
        audioRef.current.loop = newState; 
      }

      console.log(newState ? "Loop ON" : "Loop OFF"); // ** temporary: only for testing
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
      <audio ref={audioRef} src="/music/5150.mp3" />

      
      <div className="scrubber">
        <AudioScrubber audioRef={audioRef} />
      </div>

      
      <div className="playPause">
        <PlayPauseButton/>
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
