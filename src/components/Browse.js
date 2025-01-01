import React, { useEffect } from "react";
import Header from "./Header";
import useNowPlayingMovies from "../Hooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";

const Browse = () => {
  
  useNowPlayingMovies();

  return (
    <div>
      <Header />
      <MainContainer />
      <SecondaryContainer />

      {/* <div className="absolute">
        <img
          className="w-screen h-screen "
          style={{ filter: "grayscale(40%) brightness(0.6)" }}
          src="https://assets.nflxext.com/ffe/siteui/vlv3/729ce5c2-d831-436a-8c9d-f38fea0b99b3/web/IN-en-20241209-TRIFECTA-perspective_4aef76eb-7d5b-4be0-93c0-5f67320fd878_large.jpg"
          alt="Background photo"
        />
      </div> */}
    </div>
  );
};

export default Browse;
