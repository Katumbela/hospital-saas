import { useState, useEffect } from "react";
import { FaAngleDown, FaUserCircle } from "react-icons/fa";
import { AnimatePresence, motion } from "framer-motion";
import { BsBell } from "react-icons/bs";
import { FaArrowRightFromBracket, FaGear } from "react-icons/fa6";

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
  const [itemClicked, setitemClicked] = useState("");
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
        <div className="relative">
          <button
            onClick={() => setitemClicked(itemClicked === "demo" ? "" : "demo")}
            className="flex gap-3 px-4 py-2 my-auto text-sm font-medium transition-all bg-white rounded-md hover:bg-white/90"
          >
            Katombela Demo <FaAngleDown className="mt-[5px] " />
          </button>
          {itemClicked === "demo" && (
            <button className="absolute flex w-full gap-3 px-4 py-2 my-auto text-sm font-medium transition-all bg-purple-100 shadow-lg rounded-s hover:bg-purple-200">
              Update to <b className="text-purple-800">PRO</b>
            </button>
          )}
        </div>
        <div className="relative">
          <button
            onClick={() => setitemClicked(itemClicked === "bell" ? "" : "bell")}
            className={`ms-[2rem] click cursor-pointer border border-transparent hover:border-white transition-all  py-[.4rem] rounded-full px-[.4rem]  my-auto ${
              itemClicked === "bell"
                ? "bg-white text-purple-800"
                : "text-white bg-white/40"
            }`}
          >
            <BsBell className="my-auto text-2xl " />
          </button>
          {itemClicked === "bell" && (
            <div className="absolute  top-[2.7rem] bg-white z-50 w-[14rem] right-0 p-3 shadow-xl">
              <b>Notifications</b>
              <p className="p-1 mt-2 text-xs rounded-sm bg-slate-200">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ea,
                porro perferendis!
              </p>
              <p className="p-1 mt-2 text-xs rounded-sm bg-slate-200">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ea,
                porro perferendis!
              </p>
              <p className="p-1 mt-2 text-xs rounded-sm bg-slate-200">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ea,
                porro perferendis!
              </p>
            </div>
          )}
        </div>

        <div className="relative">
          <div
            onClick={() =>
              setitemClicked(itemClicked === "profile" ? "" : "profile")
            }
            className="flex click cursor-pointer border border-transparent hover:border-white transition-all p-1.5 gap-1 rounded-full bg-white/40"
          >
            <FaUserCircle className="my-auto text-2xl text-white" />
            <span className="my-auto text-sm font-semibold text-white">
              Dr. João Katombela
            </span>
            <FaAngleDown className="mt-[7px] text-white me-1" />
          </div>
          {itemClicked === "profile" && (
            <div className="absolute rounded-md bg-white top-[2.7rem] z-50 w-[14rem] right-0 p-3 shadow-xl">
              <p className="py-1.5 px-2 mt-2 flex gap-2 text-sm rounded-sm hover:bg-slate-300 transition-all cursor-pointer bg-slate-200">
                <FaUserCircle className="my-auto" /> View Profile
              </p>
              <p className="py-1.5 px-2 mt-2 flex gap-2 text-sm rounded-sm hover:bg-slate-300 transition-all cursor-pointer bg-slate-200">
                <FaGear className="my-auto" /> Settings
              </p>
              <p className="py-1.5 px-2 mt-2 flex gap-2 text-sm rounded-sm hover:bg-slate-300 transition-all cursor-pointer bg-slate-200">
              <FaArrowRightFromBracket className="my-auto" /> Logout
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
