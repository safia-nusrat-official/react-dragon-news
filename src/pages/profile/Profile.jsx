import React, { useContext } from "react";
import { Navbar } from "../components/Navbar";
import { AuthContext } from "../../providers/AuthProvider";

export const Profile = () => {
  const { user } = useContext(AuthContext);
  return (
    <>
      <Navbar></Navbar>
      <div className="p-8">
        <div className="flex items-center">
        <div className="prfile-img border-1 border-primary w-28 mr-4">
          <img src={user?.photoURL} className="rounded-full w-full aspect-square" alt="" />
        </div>
        <h2 className="text-2xl text-secondary font-bold">{user?.displayName}</h2>
        <p className="text-xl text-gray-600">{user?.email}</p>
        </div>
        <hr className="my-8"/>
        <div>
          <span className="font-medium text-xl text-gray-600">Profile Actions</span>
          <div className="grid grid-cols-2  mt-4 gap-4">
            <button className="px-6 py-2 text-xl bg-primary rounded-md text-white">
              Verify Email
            </button>
            <button className="px-6 py-2 text-xl bg-primary rounded-md text-white">
              Reset Password
            </button>
            <button className="px-6 py-2 text-xl bg-primary rounded-md text-white">
              Update Profile Info
            </button>
            <button className="px-6 py-2 text-xl bg-primary rounded-md text-white">
              Delete Account
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
