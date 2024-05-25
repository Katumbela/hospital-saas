// import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";
import {
  FaArrowUp,
  FaEnvelope,
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaMapPin,
  FaPhone,
  FaYoutube,
} from "react-icons/fa";

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
    <footer id="contacts" className="container pb-[3rem] md:px-[10%]">
      <div className="grid place-content-center justify-center grid-cols-3">
        <div>
          <b className="text-white">Sobre</b>
          <br />
          <ul>
            <li className="footer-link mt-2">Quem somos</li>
            <li className="footer-link my-2">termos e políticas</li>
          </ul>
        </div>
        <div>
          <b className="text-white">Contactos</b>
          <ul>
            <li className="footer-link flex gap-3 mt-2">
              {" "}
              <FaMapPin className="my-auto" /> Luanda, Angola
            </li>

            <li className="footer-link flex gap-3 my-2">
              {" "}
              <FaPhone className="my-auto" /> +244 9123 000 000
            </li>

            <li className="footer-link flex gap-3">
              {" "}
              <FaEnvelope className="my-auto" /> hackyoff@gmail.com
            </li>
          </ul>
        </div>
        <div>
          <b className="text-white">Social</b>
          <ul>
            <a
              href="#"
              target="__blank"
              className="footer-link flex gap-3 mt-2"
            >
              {" "}
              <FaYoutube className="my-auto" />
              Youtube
            </a>

            <a
              href="#"
              target="__blank"
              className="footer-link flex gap-3 my-2"
            >
              {" "}
              <FaFacebook className="my-auto" /> Facebook
            </a>

            <a href="#" target="__blank" className="footer-link flex gap-3">
              {" "}
              <FaInstagram className="my-auto" /> Instagram
            </a>

            <a
              href="#"
              target="__blank"
              className="footer-link flex gap-3 mt-2"
            >
              {" "}
              <FaLinkedin className="my-auto" /> Linkedin
            </a>
          </ul>
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
      <br />

      <center className="text-secondary">&copy; HackyOff - 2024</center>
    </footer>
  );
}
