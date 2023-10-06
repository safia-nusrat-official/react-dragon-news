import React from "react";
import { BsGoogle } from "react-icons/bs";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiOutlineInstagram,
} from "react-icons/ai";
import { BiLogoFacebook } from "react-icons/bi";
import qZone2 from "../../assets/qZone2.png"
import qZone1 from "../../assets/qZone1.png"
import qZone3 from "../../assets/qZone3.png"
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";

export const RightSideBar = () => {
  const {LogInViaGoogle} = useContext(AuthContext)
  const handleLogInWithGoogle = () =>{
    LogInViaGoogle()
    .then((result)=>console.log(result.user))
    .catch(error=>console.error(error))
  }
  return (
    <div>
      <div className="flex flex-col mb-6">
        <span
          className="font-semibold text-gray-800 text-xl
    "
        >
          Login With
        </span>

        <button  onClick={handleLogInWithGoogle}
         className="border-blue-500 border-2 items-center flex justify-center py-2 px-4 rounded-md text-blue-500 bg-white font-normal mt-4 hover:bg-slate-100">
          <BsGoogle className="mr-2"></BsGoogle>
          Login with Google
        </button>

        <button className="border-gray-800 border-2 items-center flex justify-center py-2 px-4 rounded-md text-gray-800 bg-white font-normal mt-4 hover:bg-slate-100">
          <AiFillGithub className="mr-2 text-xl"></AiFillGithub>
          Login with Github
        </button>
      </div>
      <div className="flex flex-col mb-6">
        <span className="font-semibold mb-4 text-gray-800 text-xl">
          Find us on
        </span>
        <div className="flex flex-col font-medium text-gray-500 text-xl">
          <div className="flex p-4 border-gray-300 border-2  rounded-t-md items-center cursor-pointer hover:bg-gray-100">
            <BiLogoFacebook className="bg-gray-200 text-blue-800 rounded-full mr-2 w-10 p-2 h-10"></BiLogoFacebook>
            <span>Facebook</span>
          </div>
          <div className="flex p-4 border-gray-300 border-x-2  items-center cursor-pointer hover:bg-gray-100">
            <AiOutlineTwitter className="bg-gray-200 text-blue-500 rounded-full mr-2 w-10 p-2 h-10"></AiOutlineTwitter>
            <span>Twitter</span>
          </div>
          <div className="flex p-4 border-gray-300 border-2  rounded-b-md items-center cursor-pointer hover:bg-gray-100">
            <AiOutlineInstagram className="bg-gray-200 text-pink-900 rounded-full mr-2 w-10 p-2 h-10"></AiOutlineInstagram>
            <span>Instagram</span>
          </div>
        </div>
      </div>
      <div className="flex flex-col bg-gray-100 rounded-md p-4">
      <span
          className="font-semibold text-gray-800 mb-4 text-xl
    "
        >
          Q-Zone
        </span>
        <div className="flex flex-col">
          <img src={qZone1} alt="" />
          <img src={qZone2} alt="" />
          <img src={qZone3} alt="" />
        </div>
      </div>
    </div>
  );
};
