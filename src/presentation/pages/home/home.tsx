import { AboutUs, Hero, NavBar } from "../../components";
import { gifs } from "../../../utils/image-exporter";

export function HomePage() {
  return (
    <>
      <div className="hidden lg:block">
        <NavBar />
        <Hero />
        <img
          src={gifs.scroll_bottom}
          alt="scroll bottom"
          className="w-[3em] mx-auto -mt-[3rem] "
        />
        <br />
        <AboutUs />
      </div>
      <div>
        <center className="text-white">
          <h1 className="text-4xl mt-[45vh]">Não disponivel ainda para este tamanho de tela</h1>
        </center>
      </div>
    </>
  );
}
