import { forwardRef, useImperativeHandle, useState } from "react";
import "../index.css";

const PlayPauseButton = forwardRef(({ onPlayChange }, ref) => {
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlay = () => {
    const newState = !isPlaying;
    setIsPlaying(newState);
    if (onPlayChange) onPlayChange(newState);
  };

  useImperativeHandle(ref, () => ({
    setPlaying: (value) => {
      setIsPlaying(value);
      if (onPlayChange) { onPlayChange(value); }
    }
  }));

  return (
    <div
      className={`playpausebutton ${isPlaying ? "playing" : "paused"}`}
      onClick={togglePlay}
    >
      {isPlaying ? (
        // pause icon
        <svg xmlns="http://www.w3.org/2000/svg" width="43" height="58" viewBox="0 0 43 58" fill="none">
        <g filter="url(#filter0_d_39_59)">
            <rect x="25" width="14" height="50" rx="7" fill="#D9D9D9"/>
            <rect x="4" width="14" height="50" rx="7" fill="#D9D9D9"/>
        </g>
        <defs>
            <filter id="filter0_d_39_59" x="0" y="0" width="43" height="58" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix"/>
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
            <feOffset dy="4"/>
            <feGaussianBlur stdDeviation="1"/>
            <feComposite in2="hardAlpha" operator="out"/>
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"/>
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_39_59"/>
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_39_59" result="shape"/>
            </filter>
        </defs>
        </svg>
      ) : (
        // play icon
        <svg xmlns="http://www.w3.org/2000/svg" width="50" height="59" viewBox="0 0 50 59" fill="none">
        <g filter="url(#filter0_dd_39_63)">
            <path d="M42.4856 23.0672C44.1928 24.2614 44.1928 26.7896 42.4856 27.9838L11.7195 49.5041C9.73111 50.8949 7 49.4724 7 47.0458L7 4.00522C7 1.57863 9.73111 0.156057 11.7195 1.54693L42.4856 23.0672Z" fill="#D9D9D9"/>
        </g>

        <defs>
            <filter id="filter0_dd_39_63" x="0" y="0" width="49.766" height="58.051" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix"/>
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
            <feOffset dx="2" dy="4"/>
            <feGaussianBlur stdDeviation="1.5"/>
            <feComposite in2="hardAlpha" operator="out"/>
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"/>
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_39_63"/>

            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
            <feOffset dx="-3" dy="3"/>
            <feGaussianBlur stdDeviation="1.5"/>
            <feComposite in2="hardAlpha" operator="out"/>
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"/>
            <feBlend mode="normal" in2="effect1_dropShadow_39_63" result="effect2_dropShadow_39_63"/>
            <feBlend mode="normal" in="SourceGraphic" in2="effect2_dropShadow_39_63" result="shape"/>
            </filter>
        </defs>
        </svg>
      )}
    </div>
  );
});

export default PlayPauseButton;