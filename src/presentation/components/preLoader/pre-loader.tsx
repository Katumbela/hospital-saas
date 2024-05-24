import { Typewriter } from "react-simple-typewriter";
import { bg, logos } from "../../../utils/image-exporter";

export function Preloader() {
  return (
    <div className="preloader-container relative h-screen grid items-center place-content-center">
      <div>
        {" "}
        <img src={logos.logo} className="mx-auto" alt="" />
        <img
          src={bg.bg_hero_fundo}
          className="mx-auto z-10 animate-pulse-slow absolute top-0 right-0 -z-10 "
          alt=""
        />
        <div className="z-10">
          <p className="text-primary hacker font-bold text-2xl">
            <Typewriter
              words={["Carregando", "HackyOff"]}
              loop={1}
              cursor
              cursorStyle="_"
              typeSpeed={50}
              deleteSpeed={50}
              delaySpeed={700}
            />
          </p>
        </div>
      </div>
      {/*
       
    
      <motion.img className="h-[10em] rounded-full" src={gif}/>
     
      <motion.img className="animate-bounce" src={logo}/>
  */}
    </div>
  );
}
