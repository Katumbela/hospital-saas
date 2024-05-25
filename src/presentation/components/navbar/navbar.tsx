import { useState, useEffect } from "react";
import { logos } from "../../../utils/image-exporter";
import { FaArrowRight } from "react-icons/fa";
import { HackerEffectText } from "@nekzus/react-hacker-effect";
import { AnimatePresence, motion } from "framer-motion";
import { NavbarDatas } from "../../../domain/config/navbar-config";

export type NavBarContentProps ={
  activeLink: string
  onLinkClick: (link: string) => void
}

export function NavBar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
 
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleClick = (link: string) => {
    setActiveLink(link);
  };

  return (
    <>
      <AnimatePresence>
        {isScrolled ? (
          <motion.div
            key="scrolled-navbar"
            initial={{ opacity: 0, y: -80 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 0 }}
            transition={{ duration: 0.2, delay: 0.2 }}
            className={`${
              isScrolled && "shadow-md"
            } fixed top-0 bg-dark z-50 left-0 right-0 border-b-[2px] py-3 border-sky-600`}
          >
            <NavBarContent activeLink={activeLink} onLinkClick={handleClick} />
          </motion.div>
        ) : (
          <div
            key="default-navbar"
            className="relative border-b-[2px] py-3 border-sky-600"
          >
            <NavBarContent activeLink={activeLink} onLinkClick={handleClick} />
          </div>
        )}
      </AnimatePresence>
    </>
  );
}

function NavBarContent({ activeLink, onLinkClick }: NavBarContentProps) {
  return (
    <div className="flex justify-between container">
      <div className="logo">
        <img src={logos.logo} className="" alt="" />
      </div>
      <div className="flex my-auto gap-5">
        {NavbarDatas.map((nav, index) => (
          <a
            className={`nav-link ${activeLink === nav.link ? "active-nav" : ""}`}
            href={nav.link}
            key={index}
            onClick={() => onLinkClick(nav.link)}
          >
            <HackerEffectText initialValue={nav.text}>
              <span>{nav.text}</span>
            </HackerEffectText>
          </a>
        ))}
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
  );
}
