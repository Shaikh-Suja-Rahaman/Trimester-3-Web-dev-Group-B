  import React, { useEffect, useState } from "react";
import MovieCard from "./MovieCard";
import axios from "axios";
import Pagination from "./Pagination";


function Movies({handleAddtoWatchList , watchlist}) {
  const [movies , setMovies] = useState(null)
  const [loading , setLoading] = useState(true)
  const [page , setPage] = useState(1)

<<<<<<< HEAD
=======


>>>>>>> f7386dcd72dee8031e68fda77da9b75204ca9c04
  const pageNext = ()=>{
     setPage(page+1)
  }

  const pagePrev = ()=>{
    if(page>1){
      setPage(page-1)
    }

  }

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/popular?api_key=3aec63790d50f3b9fc2efb4c15a8cf99&language=en-US&page=${page}`
      )
      .then(function (response) {
        console.log(response.data.results);
        setMovies(response.data.results)
        setLoading(false)

      })
      .catch(function (err) {
        console.log("Cannot call TMDB API ", err);
      });
  }, [page]);



  return (
    <div>
      <div className="text-2xl font-bold text-center m-5">
        <h1>Trending Movies</h1>
      </div>
      <div className="flex justify-evenly flex-wrap gap-8 ">
<<<<<<< HEAD
       {loading===true ? <div>Loading...</div> : movies.map((movieObj)=>(
        <MovieCard movieObj={movieObj}/>
=======
       {loading===true? <div>Loading...</div>: movies.map((movieObj)=>(
        <MovieCard movieObj={movieObj} handleAddTowatchlist={handleAddtoWatchList} watchlist={watchlist}/>
>>>>>>> f7386dcd72dee8031e68fda77da9b75204ca9c04
       ))}
      </div>
     <Pagination pageNext={pageNext} pagePrev={pagePrev} pageNo={page}/>
    </div>
  );
}

export default Movies;
