import React, { useState } from "react";
import "../index.css";

export default function LoopButton({ onLoopChange }) {
  const [active, setActive] = useState(false);

  const toggleLoop = () => {
    const newState = !active;
    setActive(newState);
    if (onLoopChange) onLoopChange(newState); // notify parent
  };

  return (
    <div
      className={`loopbutton ${active ? "active" : ""}`}
      onClick={toggleLoop}
    >

      <svg xmlns="http://www.w3.org/2000/svg" width="42" height="36" viewBox="0 0 42 36" fill="none">
        <g filter="url(#filter0_d_1_147)">
          <g filter="url(#filter1_d_1_147)">
            <path d="M32.3979 9.75C32.5903 9.41667 33.0714 9.41667 33.2639 9.75L37.594 17.25C37.7865 17.5833 37.5459 18 37.161 18H28.5007C28.1158 18 27.8753 17.5833 28.0677 17.25L32.3979 9.75Z" fill="#D9D9D9"/>
            <rect x="35.8309" y="28" width="6" height="14" rx="3" transform="rotate(-180 35.8309 28)" fill="#D9D9D9"/>
            <rect x="34.8309" y="28" width="23" height="6" rx="3" transform="rotate(-180 34.8309 28)" fill="#D9D9D9"/>
          </g>
          <g filter="url(#filter2_d_1_147)">
            <path d="M8.39786 21.25C8.59031 21.5833 9.07143 21.5833 9.26388 21.25L13.594 13.75C13.7865 13.4167 13.5459 13 13.161 13H4.50074C4.11584 13 3.87528 13.4167 4.06773 13.75L8.39786 21.25Z" fill="#D9D9D9"/>
            <rect x="5.83087" y="4" width="6" height="14" rx="3" fill="#D9D9D9"/>
            <rect x="5.83087" y="4" width="23" height="6" rx="3" fill="#D9D9D9"/>
          </g>
        </g>
        <defs>
          <filter id="filter0_d_1_147" x="0" y="0" width="41.6617" height="32" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix"/>
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
            <feOffset/>
            <feGaussianBlur stdDeviation="2"/>
            <feComposite in2="hardAlpha" operator="out"/>
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1_147"/>
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1_147" result="shape"/>
          </filter>
        </defs>
      </svg>
      
    </div>
    
  );
}
