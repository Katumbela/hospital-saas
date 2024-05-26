import { useState, useEffect } from "react";
import { FaUserCircle } from "react-icons/fa";
import { AnimatePresence, motion } from "framer-motion";
import { FaCaretDown } from "react-icons/fa6";
import { BsBell, BsCaretDown } from "react-icons/bs";

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
          <div key="default-navbar" className="relative  py-3 bg-anc">
            <NavBarContent />
          </div>
        )}
      </AnimatePresence>
    </>
  );
}

function NavBarContent() {
  return (
    <div className="flex justify-between container">
      <div className="logo flex gap-5">
        <h1 className="font-bold my-auto text-white text-3xl georgia sans-serif">
          ATVA CARE
        </h1>
        <div className="l w-[2px] h-[27px] my-auto bg-white"></div>
        <h2 className="text-white text-xl my-auto font-semibold">
          Your Trusted HealthCare Partner
        </h2>
      </div>

      <div className="flex gap-4">
        <button className="bg-white flex gap-3 hover:bg-white/90 transition-all px-4 py-2 text-sm rounded-md font-medium my-auto">
          Katombela Demo <FaCaretDown className="my-auto " />
        </button>
        <button className="ms-[2rem] cursor-pointer border border-transparent hover:border-white transition-all  py-[.4rem] rounded-full px-[.4rem] bg-white/40 my-auto">
          <BsBell className="my-auto  text-2xl text-white" />
        </button>
        <div className="flex cursor-pointer border border-transparent hover:border-white transition-all p-1.5 gap-1 rounded-full bg-white/40">
          <FaUserCircle className="my-auto text-2xl text-white" />
          <span className="my-auto text-sm text-white font-semibold">
            Dr. João Katombela
          </span>
          <BsCaretDown className="mt-1.5 text-white me-1" />
        </div>
      </div>
    </div>
  );
}
