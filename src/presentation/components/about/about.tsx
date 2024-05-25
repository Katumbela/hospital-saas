import { bg, icons } from "../../../utils/image-exporter";
import { BsPlayCircle } from "react-icons/bs";
import { Overlay } from "../overlay/overlay";
import { BenefitsData } from "../../../domain/config/benefits-config";
import { BenefitsListComponent } from "../benefits-list/benefits-list";

export function AboutUs() {
  return (
    <>
      <section
        id="about"
        className="text-center mt-[5rem] 2xl:mt-[12rem] container"
      >
        <h1 className="text-white text-5xl font-bold">Quem Nós Somos </h1>
        <br />
        <br />
        <br />
        <div className="flex gap-5">
          <div className="w-7/12 z-10 text-start">
            <h2 className="text-4xl text-white font-bold">
              A HakyOff é uma Startup dedicada à treinamentos em Segurança da
              Informação,
            </h2>
            <p className="text-secondary mt-4">
              com foco principal em Segurança Ofensiva. Oferecemos uma variedade
              de treinamentos especializados, laboratórios práticos envolventes
              e uma comunidade ativa de profissionais e entusiastas da segurança
              cibernética. Buscamos proporcionar uma experiência de aprendizado
              imersiva e desafiadora que prepare os participantes para enfrentar
              os complexos desafios do mundo da segurança da informação.
            </p>
            <br />
            <button className="bg-primary flex gap-2 px-3 py-2 rounded-md font-semibold">
              <img
                src={icons.pin_btn}
                alt="pin "
                className="w-[1.5em] my-auto"
              />
              <span className="my-auto">
                {" "}
                Confira os benefícios que temos para sí !
              </span>
            </button>
            <br />
            <ul className="text-white">
              {BenefitsData.map((benefit) => (
                <BenefitsListComponent key={benefit.id} datas={benefit} />
              ))}
            </ul>
          </div>
          <div className="w-5/12">
            <div className="flex  gap-4">
              <div className="w-full z-10">
                <div className="border text-start p-3 rounded-md">
                  <p className="flex w-[10rem] relative py-1 px-2 bg-primary/40 rounded-md text-primary font-bold gap-2">
                    <Overlay />
                    <img src={icons.pcb} className="w-[2em]" alt="" />
                    <span className="my-auto hacker font-bold">
                      HackyOff {"_>"}
                    </span>
                  </p>
                  <b className="text-white">Nossos Objectivos </b>
                  <ol className="text-white text-sm">
                    <li className="my-2">
                      1. Capacitar profissionais e entusiastas da segurança
                      cibernética.
                    </li>
                    <li className="my-2">
                      2. Cultivar uma comunidade engajada e colaborativa.
                    </li>
                  </ol>
                </div>
              </div>
              <div className="w-full z-10">
                <div className="border text-start p-3 rounded-md">
                  <p className="flex relative w-[10rem] py-1 px-2 bg-primary/40 rounded-md text-primary font-bold gap-2">
                    <Overlay />{" "}
                    <img src={icons.pcb} className="w-[2em]" alt="" />
                    <span className="my-auto hacker font-bold">
                      HackyOff {"_>"}
                    </span>
                  </p>
                  <b className="text-white">Nossa Visão </b>
                  <ol className="text-white text-sm">
                    <li className="my-2">
                      A visão da HakyOff é ser reconhecida como uma plataforma
                      líder mundial em treinamento em cibersegurança,
                      impulsionando a excelência e a inovaçã
                    </li>
                  </ol>
                </div>
              </div>
            </div>
            <br />
            <div className="video relative">
              <div className="relative">
                <img src={bg.bg_video} className="w-full " alt="" />
                <div className="absolute top-0 right-0 left-0 bottom-0"></div>
              </div>
              <div className="play cursor-pointer items-center place-content-center z-10 h-[5rem] bg-primary w-[5rem] absolute top-[40%] left-[40%] rounded-full grid">
                {" "}
                <BsPlayCircle className="text-3xl hover:scale-[1.5] transition-all" />
              </div>
              <div className="play items-center place-content-center hover:animate-none animate-ping h-[4rem] bg-primary w-[4rem] absolute top-[42%] left-[41.5%] rounded-full grid"></div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
