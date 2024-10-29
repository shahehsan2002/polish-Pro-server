// import { Request, Response } from "express";
// import { BookingServices } from "./booking.service";

// const createBooking = async (req: Request, res: Response) => {
//     try{
//         const bookingData = req.body;
//         const result = await BookingServices.createBooking(bookingData);
//         res.status(200).json({
//             success: true,
//             message: "Booking is created successfully!",
//             data: result
//         })
//     }catch(error){
//         res.status(500).json({
//             success: false,
//             message: "Could not create booking!",
//             error
//         })
//     }
    
// }

// export const BookingControllers = {
//     createBooking
// }
import { Request, Response } from "express";
import { Booking } from "./booking.model";
// import { Booking } from "../models/Booking";

export const BookingControllers = {
  createBooking: async (req: Request, res: Response) => {
    try {
      const { customer, service, slot, vehicleType, vehicleBrand, vehicleModel, manufacturingYear, registrationPlate } = req.body;

      if (!customer || !service || !slot) {
        return res.status(400).json({
          success: false,
          message: "Customer, service, and slot fields are required.",
        });
      }

      const booking = new Booking({
        customer,
        service,
        slot,
        vehicleType,
        vehicleBrand,
        vehicleModel,
        manufacturingYear,
        registrationPlate,
      });

      const savedBooking = await booking.save();

      res.status(200).json({
        success: true,
        message: "Booking successful",
        data: savedBooking,
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message: "Could not create booking!",
        error,
      });
    }
  },
};
