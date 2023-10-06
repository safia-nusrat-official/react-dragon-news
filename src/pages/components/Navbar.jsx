import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { BiSolidUserCircle } from "react-icons/bi";
import { AuthContext } from "../../providers/AuthProvider";

export const Navbar = () => {
  const { user, LogOut } = useContext(AuthContext);
  const handleLogOut = () => {
    LogOut()
      .then(() => console.log("Logged out"))
      .catch((error) => console.log(error));
  };
  return (
    <div className="flex lg:flex-row md:flex-row flex-col items-center my-4">
      <ul className="mx-auto mb-4 flex gap-x-4 text-gray-500 font-normal">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/career">Career</NavLink>
      </ul>
      <div className="flex items-center">
        {user ? (
          <>
            <p className="font-medium text-lg mr-2">{user?.email}</p>
            <Link to="/profile">
              <div className="text-4xl mr-4 w-12 rounded-full border-2 border-primary p-1">
                <img
                  src={user?.photoURL}
                  alt=""
                  className="rounded-full w-full aspect-square"
                />
              </div>
            </Link>
          </>
        ) : (
          <BiSolidUserCircle className="text-4xl mr-4"></BiSolidUserCircle>
        )}
        {user ? (
          <>
            <button
              onClick={handleLogOut}
              className="bg-secondary hover:bg-opacity-90 font-semibold px-8 py-2 rounded-sm text-white"
            >
              Logout
            </button>
          </>
        ) : (
          <>
            <Link to="/login">
              <button className="bg-secondary hover:bg-opacity-90 font-semibold px-8 py-2 rounded-sm text-white">
                Login
              </button>
            </Link>
          </>
        )}
      </div>
    </div>
  );
};
