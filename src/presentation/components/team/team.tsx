import { GlitchAnimation } from "react-glitch-animation";
import { TeamDatas } from "../../../domain/config/team-config";
import { TeamCard } from "../team-card/team-card";

export function TeamComponent() {
  return (
    <section
      id="team"
      className=" 2xl:py-[7rem]  py-[5rem] 2xl:mt-[10rem] mt-[5rem] bg-team"
    >
      <center>
        <h1 className="text-white text-5xl font-bold ">
          <GlitchAnimation
            isActive={true}
            animationDurationMS={100000}
            text="Nossa Equipa"
          />{" "}
        </h1>
      </center>
      <br />
      <br />
      <div className="container">
        <div className="grid gap-8 2xl:gap-3 md:grid-cols-3 2xl:grid-cols-6">
          {TeamDatas.map((user) => (
            <TeamCard datas={user} key={user.id} />
          ))}
        </div>
      </div>
    </section>
  );
}
