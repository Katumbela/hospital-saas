import { FaArrowRight } from "react-icons/fa";
import { ICard } from "../../../interfaces/card/card";
import { formatMoney } from "../../../utils/formatToMoney";
import { icons } from "../../../utils/image-exporter";
import { Button } from "../button/button";
import { abbreviateText } from "../../../utils/abreviate";
import { TeacherAvatarComponent } from "../teacher-avatar/teacher-avatar";
import { CourseDetailsTime } from "../course-detail-time/course-detail-tie";

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
          <h1 className="text-white text-xl 2xl:text-2xl  font-bold">
            {datas.title}
          </h1>
          <p className="text-secondary hacker mt-2 text-xs lg:text-sm">
            {abbreviateText(datas.description, 75)}
          </p>
        </div>
        <div className="flex mt-5 justify-between">
          <TeacherAvatarComponent
            name={datas.trainer.name}
            picture={datas.trainer.picture}
            role={datas.trainer.role}
          />

          <CourseDetailsTime
            hours={datas.hours}
            students={datas.students}
            studentsIcon={icons.people}
            timeIcon={icons.time}
          />
        </div>
        <br />
        <Button
          text="Inscrever-se"
          className="w-full justify-center"
          rightIcon={FaArrowRight}
        />
      </div>
    </>
  );
}
