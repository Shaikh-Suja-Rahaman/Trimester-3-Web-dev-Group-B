import React, { useEffect } from "react";
import MovieCard from "./MovieCard";
import axios from "axios";

function Movies() {
  useEffect(() => {
    axios
      .get(
        "https://api.themoviedb.org/3/movie/popular?api_key=3aec63790d50f3b9fc2efb4c15a8cf99&language=en-US&page=1"
      )
      .then(function (response) {
        console.log(response.data.results);
      })
      .catch(function (err) {
        console.log("Cannot call TMDB API ", err);
      });
  }, []);

  return (
    <div>
      <div className="text-2xl font-bold text-center m-5">
        <h1>Trending Movies</h1>
      </div>
      <div className="flex justify-evenly flex-wrap gap-8 ">
        <MovieCard />
      </div>
    </div>
  );
}

export default Movies;
