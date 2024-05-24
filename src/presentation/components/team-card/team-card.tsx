import { ITeamCard } from "../../../interfaces/team-card/team-card";

export function TeamCard({ datas }: ITeamCard) {
  return (
    <div className="bg-dark border border-gray-100/10 rounded-lg text-center py-[2rem] px-6">
      <img src={datas.picture} alt="" className="mx-auto" />
      <h2 className="text-white mt-5 font-bold text-xl">{datas.name}</h2>

      <span className="text-md text-secondary">{datas.role}</span>
      <span className="text-sm text-secondary">{datas.description}</span>
    </div>
  );
}
