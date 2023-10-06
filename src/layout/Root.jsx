import React from "react";
import { Outlet, useLocation } from "react-router-dom";

const Root = () => {
  const location = useLocation().pathname
  return (
    <div className="
    font-poppins
    lg:mx-auto
    lg:5/6
    md:mx-auto
    md:w-4/5
    w-full
    my-10" style={
      location==="/login"||location==="/signup"? ({
      backgroundColor: "#e6e6e6",
      margin:"0",
      width:"100%",
      height:"100vh",
      padding:"2rem 8rem"
    }):({
      backgroundColor: "#fff"
    })
  }>
      <Outlet></Outlet>
    </div>
  );
};

export default Root;
