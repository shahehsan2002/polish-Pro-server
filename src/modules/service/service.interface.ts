import { Model } from "mongoose";

export type TService = {
    name: string;
    description: string;
    price: number;
    duration: number;
    isDeleted?: boolean;
    createdAt?: Date;
    updatedAt?: Date;
}

export type TServiceModel = Model<TService>;