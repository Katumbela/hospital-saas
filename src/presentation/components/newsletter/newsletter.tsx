import { motion } from "framer-motion";
//import { useTranslation } from "react-i18next";
import { useState } from "react";
import { bg } from "../../../utils/image-exporter";
import { Overlay } from "../overlay/overlay";
import { InputHackyOff } from "../input/input";
import { handleSendNewsLetterEmail } from "../../../services";
import { Button } from "../button/button";
import { FaArrowRight } from "react-icons/fa";

export function NewsLetter() {
  //const { t } = useTranslation();
  const [email, setEmail] = useState("");
  const [nome, setNome] = useState("");
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);

  async function handleSubmit() {
    try {
      const response = await handleSendNewsLetterEmail({
        setLoading: setLoading,
        email: email,
        nome: nome,
        setSent: setSent,
      });
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <motion.section
      className="my-14 md:px-[6%] container md:my-16 lg:my-24"
      initial={{ y: 70 }}
      transition={{ duration: 0.6 }}
      whileInView={{ y: 0 }}
    >
      <br />
      <div className="  flex-col md:flex-row flex  gap-5 md:gap-[6rem] mx-auto">
        <div className="relative">
          <Overlay />
          <img src={bg.bg_newsletter} className="w-[20em]" alt="" />
        </div>
        <div className=" w-full gap-4 px-2 py-2">
          <div className="flex gap-6">
            <InputHackyOff
              placeholder="Nome"
              className="w-full"
              divClass="w-full"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
            />
            <InputHackyOff
              placeholder="E-mail"
              className="w-full"
              divClass="w-full"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <Button
            isLoading={loading}
            text="Enviar"
            color="primary"
            onClick={handleSubmit}
            
            disabled={loading}
            className="flex click mt-8"
            rightIcon={FaArrowRight}
          />
        </div>
      </div>
      <br />
      <motion.div
        initial={{ opacity: 0, y: 90 }}
        transition={{ duration: 0.1, delay: 0.4 }}
        whileInView={{ opacity: 1, y: 0 }}
      >
        {sent && (
          <>
            <div className="relative p-4 mx-auto text-sm text-green-800 bg-green-100 border border-green-600 rounded-lg md:text-2xl md:w-7/12 2xl:text-2xl">
              <span
                onClick={() => setSent(false)}
                className="absolute top-0 text-2xl cursor-pointer right-2"
              >
                &times;
              </span>
              Recebemos o seu email e foi adicionado a Newsletter
            </div>
          </>
        )}
      </motion.div>
    </motion.section>
  );
}
