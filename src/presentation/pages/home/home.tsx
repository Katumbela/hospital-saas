import { AboutUs, Hero, NavBar } from "../../components";
import { gifs } from "../../../utils/image-exporter";

export function HomePage() {
  return (
    <>
      <NavBar />
      <Hero />
      <img
        src={gifs.scroll_bottom}
        alt="scroll bottom"
        className="w-[3em] mx-auto -mt-[3rem] "
      />
      <br />
      <AboutUs />
    </>
  );
}
