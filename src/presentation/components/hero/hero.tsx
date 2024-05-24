import { FaArrowRight } from "react-icons/fa";
import { Button } from "../button/button";

export function Hero() {
  return (
    <div className="container ">
      <div className="flex h-[500px]">
        <div className="w-full my-auto grid items-center">
          <div>
            <h1 className="text-8xl text-white font-bold ">HackyOff</h1>
            <p className="text-5xl font-bold mt-6  text-secondary">
              Academia de Treinamentos em Segurança da Informação
            </p>
            <p className="text-secondary mt-3">
              A HakyOff é uma plataforma dedicada à treinamentos em Segurança da
              Informação, com foco principal em Segurança Ofensiva. Oferecemos
              uma variedade de treinamentos especializados, laboratórios
              práticos envolventes e uma comunidade ativa de profissionais e
              entusiastas da segurança cibernética.
            </p>
            <br />
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
        <div className="w-full"></div>
      </div>
    </div>
  );
}
