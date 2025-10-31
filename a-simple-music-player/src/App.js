import React from "react";
import { Box } from "./components/Box";

function App() {
  // loop button stuff
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
    <div className="bg-gray-100 flex justify-center items-center min-h-screen">
      <Box />

      <LoopButton onLoopChange={handleLoopChange} />
            <p>Loop is {isLooping ? "ON" : "OFF"}</p> {/*temporary indicator of loop on/off*/}

    </div>
  );
}

export default App;
