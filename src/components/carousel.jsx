import { useState } from "react";
import { songs } from "./songs";

export default function Carousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const getWrappedIndex = (i) => {
    return (i + songs.length) % songs.length;
  };

  const prev = songs[getWrappedIndex(currentIndex - 1)];
  const current = songs[getWrappedIndex(currentIndex)];
  const next = songs[getWrappedIndex(currentIndex + 1)];

  const handlePrev = () => {
    setCurrentIndex((i) => getWrappedIndex(i - 1));
  };

  const handleNext = () => {
    setCurrentIndex((i) => getWrappedIndex(i + 1));
  };

  return (
    <div>
        {/*buttons*/}
        <div onClick={handlePrev} style={{ cursor: "pointer", width: "40px", height: "40px", position: "fixed", top: "163%", left: "43%", transform: "translate(-50%, -50%)"}}>
          <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 46 58" fill="none">
            <g filter="url(#filter0_d_43_70)">
              <path d="M16.6308 31.2218C15.3185 30.0313 15.3185 27.9687 16.6308 26.7782L33.0297 11.9C34.9575 10.151 38.0455 11.5189 38.0455 14.1219L38.0455 43.8781C38.0455 46.4811 34.9575 47.849 33.0297 46.1L16.6308 31.2218Z" fill="#D9D9D9"/>
            </g>
            <g filter="url(#filter1_d_43_70)">
              <rect x="4" y="4" width="4" height="50" rx="2" fill="#D9D9D9"/>
            </g>
            <defs>
              <filter id="filter0_d_43_70" x="11.6466" y="11.116" width="30.3989" height="43.7681" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                <feOffset dy="4"/>
                <feGaussianBlur stdDeviation="2"/>
                <feComposite in2="hardAlpha" operator="out"/>
                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_43_70"/>
                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_43_70" result="shape"/>
              </filter>
              <filter id="filter1_d_43_70" x="0" y="0" width="12" height="58" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                <feOffset/>
                <feGaussianBlur stdDeviation="2"/>
                <feComposite in2="hardAlpha" operator="out"/>
                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_43_70"/>
                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_43_70" result="shape"/>
              </filter>
            </defs>
          </svg>
        </div>

      <div onClick={handleNext} style={{ cursor: "pointer", width: "40px", height: "40px", position: "fixed", top: "163%", left: "56%",transform: "translate(-50%, -50%)"}}>
          <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 46 58" fill="none">
            <g filter="url(#filter0_d_44_76)">
              <path d="M29.3691 26.7782C30.6813 27.9687 30.6813 30.0313 29.3691 31.2218L12.9702 46.1C11.0423 47.849 7.95437 46.4811 7.95437 43.8781L7.95437 14.1219C7.95437 11.5189 11.0424 10.151 12.9702 11.9L29.3691 26.7782Z" fill="#D9D9D9"/>
            </g>
            <g filter="url(#filter1_d_44_76)">
              <rect x="41.9998" y="54" width="4" height="50" rx="2" transform="rotate(-180 41.9998 54)" fill="#D9D9D9"/>
            </g>
            <defs>
              <filter id="filter0_d_44_76" x="3.95438" y="11.116" width="30.3989" height="43.7681" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                <feOffset dy="4"/>
                <feGaussianBlur stdDeviation="2"/>
                <feComposite in2="hardAlpha" operator="out"/>
                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_44_76"/>
                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_44_76" result="shape"/>
              </filter>
              <filter id="filter1_d_44_76" x="33.9998" y="0" width="12" height="58" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                <feOffset/>
                <feGaussianBlur stdDeviation="2"/>
                <feComposite in2="hardAlpha" operator="out"/>
                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_44_76"/>
                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_44_76" result="shape"/>
              </filter>
            </defs>
          </svg>
        </div>
      <div style={{ textAlign: "center", padding: "20px"}}>
        <div
          style={{
            display: "flex",
            gap: "20px",
            justifyContent: "center",
            alignItems: "center",
            marginTop: "30px",
          }}
        >
          {[prev, current, next].map((song, idx) => (
            <div
              key={idx}
              style={{
                textAlign: "center",
                opacity: idx === 1 ? 1 : 0.5,
                transform: idx === 1 ? "scale(1.1)" : "scale(0.9)",
                transition: "all 0.3s ease",
              }}
            >
              <img
                src={song.cover}
                alt={song.title}
                style={{
                  width: "120px",
                  height: "120px",
                  borderRadius: "10px",
                  objectFit: "cover",
                }}
              />
              <p>{song.title}</p>
              <small>{song.artist}</small>
            </div>
          ))}
        </div>
      
      </div>
    </div>
  );
}
