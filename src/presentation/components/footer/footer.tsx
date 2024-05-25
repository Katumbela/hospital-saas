// import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";

export function Footer() {
 // const { t } = useTranslation();
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

  const handleScrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer id="contacts" className="container md:px-[10%]">
      <div className="grid grid-cols-3">
        <div>
          <b className="text-white">Sobre</b>
          <ul className="footer-link">Quem somos</ul>
        </div>
      </div>
      {showScrollButton && (
        <button
          onClick={handleScrollTop}
          className="fixed flex items-center gap-2 px-2 py-4 text-center rounded-xl shadow-lg md:px-4 click bg-primary place-content-center bottom-4 right-4"
        >
          <FaArrowUp />
           
        </button>
      )}
    </footer>
  );
}
