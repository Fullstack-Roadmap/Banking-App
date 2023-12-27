import React from "react";
import Frame from "./assets/Frame.png";

const Review = ({ review, image, name, job }) => {
  return (
    <>
      <div className="flex flex-col text-white bg-gradient-to-bl from-my-dark-green to-green-900/60 via-green-800/10 rounded-3xl py-10 px-5 p-1 gap-5 max-h-[20rem] max-w-[25rem]">
        <span className="bg-green-200/30 h-8 w-8 rounded-full grid place-content-center p-2">
          <img src={Frame} alt="quotes" />
        </span>
        <p className="font-semibold">"{review}"</p>
        <div className="flex gap-2">
          <span>
            <img src={image} alt="customer" />
          </span>
          <div>
            <h2 className="font-bold">{name}</h2>
            <h3 className="text-sm">{job}</h3>
          </div>
        </div>
      </div>
    </>
  );
};

export default Review;
