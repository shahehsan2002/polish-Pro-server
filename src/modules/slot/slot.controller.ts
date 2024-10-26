

import { Request, Response } from "express";
import { SlotServices } from "./slot.service";

// Create slots for a service
const createSlots = async (req: Request, res: Response) => {
    try {
        const { service, date, startTime, endTime } = req.body;
        const duration = 60; // Define duration as a constant

        const slots = await SlotServices.createSlots(service, date, startTime, endTime, duration);
        res.status(200).json({
            success: true,
            message: "Slots are created successfully!",
            data: slots,
        });
    } catch (err: any) {
        res.status(500).json({
            success: false,
            message: "Could not create slots!",
            error: err.message || err,
        });
    }
};

// Get all available slots for a service on a specified date
const getAvailableSlots = async (req: Request, res: Response) => {
    try {
        const { serviceId, date } = req.query;
        const slots = await SlotServices.getAvailableSlots(serviceId as string, date as string);
        res.status(200).json({
            success: true,
            message: "Slots are fetched successfully!",
            data: slots,
        });
    } catch (err: any) {
        res.status(500).json({
            success: false,
            message: "Could not fetch slots!",
            error: err.message || err,
        });
    }
};

export const SlotControllers = {
    createSlots,
    getAvailableSlots
};