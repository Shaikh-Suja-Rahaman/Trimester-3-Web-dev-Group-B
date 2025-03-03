import React from "react";


function NavBar() {
  return (
    <div className="flex space-x-8 items-center pl-3 py-4">
      <a href='/'>Logo</a>

      <a href="/"  className="text-blue-500 text-3xl font-bold">
        Movies
      </a>

      <a href="/watchlist" className="text-blue-500 text-3xl font-bold">
        Watchlist
      </a>
      <a href="/recommend" className="text-blue-500 text-3xl font-bold">
        Movie Recommendations AI
      </a>
    </div>
  );
}

export default NavBar;


