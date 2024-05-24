import { TrainingsData } from "../../../domain/config/trainings-config";
import { CardComponent } from "../card/card";

export function TrainingSection() {
  return (
    <>
      <section className="container 2xl:mt-[10rem] mt-[5rem]">
        <center>
          <h1 className="text-white text-6xl font-bold">
            " Treinamentos em Destaque "
          </h1>
        </center>
        <div className="grid mt-[5rem] grid-cols-3 gap-8">
          {TrainingsData.map((train) => (
            <CardComponent datas={train} key={train.id} />
          ))}
        </div>
      </section>
    </>
  );
}
