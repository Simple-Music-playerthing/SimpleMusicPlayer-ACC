import React, { useState, useRef, useEffect } from 'react';
import { useAudioProgress } from './useAudioProgress';
import styles from "./Scrubber.module.css";

export default function AudioScrubber({ audioRef }) {
  const [isDragging, setIsDragging] = useState(false);
  const [audioShouldPlay, setAudioShouldPlay] = useState(false);
  const sliderRef = useRef(null);

  const { currentTime, duration, playing, pause, play, setPlaybackTime } = useAudioProgress(audioRef);

  // Helper to convert mouse position to percentage
  const updateProgress = (clientX) => {
    const slider = sliderRef.current;
    if (!slider) return;
    const rect = slider.getBoundingClientRect();
    const x = Math.min(Math.max(clientX - rect.left, 0), rect.width);
    const newProgress = (x / rect.width);
    setPlaybackTime(newProgress * duration);
  };

  const handleMouseDown = (e) => {
    setIsDragging(true);
    updateProgress(e.clientX);
    if (playing) { setAudioShouldPlay(true); }
    pause();
  };

  const handleMouseMove = (e) => {
    if (isDragging) updateProgress(e.clientX);
  };

  const handleMouseUp = () => { 
    setIsDragging(false); 
    if (audioShouldPlay) { play(); }
    setAudioShouldPlay(false);
  };

  // mobile
  const handleTouchStart = (e) => {
    setIsDragging(true);
    updateProgress(e.touches[0].clientX);
    pause();
  };

  const handleTouchMove = (e) => {
    if (isDragging) updateProgress(e.touches[0].clientX);
  };

  const handleTouchEnd = () => { 
    setIsDragging(false); 
    play();
  };

  useEffect(() => {
    if (isDragging) {
      document.body.style.cursor = 'grabbing';
      document.body.style.userSelect = 'none';
    } else {
      document.body.style.cursor = 'auto';
      document.body.style.userSelect = 'auto';
    }

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseup", handleMouseUp);
    window.addEventListener("touchmove", handleTouchMove);
    window.addEventListener("touchend", handleTouchEnd);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
      window.removeEventListener("touchmove", handleTouchMove);
      window.removeEventListener("touchend", handleTouchEnd);
      document.body.style.cursor = 'auto';
      document.body.style.userSelect = 'auto';
    };
  }, [isDragging]);

  const formatTime = (seconds) => {
    const m = Math.floor(seconds / 60);
    const s = Math.floor(seconds % 60);
    return `${m}:${s.toString().padStart(2, '0')}`;
  };

  const progress = duration ? currentTime / duration : 0;

  return (
    <div>
      <div
        ref={sliderRef}
        onMouseDown={handleMouseDown}
        onTouchStart={handleTouchStart}
        style={{
          width: 290,
          height: 15,
          position: 'relative',
          userSelect: isDragging ? 'none' : 'auto',
          cursor: isDragging ? 'grabbing' : 'pointer'
        }}
      >
        <div style={{
          width: 290,
          height: 5,
          left: 0,
          top: 5,
          position: 'absolute',
          background: 'rgba(217, 217, 217, 0.50)',
          boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
          borderRadius: 25
        }} />
        <div style={{
          width: `${progress * 290}px`,
          height: 5,
          left: 0,
          top: 5,
          position: 'absolute',
          background: '#D9D9D9',
          borderRadius: 25
        }} />
        <div style={{
          width: 15,
          height: 15,
          left: 0,
          top: 0,
          position: 'absolute',
          background: '#D9D9D9',
          boxShadow: '0px 0px 4px rgba(0, 0, 0, 0.25)',
          borderRadius: 9999,
          transform: `translateX(calc(${(progress) * 290}px - 7.5px))`,
          willChange: "transform"
        }} />
      </div>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <div className={styles.timestamp}>{formatTime(currentTime)}</div>
        <div className={styles.timestamp}>{formatTime(duration)}</div>
      </div>
    </div>
  );
}
