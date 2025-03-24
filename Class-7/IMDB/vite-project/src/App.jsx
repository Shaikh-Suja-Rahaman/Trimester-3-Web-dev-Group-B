import "./App.css";
import MovieRecommendation from "./components/MovieRecommendation";
import Movies from "./components/Movies";
import Navbar from "./components/Navbar";
import WatchList from "./components/WatchList";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Banner from "./components/Banner";
import { useEffect, useState } from "react";
function App() {

  const [watchList , setWatchList] = useState([])


  function handleAddToWatchList(movieObj){
    const updatedWatchlist = [...watchList , movieObj]

    localStorage.setItem('watchListMovies', JSON.stringify(updatedWatchlist))
    setWatchList(updatedWatchlist)

    console.log(updatedWatchlist)
  }  


  useEffect(()=>{
    let watchListData=  localStorage.getItem('watchListMovies')

    if(!watchListData){
      return 
    }

    setWatchList(JSON.parse(watchListData))
  }, [])

  return (
    <>
      <BrowserRouter>
        <Navbar />

        <Routes>
          <Route
            path="/"
            element={
              <>
<<<<<<< HEAD
                <Banner />
                <Movies />
=======
                <Banner /> <Movies handleAddtoWatchList={handleAddToWatchList} watchlist={watchList}/>
>>>>>>> f7386dcd72dee8031e68fda77da9b75204ca9c04
              </>
            }
          />
          <Route path="/watchlist" element={<WatchList watchList={watchList} />} />
          <Route path="/recommend" element={<MovieRecommendation />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
