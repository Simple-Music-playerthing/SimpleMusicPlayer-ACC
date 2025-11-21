import React, {useState} from 'react';
import "../index.css";

const Shuffle = ({ onShuffleChange }) => {
  const [active, setActive] = useState(false);

  const toggleShuffle = () => {
    const newState = !active;
    setActive(newState);
    if (onShuffleChange) onShuffleChange(newState);
  };

  return <div
      className={`shuffle ${active ? "active" : ""}`}
      onClick={toggleShuffle}
    >


    <svg xmlns="http://www.w3.org/2000/svg" width="45" height="34" viewBox="0 0 45 34" fill="none">
        <g filter="url(#filter0_d_60_83)">
            <path d="M40.25 5.56699C40.5833 5.75944 40.5833 6.24056 40.25 6.43301L32.75 10.7631C32.4167 10.9556 32 10.715 32 10.3301L32 1.66987C32 1.28497 32.4167 1.04441 32.75 1.23686L40.25 5.56699Z" fill="#D9D9D9"/>
            <path d="M40.25 21.4191C40.5833 21.2266 40.5833 20.7455 40.25 20.553L32.75 16.2229C32.4167 16.0304 32 16.271 32 16.6559L32 25.3162C32 25.7011 32.4167 25.9416 32.75 25.7492L40.25 21.4191Z" fill="#D9D9D9"/>
            <rect x="22" y="3" width="13" height="6" rx="3" fill="#D9D9D9"/>
            <rect width="13" height="6" rx="3" transform="matrix(1 0 0 -1 22 23.986)" fill="#D9D9D9"/>
            <rect x="4" y="18" width="13" height="6" rx="3" fill="#D9D9D9"/>
            <rect width="13" height="6" rx="3" transform="matrix(1 0 0 -1 4 9)" fill="#D9D9D9"/>
            <rect x="10.598" y="21.7123" width="23.9468" height="6" rx="3" transform="rotate(-55.4035 10.598 21.7123)" fill="#D9D9D9"/>
            <rect width="23.9468" height="6" rx="3" transform="matrix(0.567794 0.823171 0.823171 -0.567794 10.598 5.40676)" fill="#D9D9D9"/>
        </g>
        <defs>
            <filter id="filter0_d_60_83" x="0" y="1.16913" width="44.5" height="32.6478" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix"/>
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
            <feOffset dy="4"/>
            <feGaussianBlur stdDeviation="2"/>
            <feComposite in2="hardAlpha" operator="out"/>
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_60_83"/>
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_60_83" result="shape"/>
            </filter>
        </defs>
    </svg>






  </div>;
};

export default Shuffle;
