import React from "react";
import firstItem from "../img/firstitem.jpg";

const Card = ({ card }) => {
  return (
    <div className=" w-full p-3 hover:bg-gray-100 flex rounded-xl cursor-pointer h-fit lg:ml-3 transition-all ">
      <img
        src={card.imageShort}
        className=" w-[40px] h-[40px] lg:hidden rounded-lg"
      />
      <img
        src={card.imageBig}
        className="min-w-[256px] h-[144px] object-contain rounded-2xl hidden lg:inline-flex"
      />
      <div className="ml-3">
        <div className="flex items-center">
          <img
            src={card.imageShort}
            className=" w-[40px] h-[40px] hidden lg:inline-flex rounded-lg"
          />
          <p className="font-bold lg:ml-3">{card.title}</p>
        </div>

        <p className="mt-1 text-sm text-gray-700 tracking-wide">
          {card.description}
        </p>
        <div className="mt-3 flex items-center">
          <span className="text-xs">{card.onlineMembers} - </span>
          <span className="text-xs"> {card.members} </span>
        </div>
        <div className="flex items-center bg-gray-200 w-fit py-1 px-2 mt-2">
          <svg
            class="icon-3BYlXK"
            aria-hidden="false"
            width="16"
            height="16"
            viewBox="0 0 16 16"
            className="bg-green-500 rounded-full"
          >
            <path
              d="M7.4,11.17,4,8.62,5,7.26l2,1.53L10.64,4l1.36,1Z"
              fill="white"
            ></path>
          </svg>
          <span className="uppercase text-xs  font-black ml-2">Verified</span>
        </div>
      </div>
    </div>
  );
};

export default Card;
