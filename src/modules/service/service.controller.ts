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

export const ServiceControllers = {
    createService
}