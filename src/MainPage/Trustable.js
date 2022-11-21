import React from "react";
import discsix from "../img/discsix.svg";
import discseven from "../img/discseven.svg";
import { motion } from "framer-motion";

const Trustable = () => {
  return (
    <motion.div
      initial={{ x: -100, opacity: 0 }}
      whileInView={{ x: 0, opacity: 1 }}
      transition={{ duration: 2.5 }}
      viewport={{ once: true }}
      className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-4"
    >
      <div className="flex flex-col max-w-[750px] text-center mt-5">
        <p
          id="title"
          className="   font-black tracking-wider text-[50px] w-full  uppercase"
        >
          RELIABLE TECH FOR STAYING CLOSE
        </p>
        <p>
          Low-latency voice and video feels like you’re in the same room. Wave
          hello over video, watch friends stream their games, or gather up and
          have a drawing session with screen share.
        </p>
      </div>
      <img src={discsix} className="w-[70%]" />
      <div className="flex flex-col items-center mb-5">
        <img src={discseven} />
        <p className="text-[26px] font-bold text-center tracking-wider">
        Ready to start your journey?
        </p>
        <button className=" flex items-center justify-center bg-[#484cec] mt-3 w-fit px-5 py-3 rounded-full hover:bg-[#484cec]/75 tracking-wide text-white transition-all hover:shadow-2xl">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            class="icon-2tQ9Jt"
            className="mr-2"
          >
            <g fill="currentColor">
              <path d="M17.707 10.708L16.293 9.29398L13 12.587V2.00098H11V12.587L7.70697 9.29398L6.29297 10.708L12 16.415L17.707 10.708Z"></path>
              <path d="M18 18.001V20.001H6V18.001H4V20.001C4 21.103 4.897 22.001 6 22.001H18C19.104 22.001 20 21.103 20 20.001V18.001H18Z"></path>
            </g>
          </svg>
          Download for Windows
        </button>
      </div>
    </motion.div>
  );
};

export default Trustable;
