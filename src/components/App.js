import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./Navbar/Navbar";
import Sidebar from "./Sidebar/Sidebar";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Sidebar/>
        <Routes></Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
