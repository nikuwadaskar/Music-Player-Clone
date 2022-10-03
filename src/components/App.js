import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homepage from "./Homepage/Homepage";
import Navbar from "./Navbar/Navbar";
import Sidebar from "./Sidebar/Sidebar";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Sidebar />
        <Homepage />
        <Routes></Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
