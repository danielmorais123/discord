import React from "react";
import Drawer from "../Drawer";
import ExplainSection from "./ExplainSection";
import Footer from "./Footer";
import Hero from "./Hero";
import Navbar from "./Navbar";
import Trustable from "./Trustable";

const MainPage = ({ open, setOpen, setData, data }) => {
  return (
    <div className={`relative  `}>
      {" "}
      {open ? <Drawer setOpen={setOpen} /> : null}
      <div className={`${open && "opacity-70"}`}>
        <div
          className={` min-h-[75vh] sm:min-h-[85vh] md:min-h-[75vh] bg-[#484cec] flex flex-col ${
            open && "pointer-events-none"
          }  `}
        >
          <Navbar open={open} setOpen={setOpen} />
          <Hero />
        </div>
        {/**<h2 id="title" className="text-2xl text-white"> IMAGINE UM LUGAR</h2> */}{" "}
        {data.map((doc, index) => (
          <ExplainSection
            key={index}
            bgColor={index === 1 ? "gray" : "white"}
            image={doc.image}
            title={doc.title}
            description={doc.description}
          />
        ))}
        <Trustable />
        <Footer />
      </div>
    </div>
  );
};

export default MainPage;
