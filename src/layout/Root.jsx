import React from "react";
import { Outlet } from "react-router-dom";

const Root = () => {
  return (
    <div className="
    font-poppins
    lg:mx-auto
    lg:5/6
    md:mx-auto
    md:w-4/5
    w-full
    mt-10">
      <Outlet></Outlet>
    </div>
  );
};

export default Root;
