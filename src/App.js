import { useState } from "react";
import ExplainSection from "./ExplainSection";
import Hero from "./Hero";
import Navbar from "./Navbar";
import discthree from "./img/discthree.svg";
import discfour from "./img/discfour.svg";
import discfive from "./img/discfive.svg";
import Trustable from "./Trustable";
import Footer from "./Footer";
function App() {
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

  return (
    <div>
      <div className=" min-h-[75vh] sm:min-h-[85vh] md:min-h-[75vh] bg-[#484cec] flex flex-col">
        <Navbar />
        <Hero />

        {/**<h2 id="title" className="text-2xl text-white"> IMAGINE UM LUGAR</h2> */}
      </div>{" "}
      {data.map((doc, index) => (
        <ExplainSection
          key={index}
          bgColor={index === 1 && "gray"}
          image={doc.image}
          title={doc.title}
          description={doc.description}
        />
      ))}
      <Trustable />
        <Footer />
    </div>
  );
}

export default App;
