import { FaFacebook, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { ITeamCard } from "../../../interfaces/team-card/team-card";
import { FaTwitter } from "react-icons/fa6";
import { icons } from "../../../utils/image-exporter";
import { Overlay } from "../overlay/overlay";
import { motion } from "framer-motion";
import { Whisper } from "rsuite";
import DefaultPopover from "../default-popover/default-popover";

export function TeamCard({ datas }: ITeamCard) {
  return (
    <motion.div
      viewport={{ once: true }}
      initial={{ opacity: 0, y: 90 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: datas.id * 0.06 }}
      className="bg-dark relative z-10 border border-gray-100/10 rounded-lg text-center h-[19.5rem] py-[2rem] px-3"
    >
      <Whisper
        trigger="hover"
        placement="right"
        speaker={<DefaultPopover content={`I am positioned to the right`} />}
      >
        <img
          src={icons.exclamation}
          title={`Clique nas mídias para ver mais sobre ${
            datas.name.split(" ")[0]
          }`}
          className="w-[1.5em] absolute top-1.5 cursor-pointer right-1.5"
          alt=""
        />
      </Whisper>
      <div className="relative">
        <Overlay />
        <img src={datas.picture} alt="" className="mx-auto" />
      </div>
      <h2 className="text-white mt-5 font-bold text-xl">{datas.name}</h2>
      <span className="text-md text-secondary">{datas.role}</span>
      <br /> <br />
      <div className="flex z-10 gap-3 justify-center">
        {datas.midias?.facebook && (
          <a
            target="__blank"
            className=" hover:text-primary text-white text-white transition-all"
            href={datas.midias.facebook}
          >
            <FaFacebook className=" text-xl" />
          </a>
        )}
        {datas.midias?.linkedin && (
          <a
            target="__blank"
            className=" hover:text-primary text-white transition-all"
            href={datas.midias.linkedin}
          >
            <FaLinkedinIn className=" text-xl" />
          </a>
        )}
        {datas.midias?.twitter && (
          <a
            target="__blank"
            className=" hover:text-primary text-white transition-all"
            href={datas.midias.twitter}
          >
            <FaTwitter className=" text-xl" />
          </a>
        )}
        {datas.midias?.instagram && (
          <a
            target="__blank"
            className=" hover:text-primary text-white transition-all"
            href={datas.midias.instagram}
          >
            <FaInstagram className=" text-xl" />
          </a>
        )}
      </div>
    </motion.div>
  );
}
