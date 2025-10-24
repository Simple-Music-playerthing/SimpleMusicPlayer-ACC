import React from "react";
import background from "./background.svg";
import titleNAuthor from "./title_n_author.svg";

export const Box = () => {
    return (
        <div className="relative w-[360px] h-[640px]">
  {/* Background image */}
  <img
    className="absolute top-0 left-0 w-full h-full"
    alt="Background"
    src={background}
  />

  {/* Text box / label overlay */}
  <div className="absolute top-[354px] left-[105px] w-[151px] h-[60px]">
    <img
      className="w-full h-full"
      alt="Title and Author"
      src={titleNAuthor}
    />
  </div>
</div>
    );
};
