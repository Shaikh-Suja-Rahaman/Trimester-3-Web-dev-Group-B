import { useState } from "react";
import {genreids} from '../utlities/genre'

function WatchList({watchList}) {

  const [search , setSearch] = useState('')


  function handleSearch(e){
    setSearch(e.target.value)
  }
 

  return (
    <>
      {/* Genre Based Filtering */}

      {/* Search Field */}
      <div className="flex justify-center my-10">
        <input
          placeholder="Search Movies"
          className="h-[3rem] w-[18rem] bg-gray-200 px-4 outline-none border border-slate-600"
          type="text"
          value={search}
          onChange={handleSearch}
        />
      </div>

      {/* Watchlist Table */}

      <div className="m-8">
        <table className="w-full text-center ">
          <thead className="border border-gray-200 rounded-lg bg-gray-200">
            <tr>
              <th>Name</th>
              <th>Ratings</th>
              <th>Popularity</th>
              <th>Genre</th>
              <th>Delete Movies</th>
            </tr>
          </thead>

          <tbody>
            {watchList.filter((movieObj)=>{
               return movieObj.title.toLowerCase().includes(search.toLowerCase())
            }).map((movieObj)=>{
              return <tr className="border-b-2">
              <td className="flex items-center px-6 py-4">
                <img
                  className="h-[6rem] w-[10rem]"
                  src={`https://image.tmdb.org/t/p/original/${movieObj.poster_path}`}
                />
                <div className="mx-10">{movieObj.title}</div>
              </td>

              <td>{movieObj.vote_average}</td>
              <td>{movieObj.popularity}</td>
              <td>{genreids[movieObj.genre_ids[0]]}</td>

              <td className="text-red-500">Delete</td>
            </tr>
            
            })}
            
          </tbody>
        </table>
      </div>
    </>
  );
}

export default WatchList
