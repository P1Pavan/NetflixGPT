import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className=" gap-2 absolute bg-gradient-to-r from-black w-screen aspect-video h-screen">
      <div className="mt-56 ml-28  text-white">
        <h1 className="text-5xl font-bold mb-5">{title}</h1>
        <p className="w-2/5 text-wrap ">{overview}</p>
        <div className="gap-4 mt-4">
          <button className="bg-white hover:opacity-80 text-black mr-4 px-7 py-3 text-lg font-bold rounded-lg">
            ▶️ Play
          </button>
          <button className="bg-gray-700 opacity-80 hover:opacity-60 text-white px-7 py-3 text-lg font-bold rounded-lg">
          More Info
          </button>
        </div>
      </div>
    </div>
  );
};

export default VideoTitle;
