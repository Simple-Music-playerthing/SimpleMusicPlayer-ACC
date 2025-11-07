import React from "react";
import ReactDOM from "react-dom/client";
import PlayButton from "./PlayButton";

const rootElement = document.getElementById("root")!;
const root = ReactDOM.createRoot(rootElement);

root.render(
  <React.StrictMode>
    <PlayButton />
  </React.StrictMode>
);
