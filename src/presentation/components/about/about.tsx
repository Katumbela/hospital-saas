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
              <img src={icons.pin_btn} alt="pin " className="w-[1.5em] my-auto"/>
             <span className="my-auto"> Confira os benefícios que temos para sí !</span>
            </button>
          </div>
          <div className="w-5/12"></div>
        </div>
      </section>
    </>
  );
}
