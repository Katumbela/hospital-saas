import { FaArrowRight } from "react-icons/fa";
import { Button } from "../button/button";
import { bg, icons } from "../../../utils/image-exporter";
import { motion } from "framer-motion";
import CountUp from "react-countup";
import { Typewriter } from "react-simple-typewriter";

export function Hero() {
  return (
    <>
      <img src={bg.bg_2} className="absolute" alt="" />

      <div className="container ">
        <img src={bg.bg_hero_fundo} className="absolute opacity-[.5]" alt="" />
        <img
          src={bg.bg_hero_fundo}
          className="absolute animate-pulse-slow"
          alt=""
        />
        <div className="flex h-[600px]  2xl:h-[800px]">
          <div className="w-7/12  z-10 my-auto grid items-center">
            <div>
              <motion.h1
                viewport={{ once: true }}
                initial={{ opacity: 0, y: -90 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-8xl hacker text-white font-bold "
              > 
                <Typewriter
                  words={["HackyOff", "HackyOff"]}
                  loop={1}
                  cursor
                  cursorStyle="_"
                  typeSpeed={80}
                  deleteSpeed={50}
                  delaySpeed={1500}  
                />
              </motion.h1>
              <motion.p
                viewport={{ once: true }}
                initial={{ opacity: 0, y: 90 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-5xl font-bold mt-6  text-secondary"
              >
                Academia de Treinamentos em Segurança da Informação
              </motion.p>
              <motion.p
                viewport={{ once: true }}
                initial={{ opacity: 0, y: 90 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-secondary hacker mt-3"
              >
                A HakyOff é uma plataforma dedicada à treinamentos em Segurança
                da Informação, com foco principal em Segurança Ofensiva.
                Oferecemos uma variedade de treinamentos especializados,
                laboratórios práticos envolventes e uma comunidade ativa de
                profissionais e entusiastas da segurança cibernética.
              </motion.p>
              <br />
              <div className="grid 2xl:mt-[3rem] 2xl:mb-[2rem] mb-5 grid-cols-3">
                <div className="flex  gap-1 text-white">
                  <img src={icons.notes} className="h-[3em] w-[3em]" alt="" />
                  <span className="text-4xl my-auto font-bold hacker">
                    +<CountUp end={50} duration={5} />
                  </span>
                  <div>
                    <div className="flex text-sm my-auto gap-0 hacker flex-col">
                      <span>Laboratórios</span> <span>Práticos</span>
                    </div>
                  </div>
                </div>
                <div className="flex  gap-1 text-white">
                  <img
                    src={icons.user_tag}
                    className="h-[2.5em] my-auto w-[2.5em]"
                    alt=""
                  />
                  <span className="text-4xl hacker my-auto font-bold">
                    +<CountUp end={10} duration={5} />
                  </span>
                  <div>
                    <div className="flex hacker my-auto text-sm gap-0 flex-col">
                      <span>Instrutores de</span> <span>Certificados</span>
                    </div>
                  </div>
                </div>
                <div className="flex  gap-1 text-white">
                  <img src={icons.taca} className="h-[3em]  w-[3em]" alt="" />
                  <span className="text-4xl my-auto hacker font-bold">
                    24/7
                  </span>
                  <div>
                    <div className="flex gap-0 text-sm hacker flex-col">
                      <span>Suporte</span> <span>Especializado</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex gap-6">
                <Button
                  color={"primary"}
                  text="Explorar Academia"
                  className="flex"
                  rightIcon={FaArrowRight}
                />
                <Button
                  text="Saber mais"
                  className="flex"
                  rightIcon={FaArrowRight}
                />
              </div>
            </div>
          </div>

          <motion.img
            viewport={{ once: true }}
            initial={{ opacity: 0, x: 90 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            src={bg.bg_hero}
            className="-z-10 absolute 2xl:top:0 2xl:bottom-auto bottom-[15rem] h-[35rem] -right-[5rem]  w-[50rem] 2xl:w-[60rem] 2xl:h-[45rem] my-auto"
            alt=""
          />
        </div>
      </div>
    </>
  );
}
