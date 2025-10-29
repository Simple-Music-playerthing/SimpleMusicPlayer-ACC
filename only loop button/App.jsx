import { useRef, useState } from 'react'
import './App.css'
import LoopButton from './components/loopbutton'


function App() {
  const [isLooping, setIsLooping] = useState(false);
  const audioRef = useRef(null);

    const handleLoopChange = (newState) => {
      setIsLooping(newState);

      if (audioRef.current) {
        audioRef.current.loop = newState; 
      }

      console.log(newState ? "Loop ON" : "Loop OFF"); // temporary: only for testing
    };

  return (
    <div>
      <LoopButton onLoopChange={handleLoopChange} />
      <p>Loop is {isLooping ? "ON" : "OFF"}</p> {/*temporary indicator of loop on/off*/}
    </div>
  )
}

export default App