import { useEffect, useState } from "react";

import discthree from "./img/discthree.svg";
import discfour from "./img/discfour.svg";
import discfive from "./img/discfive.svg";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from "./MainPage/MainPage";
import Server from "./ServerPage/Server";
function disableScrolling() {
  var x = window.scrollX;
  var y = window.scrollY;
  window.onscroll = function () {
    window.scrollTo(x, y);
  };
}

function enableScrolling() {
  window.onscroll = function () {};
}

function App() {
  const [open, setOpen] = useState(false);
  const [data, setData] = useState([
    {
      image: discthree,
      title: "Create an invite-only place where you belong",
      description:
        "Discord servers are organized into topic-based channels where you can collaborate, share, and just talk about your day without clogging up a group chat.",
    },
    {
      image: discfour,
      title: "Where hanging out is easy",
      description:
        "Grab a seat in a voice channel when you are free. Friends in your server can see you are around and instantly pop in to talk without having to call.",
    },
    {
      image: discfive,
      title: "From few to a fandom",
      description:
        "Get any community running with moderation tools and custom member access. Give members special powers, set up private channels, and more.",
    },
  ]);

  useEffect(() => {
    if (open) {
      disableScrolling();
      return;
    } else {
      enableScrolling();
    }
  }, [open]);

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <MainPage
              open={open}
              setOpen={setOpen}
              data={data}
              setData={setData}
            />
          }
        ></Route>
        <Route
          path="/servers"
          element={<Server open={open} setOpen={setOpen} />}
        ></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
