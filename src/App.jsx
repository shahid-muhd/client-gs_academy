import { useState } from "react";

import "./App.css";
import NavBar from "./components/ui/NavBar";
import Home from "./pages/Home";

function App() {
  return (
    <>
      <div className=" w-full">
        <NavBar />

        <div className="container ">
          <Home/>
        </div>
      </div>
    </>
  );
}

export default App;
