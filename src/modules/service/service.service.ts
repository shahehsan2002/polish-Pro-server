import { TService } from "./service.interface";
import ServiceModel from "./service.model";

const createService = async(payload: TService) => {
    const result = await ServiceModel.create(payload);
    return result;
}

const getAllServices = async() => {
    const result = await ServiceModel.find();
    return result;
}




export const ServiceServices = {
    createService,
    getAllServices
}