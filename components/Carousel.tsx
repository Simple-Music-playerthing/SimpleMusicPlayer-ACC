"use client";

import { useState } from "react";
import { songs } from "./songs";

type Song = {
  title: string;
  artist: string;
  cover: string;
};

export default function Carousel() {
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const getWrappedIndex = (i: number): number => {
    return (i + songs.length) % songs.length;
  };

  const prev: Song = songs[getWrappedIndex(currentIndex - 1)];
  const current: Song = songs[getWrappedIndex(currentIndex)];
  const next: Song = songs[getWrappedIndex(currentIndex + 1)];

  const handlePrev = () => {
    setCurrentIndex((i) => getWrappedIndex(i - 1));
  };

  const handleNext = () => {
    setCurrentIndex((i) => getWrappedIndex(i + 1));
  };

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h1>Song Carousel</h1>

      <button onClick={handlePrev}>Previous</button>
      <button onClick={handleNext}>Next</button>

      <div
        style={{
          display: "flex",
          gap: "20px",
          justifyContent: "center",
          alignItems: "center",
          marginTop: "30px",
        }}
      >
        {[prev, current, next].map((song: Song, idx: number) => (
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
  );
}
