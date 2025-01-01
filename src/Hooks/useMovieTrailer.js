import { useEffect } from "react";
import { addTrailerVideo } from "../utils/Store/moviesSlice";
import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/Constants";

const useMovieTrailer = ({ movieId }) => {
  const dispatch = useDispatch();


  const getMovieVideos = async () => {
    const data = await fetch(
      `https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`,
      API_OPTIONS
    );
    const json = await data.json();
    console.log(json);
    const filterData = json?.results.filter(
      (video) => video.type === "Trailer"
    );
    const trailer = filterData.length === 0 ? json?.results[0] : filterData[0];
    const key = trailer?.key;
    dispatch(
      addTrailerVideo({
        key: key,
      })
    );

    console.log(trailer);
  };

  useEffect(() => {
    getMovieVideos();
  }, []);
};

export default useMovieTrailer;
