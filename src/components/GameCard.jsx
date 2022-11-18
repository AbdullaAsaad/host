import React from "react";
import ps from "../gamesLogo/playstation-logo.png";
import xbox from "../gamesLogo/xbox-2-logo-black-and-white.png";
import steam from "../gamesLogo/steam-1-logo-black-and-white.png";

export default function GameCart() {
  return (
    <div className="felx w-full">
      <h1 className="justify-center items-center flex w-full text-center text-3xl text-black font-bold">
        الالعاب
      </h1>
      <div className="m-auto mt-6 flex h-48 w-[90%] items-center justify-center gap-6 rounded-xl bg-gray-900 bg-opacity-70 text-center text-white drop-shadow-2xl backdrop-blur-lg backdrop-filter">
        <div className="inline-flex h-36 w-64 items-center justify-center rounded-md bg-white hover:bg-gray-300">
          <img src={ps} alt="play station logo" className="w-20 h-16" />
          {/* <h4 className="text-black text-xl bold">Play Station</h4> */}
        </div>
        <div className="inline-flex h-36 w-64 items-center justify-center rounded-md bg-white hover:bg-gray-300">
          <img src={xbox} alt="xbox logo" className="w-40 h-16" />
          {/* <h4 className="text-black text-xl">Xbox</h4> */}
        </div>
        <div className="inline-flex h-36 w-64 items-center justify-center rounded-md bg-white hover:bg-gray-300">
          <img src={steam} alt="steam logo" className="w-20 h-16" />
          {/* <h4 className="text-black text-xl">Steam</h4> */}
        </div>
      </div>
    </div>
  );
}
