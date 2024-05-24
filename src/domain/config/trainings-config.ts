import { ITraining } from "../../interfaces/training/training";
import { bg, users } from "../../utils/image-exporter";

export const TrainingsData: ITraining[] = [
  {
    id: 1,
    title: "Hacking PCS - Treinamento Avançado",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text",
    trainer: {
      id: 1,
      name: "Heber Júlion",
      role: "Instrutor",
      picture: users.user_1,
    },
    cover: bg.bg_card,
    hours: 95,
    price: 94750,
    status: "Disponivel",
    students: 143,
  },
  {
    id: 3,
    title: "Hacking PCS - Treinamento Avançado",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text",
    trainer: {
      id: 3,
      name: "Joao A. Katombela",
      role: "Instrutor",
      picture: users.user_3,
    },
    cover: bg.bg_card,
    hours: 60,
    price: 124000,
    status: "Brevemente",
    students: 73,
  },
  {
    id: 2,
    title: "Hacking PCS - Treinamento Avançado",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text",
    trainer: {
      id: 2,
      name: "Valdemar Oliveira",
      role: "Instrutor",
      picture: users.user_4,
    },
    cover: bg.bg_card,
    hours: 120,
    price: 124000,
    status: "Disponivel",
    students: 103,
  },
];
