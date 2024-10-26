import { Request, Response } from "express";
import { ServiceServices } from "./service.service";

const createService = async (req: Request, res: Response) => {
    const serviceData = req.body;
    const result = await ServiceServices.createService(serviceData);
    res.json({
        success: true,
        message: "Service is created successfully !",
        data: result
    });
}

const getAllServices = async (req: Request, res: Response) => {
    try {
        const result = await ServiceServices.getAllServices();
        res.status(200).json({
            success: true,
            message: "Services are fetched successfully !",
            data: result
        });
    } catch (err: any) {
        res.status(500).json({
            success: false,
            message: "Could not fetch services!",
            error: err
        });
    }
}

export const ServiceControllers = {
    createService,
    getAllServices,
}