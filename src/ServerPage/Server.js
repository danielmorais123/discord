import React, { useState } from "react";
import Navbar from "../MainPage/Navbar";
import imageserverleft from "../img/imageserverleft.svg";
import imageserverright from "../img/imageserverright.svg";
import Drawer from "../Drawer";
import Card from "./Card";

const Server = ({ setOpen, open }) => {
  const [cards, setCards] = useState([
    {
      imageBig:
        "https://cdn.discordapp.com/discovery-splashes/679875946597056683/5f958cdac52bab058b9d518862977114.jpg?size=512",
      imageShort:
        "https://cdn.discordapp.com/icons/679875946597056683/a_62e262d5396f75bbbd55637a859bbe02.jpg?size=256",
      title: "VALORANT",
      description:
        "The official VALORANT Discord server, in collaboration with Riot Games. Find the latest news and talk about the game!",
      onlineMembers: "440002 Online",
      members: "40000000 Members",
    },
    {
      imageBig:
        "https://cdn.discordapp.com/discovery-splashes/541484311354933258/898d336ee926c1ed7ce70d820c81b32a.jpg?size=512",
      imageShort:
        "https://cdn.discordapp.com/icons/541484311354933258/a_60519b2b7c76b574e4390b13b44882fc.jpg?size=256",
      title: "Apex Legends",
      description:
        "Community run, developer supported Discord server dedicated to Apex Legends. Join for LFG, Game Discussion, News & more!",
      onlineMembers: "223002 Online",
      members: "2000000 Members",
    },
    {
      imageBig:
        "https://cdn.discordapp.com/discovery-splashes/498874578349850644/05679f625ac9e13edf9ba47b36c18c81.jpg?size=2048",
      imageShort:
        "https://cdn.discordapp.com/icons/498874578349850644/a_15af2ee752c12573fc5062d57f2a0dae.jpg",
      title: "Fortnite",
      description:
        "A server with active LFG, Tournaments, game discussion, events, advertising and more! Join us today!",
      onlineMembers: "440002 Online",
      members: "40000000 Members",
    },
  ]);

  return (
    <div className={`relative  `}>
      {" "}
      {open ? <Drawer setOpen={setOpen} /> : null}
      <div
        className={`${
          open && "opacity-70 pointer-events-none"
        } min-h-screen relative overflow-x-hidden`}
      >
        <div className="flex flex-col items-center h-[400px]">
          <Navbar setOpen={setOpen} />{" "}
          <svg
            className="absolute top-0 z-0"
            xmlns="http://www.w3.org/2000/svg"
            width="5000"
            height="400"
            viewBox="0 0 5000 400"
            fill="none"
          >
            <g clip-path="url(#clip0_2024_67002)">
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M3357.69 -73H1679.22V0H-157V400H1679.22H1679.26H3340.29H3357.69H5154.29V0H3357.69V-73Z"
                fill="url(#paint0_linear_2024_67002)"
              />
              <path
                d="M2183.16 -72C2016.01 59.4038 1614.93 469 1614.93 469L1817.02 -72H2183.16Z"
                fill="url(#paint1_linear_2024_67002)"
              />
              <path
                d="M2739.38 -72C2464.15 109.123 2047.23 400 2047.23 400H1908.05L2490.19 -72H2739.38Z"
                fill="url(#paint2_linear_2024_67002)"
              />
              <path
                d="M2921.98 31C2745.01 122.55 2530.39 239.52 2530.39 239.52C2587.47 188.493 2761.9 63.7367 2830.16 31H2921.98Z"
                fill="url(#paint3_linear_2024_67002)"
              />
              <path
                d="M2428.15 400.108C2489.74 338.481 2613.76 335.667 2679.19 352.27C2731.86 295.238 2838.79 278.167 2904.89 315.875C2976.33 356.678 2991.35 400.108 2991.35 400.108H2428.15Z"
                fill="#7269FF"
              />
              <path
                d="M2314.55 342.045C2288.73 292.987 2222.36 299.46 2178.8 329.476C2100.12 307.996 1965.4 338.856 1970.94 400.109H2526.16C2503.35 342.514 2383.37 314.655 2314.55 342.045Z"
                fill="#7269FF"
              />
              <path
                d="M2628.5 400.108C2612.82 375.157 2565.5 363.901 2530.39 370.655C2513.21 337.824 2460.26 319.627 2421.48 356.022C2386.47 352.926 2340.09 364.464 2335.68 400.108H2628.5Z"
                fill="#7A73FF"
              />
              <path
                d="M2670.27 385.381H2492.93C2516.21 374.688 2556.96 372.531 2576.67 379.003C2603.62 365.589 2645.49 365.214 2670.27 385.381Z"
                fill="#8088FF"
              />
              <path
                d="M2243.29 370.561H2335.39C2314.65 361.65 2271.83 362.307 2243.29 370.561Z"
                fill="#8088FF"
              />
              <path
                d="M2669.24 112.326C2728.67 64.7688 2764.72 41.2246 2764.72 41.2246C2719.38 49.5729 2692.52 75.9311 2669.24 112.326Z"
                fill="url(#paint4_linear_2024_67002)"
              />
              <path
                d="M2320.75 -73C2271.74 -36.2299 2214 8.23199 2148.75 60.3856C2180.86 10.3894 2214.66 -34.5414 2253.06 -73H2320.75Z"
                fill="url(#paint5_linear_2024_67002)"
              />
              <path
                d="M2753.83 77.4314L2758.15 75.4616C2758.24 75.4616 2758.24 75.3678 2758.15 75.274L2753.83 73.3979H2753.74L2751.77 68.9893H2751.58L2749.7 73.3979C2749.67 73.3979 2749.65 73.4078 2749.63 73.4254C2749.62 73.443 2749.61 73.4668 2749.61 73.4917L2745.29 75.3678C2745.19 75.4616 2745.19 75.5554 2745.29 75.5554L2749.61 77.5252H2749.7L2751.58 81.9339H2751.77L2753.74 77.5252L2753.83 77.4314Z"
                fill="#5047FF"
              />
              <path
                d="M2658.45 322.535L2662.86 320.659C2662.95 320.565 2662.95 320.471 2662.86 320.471L2658.45 318.501L2656.47 314.187C2656.47 314.093 2656.38 314.093 2656.29 314.187L2654.41 318.501H2654.31L2650 320.471C2649.9 320.471 2649.9 320.565 2650 320.659L2654.31 322.535H2654.41L2656.29 326.85C2656.38 326.944 2656.47 326.944 2656.47 326.85L2658.45 322.535V322.535Z"
                fill="#8088FF"
              />
              <path
                d="M2217.1 56.3262H2216.82L2208.56 68.0513V68.3327L2216.82 80.0579H2217.1C2219.92 76.0245 2222.45 72.3662 2225.36 68.3327V68.0513C2222.45 64.0179 2219.92 60.3596 2217.1 56.3262Z"
                fill="#584FFF"
              />
              <path
                d="M2241.04 84.3731L2243.76 83.1537C2243.86 83.1537 2243.86 83.0599 2243.76 83.0599L2241.04 81.7466L2239.73 79.0264C2239.73 78.9326 2239.73 78.9326 2239.63 79.0264L2238.41 81.7466L2235.6 83.0599L2238.41 84.2793L2239.63 87.0933H2239.73L2241.04 84.2793V84.3731Z"
                fill="#5047FF"
              />
            </g>
            <defs>
              <linearGradient
                id="paint0_linear_2024_67002"
                x1="2510"
                y1="-41.5308"
                x2="2510"
                y2="470.499"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#4E1BF5" />
                <stop offset="0.58" stop-color="#5E4EEE" />
                <stop offset="0.92" stop-color="#6668EB" />
              </linearGradient>
              <linearGradient
                id="paint1_linear_2024_67002"
                x1="1892.58"
                y1="99.2659"
                x2="1929.2"
                y2="-55.7263"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#5521FF" />
                <stop offset="1" stop-color="#4B1AEB" />
              </linearGradient>
              <linearGradient
                id="paint2_linear_2024_67002"
                x1="2593.38"
                y1="-55.7229"
                x2="2073.39"
                y2="339.849"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#5625F7" />
                <stop offset="0.3" stop-color="#5930F9" />
                <stop offset="0.81" stop-color="#624DFD" />
                <stop offset="1" stop-color="#6659FF" />
              </linearGradient>
              <linearGradient
                id="paint3_linear_2024_67002"
                x1="2843.6"
                y1="49.7696"
                x2="2556.49"
                y2="230.488"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#5323F5" />
                <stop offset="1" stop-color="#5946F5" />
              </linearGradient>
              <linearGradient
                id="paint4_linear_2024_67002"
                x1="2749.82"
                y1="57.3092"
                x2="2669.72"
                y2="98.4488"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#5323F5" />
                <stop offset="1" stop-color="#5330F5" />
              </linearGradient>
              <linearGradient
                id="paint5_linear_2024_67002"
                x1="71262.8"
                y1="1875.76"
                x2="49579.3"
                y2="19460"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#5323F5" />
                <stop offset="1" stop-color="#5330F5" />
              </linearGradient>
              <clipPath id="clip0_2024_67002">
                <rect width="5000" height="400" fill="white" />
              </clipPath>
            </defs>
          </svg>{" "}
          <img
            src={imageserverleft}
            className="h-[400px] z-[9997] hidden lg:block absolute left-0 object-contain"
          />
          <img
            src={imageserverright}
            className="h-[400px] hidden z-[9997] lg:block absolute right-0 object-contain"
          />
          <div className="z-[999] relative flex flex-col flex-1 justify-center  items-start lg:items-center md:mb-4  mx-auto w-[90%]">
            <h1
              id="title"
              className="text-[55px]  text-left lg:text-[70px] leading-[95%] 2xl:max-w-none xl:max-w-xl max-w-full lg:max-w-lg text-white tracking-wide font-black lg:text-center "
            >
              FIND YOUR COMMUNITY ON DISCORD
            </h1>
            <p className="text-white text-sm lg:max-w-xs 2xl:max-w-none  max-w-full text-left lg:text-center z-10 ">
              From gaming, to music, to learning, there's a place for you.
            </p>
          </div>
        </div>
        <div className="flex w-[90%] lg:max-w-[980px] mx-auto mt-12 flex-col">
          <div className="w-full flex items-center justify-between">
            <input
              type="text"
              placeholder="Explore Comunities"
              className="w-full mr-3 py-2 pl-5 lg:py-4 rounded-xl outline-none bg-gray-200 focus:ring-[#484cec] focus:border-[#484cec]    border-2 border-gray-300 "
            />
            <button className="bg-[#5b63f4] lg:p-4 p-2 rounded-lg">
              <svg
                class=""
                aria-label="Search"
                aria-hidden="false"
                width="20"
                height="20"
                viewBox="0 0 24 24"
              >
                <path
                  fill="white"
                  d="M21.707 20.293L16.314 14.9C17.403 13.504 18 11.799 18 10C18 7.863 17.167 5.854 15.656 4.344C14.146 2.832 12.137 2 10 2C7.863 2 5.854 2.832 4.344 4.344C2.833 5.854 2 7.863 2 10C2 12.137 2.833 14.146 4.344 15.656C5.854 17.168 7.863 18 10 18C11.799 18 13.504 17.404 14.9 16.314L20.293 21.706L21.707 20.293ZM10 16C8.397 16 6.891 15.376 5.758 14.243C4.624 13.11 4 11.603 4 10C4 8.398 4.624 6.891 5.758 5.758C6.891 4.624 8.397 4 10 4C11.603 4 13.109 4.624 14.242 5.758C15.376 6.891 16 8.398 16 10C16 11.603 15.376 13.11 14.242 14.243C13.109 15.376 11.603 16 10 16Z"
                ></path>
              </svg>
            </button>
          </div>
          <div className="mt-8 flex mb-3">
            <ul className="hidden lg:flex flex-col min-w-[260px] space-y-2">
              <li className="cursor-pointer text-sm bg-gray-200 p-3 rounded-md font-bold tracking-wider flex ">
                <svg
                  aria-hidden="false"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="M12 10.9C11.39 10.9 10.9 11.39 10.9 12C10.9 12.61 11.39 13.1 12 13.1C12.61 13.1 13.1 12.61 13.1 12C13.1 11.39 12.61 10.9 12 10.9ZM12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM14.19 14.19L6 18L9.81 9.81L18 6L14.19 14.19Z"
                  ></path>
                </svg>
                <span className="ml-4">All</span>
              </li>
              <li className="cursor-pointer text-gray-900 text-sm p-3 rounded-md  tracking-wider flex hover:bg-gray-200">
                <svg
                  aria-hidden="false"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                >
                  <g fill="none" fill-rule="evenodd">
                    <path
                      fill="currentColor"
                      d="M5.79335761,5 L18.2066424,5 C19.7805584,5 21.0868816,6.21634264 21.1990185,7.78625885 L21.8575059,17.0050826 C21.9307825,18.0309548 21.1585512,18.9219909 20.132679,18.9952675 C20.088523,18.9984215 20.0442685,19 20,19 C18.8245863,19 17.8000084,18.2000338 17.5149287,17.059715 L17,15 L7,15 L6.48507125,17.059715 C6.19999155,18.2000338 5.1754137,19 4,19 C2.97151413,19 2.13776159,18.1662475 2.13776159,17.1377616 C2.13776159,17.0934931 2.1393401,17.0492386 2.1424941,17.0050826 L2.80098151,7.78625885 C2.91311838,6.21634264 4.21944161,5 5.79335761,5 Z M14.5,10 C15.3284271,10 16,9.32842712 16,8.5 C16,7.67157288 15.3284271,7 14.5,7 C13.6715729,7 13,7.67157288 13,8.5 C13,9.32842712 13.6715729,10 14.5,10 Z M18.5,13 C19.3284271,13 20,12.3284271 20,11.5 C20,10.6715729 19.3284271,10 18.5,10 C17.6715729,10 17,10.6715729 17,11.5 C17,12.3284271 17.6715729,13 18.5,13 Z M6,9 L4,9 L4,11 L6,11 L6,13 L8,13 L8,11 L10,11 L10,9 L8,9 L8,7 L6,7 L6,9 Z"
                    ></path>
                    <rect width="24" height="24"></rect>
                  </g>
                </svg>

                <span className="ml-4">Gaming</span>
              </li>
              <li className="cursor-pointer text-gray-900 text-sm p-3 rounded-md  tracking-wider flex hover:bg-gray-200">
                <svg
                  aria-hidden="false"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M16.781 2.27293L14.081 5.7126H9.919L7.219 2.27293L8.781 1L12 5.10008L15.219 1L16.781 2.27293ZM4 6.73175H20C21.1 6.73175 22 7.649 22 8.77007V18.9617C22 20.0828 21.1 21 20 21H4C2.9 21 2 20.0828 2 18.9617V8.77007C2 7.649 2.9 6.73175 4 6.73175ZM4 18.9617H16V8.77007H4V18.9617ZM18 16.4138C18 16.9764 18.448 17.4329 19 17.4329C19.552 17.4329 20 16.9764 20 16.4138C20 15.8512 19.552 15.3946 19 15.3946C18.448 15.3946 18 15.8512 18 16.4138ZM18 11.318C18 11.8806 18.448 12.3371 19 12.3371C19.552 12.3371 20 11.8806 20 11.318C20 10.7554 19.552 10.2988 19 10.2988C18.448 10.2988 18 10.7554 18 11.318Z"
                  ></path>
                </svg>
                <span className="ml-4">Entertainment</span>
              </li>
              <li className="cursor-pointer text-gray-900 text-sm p-3 rounded-md  tracking-wider flex hover:bg-gray-200">
                <svg
                  aria-hidden="false"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M22.447 8.11002L12.447 3.11002C12.166 2.96902 11.834 2.96902 11.552 3.11002L1.552 8.11002C1.35 8.21002 1.197 8.38402 1.107 8.57302C1.046 8.69502 1 8.90202 1 9.00502V14.77C1 15.322 1.448 15.77 2 15.77C2.552 15.77 3 15.322 3 14.77V10.172L12.015 13.927L22.372 9.93302C22.737 9.78602 22.983 9.44002 22.999 9.04602C23.016 8.65202 22.799 8.28702 22.447 8.11002ZM12 16.005C11.869 16.005 11.738 15.979 11.615 15.928L5 13.172V16.185C5 16.564 5.214 16.91 5.553 17.08C5.7173 17.1621 5.88209 17.2461 6.04836 17.3308C7.61773 18.1306 9.31996 18.998 12 18.998C14.6812 18.998 16.3872 18.1284 17.956 17.3287C18.1208 17.2447 18.2842 17.1614 18.447 17.08C18.786 16.911 19 16.564 19 16.186V13.385L12.359 15.939C12.243 15.982 12.122 16.005 12 16.005ZM1 18.005C1 17.453 1.448 17.005 2 17.005C2.552 17.005 3 17.453 3 18.005V20.005C3 20.557 2.552 21.005 2 21.005C1.448 21.005 1 20.557 1 20.005V18.005Z"
                  ></path>
                </svg>
                <span className="ml-4">Education</span>
              </li>
              <li className="cursor-pointer text-gray-900 text-sm p-3 rounded-md  tracking-wider flex hover:bg-gray-200">
                <svg
                  aria-hidden="false"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M18.6683 11.9964C19.5992 13.2208 20.3732 14.4331 20.9422 15.5701C22.5858 18.8593 22.0118 20.4688 21.2418 21.2398C20.895 21.5846 20.2596 21.9978 19.1951 21.9978C17.3645 21.9978 14.7478 20.7553 12.0004 18.6683C9.25198 20.7553 6.63527 21.9978 4.80569 21.9978C3.74111 21.9978 3.10478 21.5846 2.75896 21.2398C1.98792 20.4677 1.41392 18.8593 3.05853 15.5701C3.62751 14.4331 4.40257 13.2218 5.33245 11.9964C2.51569 8.28291 1.00176 4.51719 2.75896 2.75898C3.10578 2.41316 3.74111 2 4.80569 2C6.63628 2 9.25298 3.24251 12.0004 5.32944C14.7488 3.24251 17.3655 2 19.1951 2C20.2596 2 20.895 2.41216 21.2418 2.75898C22.999 4.51618 21.4851 8.28191 18.6683 11.9964ZM19.8203 4.18042C19.6806 4.03969 19.4032 4.01053 19.1951 4.01053C18.0481 4.01053 15.9933 4.9203 13.6209 6.64835C15.0262 7.86472 16.2346 9.08512 17.3655 10.395C19.752 7.13188 20.3541 4.71422 19.8203 4.18042ZM14.1325 14.1316C14.8654 13.3987 15.5108 12.689 16.0928 12.0024C15.4876 11.2856 14.8342 10.5689 14.1325 9.86621C13.4128 9.14744 12.701 8.51312 12.0004 7.92202C11.2997 8.51312 10.588 9.14744 9.86821 9.86621C9.16653 10.5689 8.51311 11.2856 7.90794 12.0024C8.48999 12.689 9.13637 13.3987 9.86821 14.1316C10.588 14.8513 11.2997 15.4856 12.0004 16.0747C12.701 15.4856 13.4128 14.8513 14.1325 14.1316ZM4.80569 4.01053C4.5986 4.01053 4.32115 4.03969 4.18142 4.18042C3.64661 4.71422 4.24977 7.13088 6.63628 10.394C7.83556 9.00469 9.05696 7.79435 10.3799 6.64735C8.00645 4.9203 5.95269 4.01053 4.80569 4.01053ZM4.18041 19.8183C4.32014 19.9581 4.5976 19.9872 4.80569 19.9872C5.95269 19.9872 8.00746 19.0785 10.3799 17.3514C8.98357 16.1421 7.7873 14.9348 6.6413 13.6078C5.92053 14.593 5.31133 15.56 4.85695 16.4688C3.79539 18.5909 3.9502 19.5881 4.18041 19.8183ZM19.1941 19.9872C19.4021 19.9872 19.6796 19.9581 19.8193 19.8183C20.0495 19.5881 20.2044 18.5919 19.1428 16.4688C18.6884 15.559 18.0792 14.592 17.3584 13.6078C16.2114 14.9358 15.0152 16.1431 13.6199 17.3514C15.9933 19.0785 18.0471 19.9872 19.1941 19.9872ZM14.0109 11.9984C14.0109 13.1088 13.1108 14.0089 12.0004 14.0089C10.89 14.0089 9.98984 13.1088 9.98984 11.9984C9.98984 10.888 10.89 9.98784 12.0004 9.98784C13.1108 9.98784 14.0109 10.888 14.0109 11.9984Z"
                  ></path>
                </svg>
                <span className="ml-4">Science & Tech</span>
              </li>
              <li className="cursor-pointer text-gray-900 text-sm p-3 rounded-md  tracking-wider flex hover:bg-gray-200 transition-all">
                <svg
                  aria-hidden="false"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="M19.396 3.29898C19.016 3.01598 18.524 2.93098 18.07 3.06498L8.07 6.06498C7.435 6.25498 7 6.83998 7 7.50298V15.054C6.835 15.03 6.671 15.003 6.5 15.003C4.566 15.003 3 16.571 3 18.503C3 20.434 4.566 22.003 6.5 22.003C8.434 22.003 10 20.434 10 18.503V8.61798L17 6.51798V13.054C16.835 13.03 16.671 13.003 16.5 13.003C14.566 13.003 13 14.571 13 16.503C13 18.434 14.566 20.003 16.5 20.003C18.434 20.003 20 18.434 20 16.503V4.50298C20 4.02698 19.775 3.58198 19.396 3.29898Z"
                  ></path>
                </svg>
                <span className="ml-4">Music</span>
              </li>
            </ul>
            <div className="flex flex-col space-y-2">
              {cards.map((card, index) => (
                <Card card={card} key={index} />
              ))}{" "}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Server;
