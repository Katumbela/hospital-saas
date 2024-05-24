import { FaFacebook, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { ITeamCard } from "../../../interfaces/team-card/team-card";
import { FaTwitter } from "react-icons/fa6";

export function TeamCard({ datas }: ITeamCard) {
  return (
    <div className="bg-dark z-10 border border-gray-100/10 rounded-lg text-center h-[19.5rem] py-[2rem] px-3">
      <img src={datas.picture} alt="" className="mx-auto" />
      <h2 className="text-white mt-5 font-bold text-xl">{datas.name}</h2>
      <span className="text-md text-secondary">{datas.role}</span>
      <br /> <br />
      <div className="flex z-10 gap-3 justify-center">
        {datas.midias?.facebook && (
          <a target="__blank" className=" hover:text-primary text-white text-white transition-all" href={datas.midias.facebook}>
            <FaFacebook className=" text-xl" />
          </a>
        )}
        {datas.midias?.linkedin && (
          <a target="__blank" className=" hover:text-primary text-white transition-all" href={datas.midias.linkedin}>
            <FaLinkedinIn className=" text-xl" />
          </a>
        )}
        {datas.midias?.twitter && (
          <a target="__blank" className=" hover:text-primary text-white transition-all" href={datas.midias.twitter}>
            <FaTwitter className=" text-xl" />
          </a>
        )}
        {datas.midias?.instagram && (
          <a target="__blank" className=" hover:text-primary text-white transition-all" href={datas.midias.instagram}>
            <FaInstagram className=" text-xl" />
          </a>
        )}
      </div>
    </div>
  );
}
