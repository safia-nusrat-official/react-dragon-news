import React from "react";
import { BsBookmark, BsShare } from "react-icons/bs";
import { AiFillEye } from "react-icons/ai";
import { Link } from "react-router-dom";

const NewsCard = ({ cardData }) => {
  const { _id, image_url, title, details, rating, total_view } = cardData;
  return (
    <div className="border-2 border-gray-300 mb-6 rounded-md">
      <div className="flex p-4 bg-gray-100 justify-between">
        <div className="author-info flex">
          <div className="w-12 author-img mr-2">
            <img
              src={cardData?.author?.img}
              alt=""
              className="w-full rounded-full aspect-square"
            />
          </div>
          <div className="flex flex-col">
            <span className="font-semibold">{cardData?.author?.name}</span>
            <span className="text-gray-500">
              {cardData?.author?.published_date?.slice(0, 11)}
            </span>
          </div>
        </div>
        <div className="card-actions flex items-center gap-2 text-xl text-gray-500 font-semibold">
          <BsBookmark></BsBookmark>
          <BsShare></BsShare>
        </div>
      </div>
      <div className="p-4  card-body ">
        <span className="font-bold text-xl">{title}</span>
        <img src={image_url} alt="" className="mt-2" />
        <div className="details text-gray-500 mt-6">
          {details.length > 250 ? (
            <>
              <p>{details.slice(0, 250) + "..."}</p>
              <Link to={`/details/${_id}`}>
                <span className="text-orange-500 font-semibold">Read more</span>
              </Link>
            </>
          ) : (
            <p>{details}</p>
          )}
        </div>
      </div>
      <hr className="my-2" />
      <div className="card-end flex justify-between font-medium text-gray-500 p-4">
        <div className="flex items-center">
          <div className="rating">
            <input
              type="radio"
              name="rating-2"
              readOnly
              className="mask mask-star-2 bg-orange-400"
            />
            <input
              type="radio"
              name="rating-2"
              readOnly
              className="mask mask-star-2 bg-orange-400"
              checked
            />
            <input
              type="radio"
              name="rating-2"
              readOnly
              className="mask mask-star-2 bg-orange-400"
            />
            <input
              type="radio"
              name="rating-2"
              readOnly
              className="mask mask-star-2 bg-orange-400"
            />
            <input
              type="radio"
              name="rating-2"
              readOnly
              className="mask mask-star-2 bg-orange-400"
            />
          </div>
          <span className="ml-2">{rating.number}</span>
        </div>
        <div className="flex items-center">
          <AiFillEye className="text-xl"></AiFillEye>
          <span className="ml-2">{total_view}</span>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
