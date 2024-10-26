// import { Request, Response } from "express";
// import { SlotServices } from "./slot.service";

// const createSlots = async (req: Request, res: Response) => {
//     try {
//         const { service, date, startTime, endTime } = req.body;
//         const duration = 60; // Define duration as a constant

//         const slots = await SlotServices.createSlots(service, date, startTime, endTime, duration);
//         res.status(200).json({
//             success: true,
//             message: "Slots are created successfully!",
//             data: slots,
//         });
//     } catch (err: any) {
//         res.status(500).json({
//             success: false,
//             message: "Could not create slots!",
//             error: err.message || err,
//         });
//     }
// }

// export const SlotControllers = {
//     createSlots
// };


import { Request, Response } from "express";
import { SlotServices } from "./slot.service";

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

export const SlotControllers = {
    createSlots,
};