import React, { useEffect } from "react";
import { API_OPTIONS } from "../utils/Constants";
import { useDispatch, useSelector } from "react-redux";
import { addTrailerVideo } from "../utils/Store/moviesSlice";
import useMovieTrailer from "../Hooks/useMovieTrailer";

const VideoBackground = ({ movieId }) => {
  useMovieTrailer((movieId = { movieId }));
  const trailerrr = useSelector((store) => store?.movies?.trailerVideo);

  return (
    <div>
      <iframe
        className="w-screen aspect-video h-screen"
        src={`https://www.youtube.com/embed/${trailerrr?.key}?si=NumVPJPxctXBJ3ql`}
        // src={`https://www.youtube.com/embed/${trailerrr?.key}?si=NumVPJPxctXBJ3ql?&autoplay=1&mute=1`}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default VideoBackground;
