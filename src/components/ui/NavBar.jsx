import React from "react";

function NavBar() {
  return (
    <div className="w-full h-16 px-12 text-xl flex justify-between items-center  text-white  fixed   z-50">
      <div className="nav-logo-wrapper ">GS Academy</div>
      <div className="nav-menu-wrapper w-1/2 flex justify-end gap-10">
        <div className="nav-menu">Home</div>
        <div className="nav-menu">About Us</div>
        <div className="nav-menu">Courses</div>
        <div className="nav-menu">Careers</div>
        <div className="nav-menu">Contact Us</div>
      </div>
    </div>
  );
}

export default NavBar;
