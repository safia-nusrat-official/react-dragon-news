import React from "react";
import logo from '../../assets/logo.png'
import moment from 'moment';

const Header = () => {
  return (
    <div className="text-center font-normal text-xs md:text-lg lg:text-xl text-gray-500">
      <img src={logo} alt="" className="mx-auto mb-2 md:w-auto lg:w-auto w-60"/>
      <p className="my-2">Journalism Without Fear or Favour</p>
      <p className="font-medium"><span className="text-gray-800">{moment().format("dddd")}, </span>{moment().format("MMMM D YYYY")}</p>
    </div>
  );
};

export default Header;
