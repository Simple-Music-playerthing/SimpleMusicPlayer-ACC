import { songs } from "./songs.js";

let currentIndex = 0;
const carousel = document.getElementById("carousel");

function getWrappedIndex(i) {
  return (i + songs.length) % songs.length;
}

function renderCarousel() {
  carousel.innerHTML = "";
  const prev = songs[getWrappedIndex(currentIndex - 1)];
  const current = songs[getWrappedIndex(currentIndex)];
  const next = songs[getWrappedIndex(currentIndex + 1)];

  [prev, current, next].forEach((song, idx) => {
    const div = document.createElement("div");
    div.className = "song" + (idx === 1 ? " current" : "");
    div.innerHTML = `
      <img src="${song.cover}" alt="${song.title}">
      <p>${song.title}</p>
      <small>${song.artist}</small>
    `;
    carousel.appendChild(div);
  });
}

document.getElementById("prevBtn").onclick = () => {
  currentIndex = getWrappedIndex(currentIndex - 1);
  renderCarousel();
};

document.getElementById("nextBtn").onclick = () => {
  currentIndex = getWrappedIndex(currentIndex + 1);
  renderCarousel();
};

renderCarousel();