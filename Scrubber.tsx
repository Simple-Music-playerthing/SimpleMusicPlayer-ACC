import { useState, useRef, useEffect } from 'react'
import styles from "./Scrubber.module.css";

// TODO: replace with actual song length
const sampleSongLength: number = 241;

// commenting ts chatgpt function up because i dont know react
// React.FC is a function that returns a html component
const MusicScrubber: React.FC = () => {
  // things from useState persist between function calls (renders)
  // rerun the component function
  // update the DOM
  const [progress, setProgress] = useState(0); 
  const [isDragging, setIsDragging] = useState(false);
  // like a reference to this DOM element
  // doesnt do anything on change but stays constant
  const sliderRef = useRef<HTMLDivElement>(null);

  // helper function to convert mouse position to percentage
  // stores it in newProgress
  const updateProgress = (clientX: number) => {
    const slider = sliderRef.current;
    if (!slider) return;
    const rect = slider.getBoundingClientRect();
    const x = Math.min(Math.max(clientX - rect.left, 0), rect.width);
    const newProgress = (x / rect.width) * 100;
    setProgress(newProgress);
  };

  // use React.MouseEvent for JSX handlers, regular for DOM listeners
  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    updateProgress(e.clientX); // mouse x
  };

  const handleMouseMove = (e: MouseEvent) => {
    if (isDragging) updateProgress(e.clientX);
  }

  const handleMouseUp = () => setIsDragging(false);

  // mobile
  const handleTouchStart = (e: React.TouchEvent) => {
    setIsDragging(true);
    updateProgress(e.touches[0].clientX);
  };

  const handleTouchMove = (e: TouchEvent) => {
    if (isDragging) updateProgress(e.touches[0].clientX);
  };

  const handleTouchEnd = () => setIsDragging(false);

  // Side effects in this otherwise pure function
  // Runs after component render
  useEffect(() => {
    // show grab cursor on whole page
    if (isDragging) {
      document.body.style.cursor = 'grabbing';
      document.body.style.userSelect = 'none'; // disable text selection
    } else {
      document.body.style.cursor = 'auto';
      document.body.style.userSelect = 'auto';
    }

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseup", handleMouseUp);
    window.addEventListener("touchmove", handleTouchMove);
    window.addEventListener("touchend", handleTouchEnd);

    // cleanup function, run when the component is about to unmount
    // or this effect re-runs
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
      window.removeEventListener("touchmove", handleTouchMove);
      window.removeEventListener("touchend", handleTouchEnd);
      document.body.style.cursor = 'auto';
      document.body.style.userSelect = 'auto';
    }
  }, [isDragging]);
  // dependency array - rerun the destructor and body when
  // isDragging changes

  const formatTime = (seconds: number) => {
    const m = Math.floor(seconds / 60);
    const s = Math.floor(seconds % 60);
    return `${m}:${s.toString().padStart(2, '0')}`;
  }

  const currentTime = (progress / 100) * sampleSongLength;

  // inline HTML
  return (
    // TODO: width: 290 height: 15 is probably wrong should be 100% 100% ?? maybe
    <div>
      <div ref={sliderRef} onMouseDown={handleMouseDown} onTouchStart={handleTouchStart} style={{width: 290, height: 15, position: 'relative', userSelect: isDragging ? 'none' : 'auto', cursor: isDragging ? 'grabbing' : 'pointer'}}>
        <div style={{width: 290, height: 5, left: 0, top: 5, position: 'absolute', background: 'rgba(217, 217, 217, 0.50)', boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)', borderRadius: 25}} />
        <div style={{width: `${progress}%`, height: 5, left: 0, top: 5, position: 'absolute', background: '#D9D9D9', borderRadius: 25}} />
        <div style={{width: 15, height: 15, left: `calc(${progress}% - 7.5px)`, top: 0, position: 'absolute', background: '#D9D9D9', boxShadow: '0px 0px 4px rgba(0, 0, 0, 0.25)', borderRadius: 9999}} />
      </div>
      <div style={{display: 'flex', justifyContent: 'space-between'}}>
        <div className={styles.timestamp}>{formatTime(currentTime)}</div>
        <div className={styles.timestamp}>{formatTime(sampleSongLength)}</div>
      </div>
    </div>
  );
}

export default MusicScrubber;