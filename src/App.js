import { useEffect, useState } from "react";
import ExplainSection from "./ExplainSection";
import Hero from "./Hero";
import Navbar from "./Navbar";
import discthree from "./img/discthree.svg";
import discfour from "./img/discfour.svg";
import discfive from "./img/discfive.svg";
import Trustable from "./Trustable";
import Footer from "./Footer";
import Drawer from "./Drawer";

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
    }
    else{
      enableScrolling();
    }
  }, [open]);

  return (
    <div className={`relative `}>
      {" "}
      {open ? <Drawer setOpen={setOpen} /> : null}
      <div className={`${open && "opacity-70"}`}>
        <div className={` min-h-[75vh] sm:min-h-[85vh] md:min-h-[75vh] bg-[#484cec] flex flex-col ${open && "pointer-events-none"}  `}>
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
}

export default App;
