import { TeamDatas } from "../../../domain/config/team-config";
import { TeamCard } from "../team-card/team-card";

export function TeamComponent() {
  return (
    <>
      <section className=" 2xl:py-[7rem]  py-[5rem] 2xl:mt-[10rem] mt-[5rem] bg-team">
        <center>
          <h1 className="text-white text-5xl font-bold ">Nosso Team </h1>
        </center>
        <br />
        <div className="container">
          <div className="grid gap-3 grid-cols-6">
            {TeamDatas.map((user) => (
              <TeamCard datas={user} key={user.id} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
