import { useState, useEffect } from "react";

import MovieContainer from "../components/MovieContainer";

function NowPlayingPage() {
  const [movieData, setMovieData] = useState([]);

  const getNowPlaying = () => {
    fetch(
      "https://api.themoviedb.org/3/movie/now_playing?api_key=867fee86b2e4161fac32d4b7080bc0db"
    )
      .then((res) => res.json())
      .then((json) => setMovieData(json.results));
  };

  useEffect(() => {
    getNowPlaying();
  }, []);

  return <MovieContainer movieData={movieData} />;
}

export default NowPlayingPage;
