import { Link } from "react-router-dom";
import { logos } from "../../../utils/image-exporter";
import { FaArrowRight } from "react-icons/fa";
import { HackerEffectText } from "@nekzus/react-hacker-effect";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export function NavBar() {
  const [showScrollButton, setShowScrollButton] = useState(false);

 
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setShowScrollButton(true);
      } else {
        setShowScrollButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
 
  return (
    <>
      <motion.div className=" border-b-[2px] py-3 border-sky-600">
        <div className="flex justify-between container">
          <div className="logo">
            <img src={logos.logo} className="" alt="" />
          </div>
          <div className="flex my-auto gap-5">
            <Link className="nav-link" to={"/"}>
              <HackerEffectText initialValue=" Início">
                <span>Inicio</span>
              </HackerEffectText>
            </Link>
            <Link className="nav-link" to={"/"}>
              <HackerEffectText initialValue=" Sobre">
                <span>Inicio</span>
              </HackerEffectText>
            </Link>
            <Link className="nav-link" to={"/"}>
              <HackerEffectText initialValue=" Treinamentos">
                <span>Inicio</span>
              </HackerEffectText>
            </Link>
            <Link className="nav-link" to={"/"}>
              <HackerEffectText initialValue=" Equipa">
                <span>equipa</span>
              </HackerEffectText>
            </Link>
            <Link className="nav-link" to={"/"}>
              <HackerEffectText initialValue=" Testemunhos">
                <span>testemunhos</span>
              </HackerEffectText>
            </Link>
            <Link className="nav-link" to={"/"}>
              <HackerEffectText initialValue=" Contactos">
                <span>contactos </span>
              </HackerEffectText>
            </Link>
          </div>
          <div className="flex gap-4">
            <button className="bg-white flex gap-3 hover:bg-white/90 transition-all px-4 py-2 text-sm rounded-md font-medium my-auto">
              Consultar certificação <FaArrowRight className="my-auto " />
            </button>
            <button className="bg-primary flex gap-3 hover:bg-primary/90 transition-all px-4 py-2 text-sm rounded-md font-medium my-auto">
              Academia <FaArrowRight className="my-auto " />
            </button>
          </div>
        </div>
      </motion.div>
    </>
  );
}
