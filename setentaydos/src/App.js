import React from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./views/Home/Home";
import Wall from "./components/Wall/Wall";

function App() {
  return (
    <BrowserRouter>

      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/wall" element={<Wall/>}/>
      </Routes>
      <Routes>
        <Route path="/" element={<Home/>}/>
      </Routes>

    </BrowserRouter>
  );
}

export default App;
