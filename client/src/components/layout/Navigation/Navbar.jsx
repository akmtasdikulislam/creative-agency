import Button from "@/components/common/Button/Button";
import Logo from "@/components/common/Logo/Logo";
import { useState } from "react";
import { HiBars3, HiXMark } from "react-icons/hi2";
import { NavLink } from "react-router";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleNavMenu = () => {
    setIsOpen(!isOpen);
    document.body.classList.toggle("overflow-hidden");
  };

  return (
    <nav className="navbar max-w-screen xl:px-30 bg-primary relative mb-0 flex w-screen max-md:items-center max-md:justify-center md:justify-between md:px-10 md:py-10 lg:px-20">
      <div>
        <Logo />
      </div>
      <div
        className={`max-md:bg-base-100 max-md:p-15 transition-all duration-500 max-md:absolute max-md:top-0 max-md:z-10 max-md:flex max-md:h-screen max-md:w-fit max-md:flex-col max-md:justify-between max-md:shadow-2xl lg:flex-none ${isOpen ? "right-0" : "-right-full"}`}
      >
        <ul className="menu max-md:menu-vertical menu-horizontal px-1">
          <li>
            <NavLink to="/" className="nav-link max-md:text-lg lg:text-base">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/our-portfolio"
              className="nav-link max-md:text-lg md:text-base"
            >
              Our Portfolio
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/our-team"
              className="nav-link max-md:text-lg md:text-base"
            >
              Our Team
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact-us"
              className="nav-link max-md:text-lg md:text-base"
            >
              Contact Us
            </NavLink>
          </li>
        </ul>
        <Button variant="primary">Login</Button>
        <button
          onClick={handleNavMenu}
          className="btn focus:text-secondary active:text-secondary hover:text-secondary absolute right-1 top-3 border-none bg-transparent shadow-none md:hidden"
        >
          <HiXMark size={"2em"} />
        </button>
      </div>
      <button
        onClick={handleNavMenu}
        className="btn left-10/12 sm:left-11/12 focus:text-secondary active:text-secondary hover:text-secondary absolute top-1 border-none bg-transparent shadow-none md:hidden"
      >
        <HiBars3 size={"2em"} />
      </button>
    </nav>
  );
};

export default Navbar;
