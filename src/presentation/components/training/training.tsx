import { motion } from "framer-motion";
import { TrainingsData } from "../../../domain/config/trainings-config";
import { CardComponent } from "../card/card";

export function TrainingSection() {
  return (
    <>
      <section id="trainings" className="container z-10 2xl:pt-[10rem] pt-[5rem]">
        <center>
          <h1 className="text-4xl font-bold text-white hacker 2xl:text-6xl">
            " Treinamentos em Destaque "
          </h1>
        </center>
        <div className="grid static z-20 mt-[5rem] md:grid-cols-3 sm:grid-cols-2 gap-8">
          {TrainingsData.map((train, index) => (
            <motion.div
              viewport={{ once: true }}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: .4, delay: index * .1 }}
              key={train.id}
            >
              <CardComponent datas={train} />
            </motion.div>
          ))}
        </div>
      </section>
    </>
  );
}
