import { useEffect, useState } from "react";
import ExplainSection from "./MainPage/ExplainSection";
import Hero from "./MainPage/Hero";
import Navbar from "./MainPage/Navbar";
import discthree from "./img/discthree.svg";
import discfour from "./img/discfour.svg";
import discfive from "./img/discfive.svg";
import Trustable from "./MainPage/Trustable";
import Footer from "./MainPage/Footer";
import Drawer from "./Drawer";
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
      title: "Crie um espaço controlado por convite onde você se sinta em casa",
      description:
        "Os servidores Discord são organizados em canais com assuntos paravocês colaborarem, compartilharem ou simplesmente falarem do dia sem entupir um chat geral.",
    },
    {
      image: discfour,
      title: "Aqui é fácil se encontrar",
      description:
        "Entre no canal de voz quando estiver à toa. Amigos no mesmo servidor podem te ver e entrar imediatamente, sem nem ter que fazer a chamada.",
    },
    {
      image: discfive,
      title: "Para poucos e para muitos",
      description:
        "Organize qualquer comunidade com ferramentas de moderação e acesso personalizado a membros. Dê poderes especiais aos membros, monte canais privados e muito mais.",
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
          path="/server"
          element={<Server open={open} setOpen={setOpen} />}
        ></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
