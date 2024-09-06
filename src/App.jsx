import { useState } from "react";

import "./App.css";
import NavBar from "./components/ui/NavBar";
import Home from "./pages/Home";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import About from "./pages/About";
import Footer from "./components/ui/Footer";
import Contact from "./pages/Contact";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/contact",
    element: <Contact/> ,
  },
]);

function App() {
  return (
    <>
      <div className="  w-screen  scroll-smooth">
        <NavBar />

        <div className="container ">
          <RouterProvider router={router} />
        </div>

        <Footer />
      </div>
    </>
  );
}

export default App;
