import React, { useState } from "react";
import { HiBars3, HiXMark } from "react-icons/hi2";
import logo from "../../../assets/images/logos/logo.png";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleNavMenu = () => {
    setIsOpen(!isOpen);
    document.body.classList.toggle("overflow-hidden");
  };

  return (
    <div className="navbar max-w-screen xl:px-30 relative flex w-screen max-lg:items-center max-lg:justify-center lg:justify-between lg:px-20 xl:py-10">
      <div className="">
        <a className="btn btn-ghost border-none text-xl hover:border-none hover:bg-transparent hover:shadow-none">
          <img src={logo} alt="Creative Agency" className="w-32" />
        </a>
      </div>
      <div
        className={`max-lg:bg-base-100 max-lg:p-15 transition-all duration-500 max-lg:absolute max-lg:top-0 max-lg:z-10 max-lg:flex max-lg:h-screen max-lg:w-fit max-lg:flex-col max-lg:justify-between max-lg:shadow-xl lg:flex-none ${isOpen ? "right-0" : "-right-full"}`}
      >
        <ul className="menu max-lg:menu-vertical menu-horizontal px-1">
          <li>
            <a className="nav-link max-lg:text-lg lg:text-base">Home</a>
          </li>
          <li>
            <a className="nav-link max-lg:text-lg lg:text-base">
              Our Portfolio
            </a>
          </li>
          <li>
            <a className="nav-link max-lg:text-lg lg:text-base">Our Team</a>
          </li>
          <li>
            <a className="nav-link max-lg:text-lg lg:text-base">Contact Us</a>
          </li>
        </ul>
        <a className="btn btn-neutral">Login</a>
        <button
          onClick={handleNavMenu}
          className="btn absolute right-1 top-3 border-none bg-transparent shadow-none focus:text-amber-400 active:text-amber-400 lg:hidden"
        >
          <HiXMark size={"2em"} />
        </button>
      </div>
      <button
        onClick={handleNavMenu}
        className="btn left-10/12 sm:left-11/12 absolute top-1 border-none bg-transparent shadow-none active:text-amber-400 lg:hidden"
      >
        <HiBars3 size={"2em"} />
      </button>
    </div>
  );
};

export default Navbar;
