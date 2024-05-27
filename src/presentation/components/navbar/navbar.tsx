import { useState, useEffect } from "react";
import { FaAngleDown, FaUserCircle } from "react-icons/fa";
import { AnimatePresence, motion } from "framer-motion"; 
import { BsBell } from "react-icons/bs";

export type NavBarContentProps = {
  activeLink: string;
  onLinkClick: (link: string) => void;
};

export function NavBar() {
  const [isScrolled, setIsScrolled] = useState(false);
  //const [activeLink, setActiveLink] = useState("");

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
  /*
  const handleClick = (link: string) => {
    setActiveLink(link);
  };
*/
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
            } fixed top-0 bg-anc z-50 left-0 right-0 py-3  `}
          >
            <NavBarContent />
          </motion.div>
        ) : (
          <div key="default-navbar" className="relative py-3 bg-anc">
            <NavBarContent />
          </div>
        )}
      </AnimatePresence>
    </>
  );
}

function NavBarContent() {
  return (
    <div className="flex justify-between containerr px-[2.5rem]">
      <div className="flex gap-5 logo">
        <h1 className="my-auto text-3xl font-bold text-white georgia sans-serif">
          TATVA CARE
        </h1>
        <div className="l w-[2px] h-[27px] my-auto bg-white"></div>
        <h2 className="my-auto font-semibold text-white text-md">
          Your Trusted HealthCare Partner
        </h2>
      </div>

      <div className="flex gap-4">
        <button className="flex gap-3 px-4 py-2 my-auto text-sm font-medium transition-all bg-white rounded-md hover:bg-white/90">
          Katombela Demo <FaAngleDown className="mt-[5px] " />
        </button>
        <button className="ms-[2rem] cursor-pointer border border-transparent hover:border-white transition-all  py-[.4rem] rounded-full px-[.4rem] bg-white/40 my-auto">
          <BsBell className="my-auto text-2xl text-white" />
        </button>
        <div className="flex cursor-pointer border border-transparent hover:border-white transition-all p-1.5 gap-1 rounded-full bg-white/40">
          <FaUserCircle className="my-auto text-2xl text-white" />
          <span className="my-auto text-sm font-semibold text-white">
            Dr. João Katombela
          </span>
          <FaAngleDown className="mt-[7px] text-white me-1" />
        </div>
      </div>
    </div>
  );
}
