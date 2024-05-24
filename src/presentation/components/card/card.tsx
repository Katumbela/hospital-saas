import { FaArrowRight } from "react-icons/fa";
import { ICard } from "../../../interfaces/card/card";
import { formatMoney } from "../../../utils/formatToMoney";
import { icons } from "../../../utils/image-exporter";
import { Button } from "../button/button";

export function CardComponent({ datas }: ICard) {
  return (
    <>
      <div className="w-full z-10">
        <img src={datas.cover} alt="" className="w-full" />
        <br />
        <div className="flex justify-between">
          <div
            className={` rounded-lg ${
              datas.status == "Brevemente"
                ? "bg-primary/30 text-primary font-bold "
                : "bg-green-600/20 font-bold text-green-600"
            } flex gap-2 px-2 py-1`}
          >
            <img
              src={datas.status == "Brevemente" ? icons.secur : icons.energy}
              className="w-[1.5em] h-[1.5em] my-auto"
              alt=""
            />
            <span className="my-auto">{datas.status}</span>
          </div>
          <div className="bg-primary/30 py-1 px-2 font-bold rounded-lg text-primary">
            <span className="my-auto">{formatMoney(datas.price)}</span>
          </div>
        </div>
        <br />
        <div>
          <h1 className="text-white text-2xl  font-bold">{datas.title}</h1>
          <p className="text-secondary mt-2 text-sm">{datas.description}</p>
        </div>
        <div className="flex mt-5 justify-between">
          <div className="flex gap-2">
            <img src={datas.trainer.picture} alt="" className="w-[3em]" />
            <div className="flex flex-col">
              <span className="text-white font-semibold">
                {datas.trainer.name}
              </span>
              <span className="text-secondary text-sm">
                {datas.trainer.role}
              </span>
            </div>
          </div>
          <div className="flex my-auto gap-2">
            <span className="flex gap-2 text-white font-semibold">
              <img
                src={icons.time}
                className="w-[1em] h-[1em] my-auto"
                alt=""
              />
              {datas.hours} H
            </span>
            <span className="flex gap-2 text-white font-semibold">
              <img
                src={icons.time}
                className="w-[1em] h-[1em] my-auto"
                alt=""
              />
              {datas.students} Alunos
            </span>
          </div>
        </div>
        <br />
        <Button text="Inscrever-se" className="w-full justify-center" rightIcon={FaArrowRight} />
      </div>
    </>
  );
}
