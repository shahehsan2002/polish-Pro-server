import { TService } from "./service.interface";
import ServiceModel from "./service.model";

// Create a service
const createService = async(payload: TService) => {
    const result = await ServiceModel.create(payload);
    return result;
}

// Get all services
const getAllServices = async() => {
    const result = await ServiceModel.find();
    return result;
}

// get a single service by id
const getServiceById = async(id: string) => {
    const result = await ServiceModel.findById(id);
    return result;
}



export const ServiceServices = {
    createService,
    getAllServices,
    getServiceById
}