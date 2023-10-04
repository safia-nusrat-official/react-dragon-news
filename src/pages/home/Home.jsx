import React from "react";
import Header from "../components/Header";
import { Navbar } from "../components/Navbar";
import { BreakingNews } from "./BreakingNews";
import { LeftSideBar } from "../components/LeftSideBar";
import { Feed } from "../components/Feed";
import { RightSideBar } from "../components/RightSideBar";

export const Home = () => {
  return (
    <div>
      <Header></Header>
      <BreakingNews></BreakingNews>
      <Navbar></Navbar>
      <div className="grid grid-cols-4 gap-4">
        <LeftSideBar></LeftSideBar>
        <Feed></Feed>
        <RightSideBar></RightSideBar>
      </div>
    </div>
  );
};
