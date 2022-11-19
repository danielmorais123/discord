import React from "react";
import { motion } from "framer-motion";
const ExplainSection = ({ image, title, description, bgColor }) => {


  
  return (
    <motion.div
      initial={{ x: -200, opacity: 0 }}
      whileInView={{ x: 0, opacity: 1 }}
      transition={{ duration: 2.5 }}
      viewport={{ once: true }}
      className={`min-h-[50vh] ${
        bgColor === "gray" ? "bg-gray-100" : "bg-white"
      } flex justify-evenly flex-col ${
        bgColor === "gray" ? "md:flex-row-reverse" : "md:flex-row"
      }   items-center p-4`}
    >
      <img
        src={image}
        className="object-contain w-full md:w-[70%] max-w-[680px]"
      />
      <div className="mt-3 md:max-w-[380px] max-w-none w-[90%]">
        <p
          style={{ lineHeight: "120%" }}
          className="text-[46px] tracking-wider font-black md:text-3xl xl:text-[50px]  "
          id="title"
        >
          {title}
        </p>
        <p className="mt-3 text-sm tracking-wider text-[#23272a] md:text-sm">
          {description}
        </p>
      </div>
    </motion.div>
  );
};

export default ExplainSection;
