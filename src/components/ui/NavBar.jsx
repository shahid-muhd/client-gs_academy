import React, { useEffect, useState } from "react";

function NavBar() {
  const [background, setBackground] = useState("bg-transparent");
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      if (scrollY > 200) {
        setBackground("bg-gray-900");
      } else {
        setBackground("bg-transparent");
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`w-screen h-16 px-4 md:px-12 text-xl flex justify-between items-center text-white fixed overflow-hidden ${background} z-50 transition-colors duration-300`}
    >
      {/* Logo */}
      <div className="nav-logo-wrapper">
        <a href="/">GS Academy</a>
      </div>

      {/* Hamburger Menu Button for Mobile */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden focus:outline-none"
      >
        <svg
          className="w-6 h-6 text-white"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}
          />
        </svg>
      </button>

      {/* Navbar Links */}
      <div
        className={`${
          isOpen ? "block" : "hidden"
        }   w-10/12 p-10 md:p-0  rounded md:rounded-none md:flex md:w-auto md:items-center nav-menu-wrapper flex-col md:flex-row gap-4 md:gap-10 fixed  top-16 left-auto right-auto  md:left-auto bg-gray-900 md:bg-transparent md:static`}
      >
        <div className="nav-menu">
          <a href="/" className="block py-2 md:py-0 hover:text-blue-500">
            Home
          </a>
        </div>
        <div className="nav-menu">
          <a href="/about" className="block py-2 md:py-0 hover:text-blue-500">
            About Us
          </a>
        </div>
        <div className="nav-menu">
          <a href="#" className="block py-2 md:py-0 hover:text-blue-500">
            Courses
          </a>
        </div>
        <div className="nav-menu">
          <a href="#" className="block py-2 md:py-0 hover:text-blue-500">
            Careers
          </a>
        </div>
        <div className="nav-menu">
          <a href="#" className="block py-2 md:py-0 hover:text-blue-500">
            Contact Us
          </a>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
