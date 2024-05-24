import { icons } from "../../../utils/image-exporter";

export function AboutUs() {
  return (
    <>
      <section className="text-center mt-[5rem] container">
        <h1 className="text-white text-5xl font-bold">Quem Nós Somos </h1>
        <br />
        <br />
        <br />
        <div className="flex">
          <div className="w-7/12 text-start">
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
              <li className="flex gap-2 my-2">
                <img src={icons.check_list} className="w-[2.5em]" alt="" />
                <span className="my-auto">
                  Treinamentos ministrados por especialistas em Segurança da
                  Informação.
                </span>
              </li>
              <li className="flex gap-2 my-2">
                <img src={icons.check_list} className="w-[2.5em]" alt="" />
                <span className="my-auto">
                  Laboratórios práticos para aplicação directa do conhecimento
                  adquirido.
                </span>
              </li>
              <li className="flex gap-2 my-2">
                <img src={icons.check_list} className="w-[2.5em]" alt="" />
                <span className="my-auto">
                  Capture the Flags (CTFs) gratuitos para testar habilidades e
                  competências
                </span>
              </li>
              <li className="flex gap-2 my-2">
                <img src={icons.check_list} className="w-[2.5em]" alt="" />
                <span className="my-auto">
                  Acesso a atualizações regulares sobre tendências, técnicas e
                  ferramentas em
                </span>
              </li>
            </ul>
          </div>
          <div className="w-5/12"></div>
        </div>
      </section>
    </>
  );
}
