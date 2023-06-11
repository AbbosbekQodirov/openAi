import "./App.css";
import { useState } from "react";
import { GrSend } from "react-icons/gr";
import Navbar from "./components/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ChatGpt from "./pages/ChatGpt";
import MidJourney from "./pages/MidJourney";

function App() {

  return (
    <div className="App">
      <div className="container  border  m-h-[10vh] mx-auto">
        <BrowserRouter>
          <Navbar />
          
          <Routes>
            <Route path="/" element={<ChatGpt />}></Route>
            <Route path="/midjourney" element={<MidJourney/>}></Route>
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
