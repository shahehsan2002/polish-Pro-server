import { Request, Response } from "express";
import { ServiceServices } from "./service.service";

// Create a service
const createService = async (req: Request, res: Response) => {
  const serviceData = req.body;
  const result = await ServiceServices.createService(serviceData);
  res.json({
    success: true,
    message: "Service is created successfully !",
    data: result,
  });
};

// Get all services
const getAllServices = async (req: Request, res: Response) => {
  try {
    const result = await ServiceServices.getAllServices();
    res.status(200).json({
      success: true,
      message: "Services are fetched successfully !",
      data: result,
    });
  } catch (err: any) {
    res.status(500).json({
      success: false,
      message: "Could not fetch services!",
      error: err,
    });
  }
};

// Get a single service by id
const getServiceById = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const result = await ServiceServices.getServiceById(id);
    res.status(200).json({
      success: true,
      message: "Service is fetched successfully !",
      data: result,
    });
  } catch (err: any) {
    res.status(500).json({
      success: false,
      message: "Could not fetch service!",
      error: err,
    });
  }
};

// Update a service
const updateService = async (req: Request, res: Response) => {
  const { id } = req.params;
  const serviceData = req.body;
  try {
    const result = await ServiceServices.updateService(id, serviceData);
    res.status(200).json({
      success: true,
      message: "Service is updated successfully !",
      data: result,
    });
  } catch (err: any) {
    res.status(500).json({
      success: false,
      message: "Could not update service!",
      error: err,
    });
  }
};

// Delete a service
const deleteService = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const result = await ServiceServices.deleteService(id);
    res.status(200).json({
      success: true,
      message: "Service is deleted successfully !",
      data: result,
    });
  } catch (err: any) {
    res.status(500).json({
      success: false,
      message: "Could not delete service!",
      error: err,
    });
  }
};

export const ServiceControllers = {
  createService,
  getAllServices,
  getServiceById,
  updateService,
  deleteService,
};
