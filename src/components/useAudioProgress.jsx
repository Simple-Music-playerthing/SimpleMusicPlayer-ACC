import { useEffect, useState } from "react";

// Helper class to seek / pause / play an audio tag and return the current time
export function useAudioProgress(audioRef) {
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const handleLoadedMetadata = () => setDuration(audio.duration || 0);

    audio.addEventListener("loadedmetadata", handleLoadedMetadata);

    if (audio.readyState >= 1) {
      setDuration(audio.duration || 0);
    }

    let animationId;

    const update = () => {
      if (audio) {
        if (audio.paused) {
          setPlaying(false);
        } else {
          setPlaying(true);
          setCurrentTime(audio.currentTime);
        }
      }
      animationId = requestAnimationFrame(update);
    };

    animationId = requestAnimationFrame(update);

    return () => {
      cancelAnimationFrame(animationId);
      audio.removeEventListener("loadedmetadata", handleLoadedMetadata);
    };
  }, [audioRef]);

  const setPlaybackTime = (time) => {
    const audio = audioRef.current;
    if (audio) {
      audio.currentTime = time;
      setCurrentTime(time);
    }
  };

  const play = () => {
    const audio = audioRef.current;
    if (audio) audio.play();
  };

  const pause = () => {
    const audio = audioRef.current;
    if (audio) audio.pause();
  };

  return { currentTime, duration, playing, pause, play, setPlaybackTime };
}
