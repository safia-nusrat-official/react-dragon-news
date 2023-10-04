import React from "react";
import { Link, NavLink } from "react-router-dom";
import { BiSolidUserCircle } from "react-icons/bi";

export const Navbar = () => {
  return (
    <div className="flex lg:flex-row md:flex-row flex-col items-center my-4">
      <ul className="mx-auto mb-4 flex gap-x-4 text-gray-500 font-normal">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/career">Career</NavLink>
      </ul>
      <div className="flex items-center">
        <BiSolidUserCircle className="text-4xl mr-4"></BiSolidUserCircle>
        <Link to="/login">
          <button className="bg-secondary hover:bg-opacity-90 font-semibold px-8 py-2 rounded-sm text-white">
            Login
          </button>
        </Link>
      </div>
    </div>
  );
};
