import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { TfiBlackboard } from "react-icons/tfi";
import { FaBars } from "react-icons/fa";

const Header = () => {
  const [isActive, setIsActive] = useState(false);
  const toggleMenu = () => {
    setIsActive(!isActive);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsActive(false);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className="py-8 px-16 top-0 left-0 right-0 z-1000 shadow-lg flex items-center justify-between bg-white fixed w-full">
      <div className="logo">
        <Link to="/" className="flex items-center text-3xl text-gray-700 no-underline">
          <i className="mr-4 text-teal-600"><TfiBlackboard /></i>
          experiencePedia
        </Link>
      </div>
      <nav className={`navbar ${isActive ? "flex" : "hidden"} lg:flex flex-col lg:flex-row items-center lg:items-start lg:ml-auto`}>
        <NavLink className="nav-link text-xl text-gray-900 ml-8 no-underline hover:text-teal-600" to="/">
          Home
        </NavLink>
        <NavLink className="nav-link text-xl text-gray-900 ml-8 no-underline hover:text-teal-600" to="/about">
          About
        </NavLink>
        <NavLink className="nav-link text-xl text-gray-900 ml-8 no-underline hover:text-teal-600" to="/register">
          Login
        </NavLink>
        <NavLink className="nav-link text-xl text-gray-900 ml-8 no-underline hover:text-teal-600" to="/contribute">
          NewsLetter
        </NavLink>
      </nav>
      <div id="menu-btn" className="text-2xl cursor-pointer lg:hidden" onClick={toggleMenu}>
        <FaBars /> 
      </div>
    </header>
  );
};

export default Header;
