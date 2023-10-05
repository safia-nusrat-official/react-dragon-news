import React from "react";
import { useLoaderData, useParams } from "react-router-dom";
import Header from "./components/Header";
import { Navbar } from "./components/Navbar";
import { BsCalendar4 } from "react-icons/bs";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { RightSideBar } from "./components/RightSideBar"
import editor1 from "../../src/assets/editorsInsight1.png";
import editor3 from "../../src/assets/editorsInsight3.png";
import editor2 from "../../src/assets/editorsInsight2.png";
import moment from "moment";

export const CardDetails = () => {
  const { id } = useParams();
  const datas = useLoaderData();
  const cardData = datas.find((data) => data._id !== id);
  return (
    <>
      <Header></Header>
      <Navbar></Navbar>
      <div className="grid grid-cols-4 gap-6">
        <Article cardData={cardData}></Article>
        <RightSideBar></RightSideBar>
      </div>
    </>
  );
};

const Article = ({ cardData }) => {
  const { _id, image_url, title, details, rating, total_view } = cardData;
  return (
    <div className=" col-span-3">
      <div className="p-4 border-2 border-gray-300 mb-6 rounded-md card-body ">
        <img src={image_url} alt="" className="mb-2" />
        <span className="font-bold text-2xl">{title}</span>
        <div className="text-xl text-gray-500 mt-4">{details}</div>
        <button className="bg-primary text-white text-xl w-fit flex items-center px-6 py-4">
          <AiOutlineArrowLeft className="mr-2"></AiOutlineArrowLeft>
          All news in this category
        </button>
      </div>
      <div>
        <span className="font-semibold text-2xl">Editors Insight</span>
        <div className="slides mt-6 grid grid-cols-3 gap-4">
            <div className="slide">
                <img src={editor1} alt="" />
                <span className="my-4 text-lg font-semibold">21 The Most Stylish Wedding Guest Dresses For Spring</span>
                <span className="flex text-gray-500 items-center">
                    <BsCalendar4 className="mr-2"></BsCalendar4>
                    {moment().format("MMM d, yyyy")}
                </span>
            </div>
            <div className="slide">
                <img src={editor2} alt="" />
                <span className="my-4 text-lg font-semibold">21 The Most Stylish Wedding Guest Dresses For Spring</span>
                <span className="flex text-gray-500 items-center">
                    <BsCalendar4 className="mr-2"></BsCalendar4>
                    {moment().format("MMM d, yyyy")}
                </span>
            </div>
            <div className="slide">
                <img src={editor3} alt="" />
                <span className="my-4 text-lg font-semibold">21 The Most Stylish Wedding Guest Dresses For Spring</span>
                <span className="flex text-gray-500 items-center">
                    <BsCalendar4 className="mr-2"></BsCalendar4>
                    {moment().format("MMM d, yyyy")}
                </span>
            </div>
        </div>
      </div>
    </div>
  );
};
