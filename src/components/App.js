import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homepage from "./Homepage/Homepage";
import Navbar from "./Navbar/Navbar";
import Sidebar from "./Sidebar/Sidebar";
import style from "./app.module.css";
import Album from "./Album/Album";
import Music from "./Music/Music";

function App() {
  return (
    <div className={style.app}>
      <BrowserRouter>
        <Navbar />
        <div className={style.body}>
          <Sidebar />
          <Routes>
            <Route exact path="/" element={<Homepage />} />
            <Route exact path="/album" element={<Album />} />
            <Route exact path="/music" element={<Music />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
