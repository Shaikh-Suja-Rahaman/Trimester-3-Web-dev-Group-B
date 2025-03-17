import React from "react";
import NavBar from "./components/navbar";
import ReactDOM from "react-dom";
import { Routes, Route, BrowserRouter } from "react-router-dom";
// import "tailwindcss";

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          {/* <Route path="/" element={}></Route> */}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
