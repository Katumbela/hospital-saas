import { FaArrowRight } from "react-icons/fa";
import { Button } from "../button/button";
import { bg, icons } from "../../../utils/image-exporter";

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
              <h1 className="text-8xl text-white font-bold ">HackyOff</h1>
              <p className="text-5xl font-bold mt-6  text-secondary">
                Academia de Treinamentos em Segurança da Informação
              </p>
              <p className="text-secondary mt-3">
                A HakyOff é uma plataforma dedicada à treinamentos em Segurança
                da Informação, com foco principal em Segurança Ofensiva.
                Oferecemos uma variedade de treinamentos especializados,
                laboratórios práticos envolventes e uma comunidade ativa de
                profissionais e entusiastas da segurança cibernética.
              </p>
              <br />
              <div className="grid 2xl:mt-[3rem] 2xl:mb-[2rem] mb-5 grid-cols-3">
                <div className="flex  gap-1 text-white">
                  <img src={icons.notes} className="h-[3em] w-[3em]" alt="" />
                  <span className="text-4xl my-auto font-bold">+50</span>
                  <div>
                    <div className="flex gap-0 flex-col">
                      <span>Laboratórios</span> <span>Práticos</span>
                    </div>
                  </div>
                </div>
                <div className="flex  gap-1 text-white">
                  <img
                    src={icons.user_tag}
                    className="h-[3em] w-[3em]"
                    alt=""
                  />
                  <span className="text-4xl my-auto font-bold">+10</span>
                  <div>
                    <div className="flex gap-0 flex-col">
                      <span>Instrutores de</span> <span>Certificados</span>
                    </div>
                  </div>
                </div>
                <div className="flex  gap-1 text-white">
                  <img src={icons.taca} className="h-[3em]  w-[3em]" alt="" />
                  <span className="text-4xl my-auto font-bold">24/7</span>
                  <div>
                    <div className="flex gap-0 flex-col">
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

          <img
            src={bg.bg_hero}
            className="-z-10 absolute 2xl:top:0 2xl:bottom-auto bottom-0 h-[80%] -right-[5rem]  w-[60%] 2xl:w-[50%] 2xl:h-[70%] my-auto"
            alt=""
          />
        </div>
      </div>
    </>
  );
}
