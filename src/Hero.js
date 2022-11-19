import React from "react";
import discone from "./img/discone.svg";
import disctwo from "./img/disctwo.svg";
const Hero = () => {
  return (
    <div className=" flex flex-col flex-grow items-center justify-start xl:justify-center relative mt-8 overflow-x-hidden">
      <div className="flex flex-col items-center text-left md:text-center w-[95%] md:max-w-3xl xl:max-w-2xl 2xl:max-w-3xl z-10 ml-3 p-3">
        <p
          id="title"
          className="text-white  text-4xl h-fit font-black tracking-wider sm:text-[70px] md:text-[80px] w-full  uppercase"
        >
          Imagine um lugar...
        </p>
        <p className="text-white text-md md:text-lg mt-7  md:mt-10">
          …onde você possa pertencer a um clube escolar, um grupo de gamers, ou
          uma comunidade artística mundial. Onde você e alguns amigos possam
          passar um tempo juntos. Um lugar que torna fácil conversar todos os
          dias e socializar com mais frequência.
        </p>
        <div className="flex md:flex-row flex-col   mt-5 md:mr-5 items-start w-full xl:justify-center xl:space-x-2 justify-evenly">
          <button className=" flex items-center bg-white px-6 py-3 rounded-full  tracking-wide hover:text-[#484cec] transition-all hover:shadow-2xl">
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
            Baixar para Windows
          </button>
          <button className="flex mt-5 md:mt-0  items-center bg-[#23272a] px-6 py-3 rounded-full hover:bg-[#23272a]/75 text-white tracking-wide hover:shadow-2xl">
            Abra o discord no seu navegador
          </button>
        </div>
      </div>{" "}
      <img
        src={disctwo}
        className=" object-contain hidden xl:block xl:absolute xl:left-[-14%] 2xl:left-[-10%] xl:right-[81%] xl:bottom-0"
      />
      <img
        src={discone}
        className="sm:absolute bottom-0 right-0 object-contain sm:left-[40%] left-[10%] md:left-[10%] text-center  mt-3 md:relative relative xl:absolute xl:right-0 xl:left-[70%] 2xl:left-[77%]"
      />
    </div>
  );
};

export default Hero;
