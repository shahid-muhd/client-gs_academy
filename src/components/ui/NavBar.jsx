import React, { useEffect, useState } from "react";

function NavBar() {
  const [background, setBackground] = useState("bg-transparent");

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      if (scrollY > 200) {
        setBackground("bg-gray-900");
      } else {
        setBackground("transparent");
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`w-full h-16 px-12 text-xl flex justify-between items-center  text-white  fixed   ${background}  z-50`}
    >
      <div className="nav-logo-wrapper ">GS Academy</div>
      <div className="nav-menu-wrapper w-1/2 flex justify-end gap-10">
        <div className="nav-menu">
          <a href={`/`}>Home </a>{" "}
        </div>
        <div className="nav-menu">
          <a href={`/about`}>About Us </a>
        </div>
        <div className="nav-menu">Courses</div>
        <div className="nav-menu">Careers</div>
        <div className="nav-menu">Contact Us</div>
      </div>
    </div>
  );
}

export default NavBar;
