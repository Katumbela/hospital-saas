import { Link } from "react-router-dom";
import { logos } from "../../../utils/image-exporter";
import { FaArrowRight } from "react-icons/fa";

export function NavBar() {
  return (
    <>
      <div className=" border-b-[2px] py-3 border-sky-600">
        <div className="flex justify-between container">
          <div className="logo">
            <img src={logos.logo} className="" alt="" />
          </div>
          <div className="flex my-auto gap-5">
            <Link className="nav-link" to={"/"}>
              Início
            </Link>
            <Link className="nav-link" to={"/"}>
              Sobre
            </Link>
            <Link className="nav-link" to={"/"}>
              Treinamentos
            </Link>
            <Link className="nav-link" to={"/"}>
              Equipa
            </Link>
            <Link className="nav-link" to={"/"}>
              Testemunhos
            </Link>
            <Link className="nav-link" to={"/"}>
              Contactos
            </Link>
          </div>
          <div className="flex gap-4">
            <button className="bg-white flex gap-3 hover:bg-white/90 transition-all px-4 py-2 text-sm rounded-md font-medium my-auto">
              Consultar certificação <FaArrowRight className="my-auto " />
            </button>
            <button className="bg-primary flex gap-3 hover:bg-primary/90 transition-all px-4 py-2 text-sm rounded-md font-medium my-auto">
              Academia <FaArrowRight className="my-auto " />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
