import { ITrainer } from "../trainer/trainer"

export interface ITraining {
    status: "Brevemente" | "Disponivel"
    id: number
    title: string
    price: number
    hours: number
    students: number
    trainer: ITrainer
    description: string
    cover: string
}

