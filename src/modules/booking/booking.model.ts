// import { Document, model, Schema, Types } from "mongoose";

// export enum VehicleType {
//   CAR = "Car",
//   TRUCK = "Truck",
//   SUV = "SUV",
//   VAN = "Van",
//   MOTORCYCLE = "Motorcycle",
//   BUS = "Bus",
//   ELECTRIC = "electricVehicle",
//   HYBRID = "HybridVehicle",
//   BICYCLE = "bicycle",
//   TRACKTOR = "tractor",
// }

// export interface IBooking extends Document {
//   customer: Types.ObjectId;
//   service: Types.ObjectId;
//   slot: Types.ObjectId;
//   vehicleType: VehicleType;
//   vehicleBrand: string;
//   vehicleModel: string;
//   manufacturingYear: number;
//   registrationPlate: string;
//   createdAt: Date;
//   updatedAt: Date;
// }

// const bookingSchema = new Schema<IBooking>(
//   {
//     customer: {
//       type: Schema.Types.ObjectId,
//       ref: "User",
//       required: true,
//     },
//     service: {
//       type: Schema.Types.ObjectId,
//       ref: "Service",
//       required: true,
//     },
//     slot: {
//       type: Schema.Types.ObjectId,
//       ref: "Slot",
//       required: true,
//     },
//     vehicleType: {
//       type: String,
//       enum: Object.values(VehicleType),
//       required: true,
//     },
//     vehicleBrand: {
//       type: String,
//       required: true,
//     },
//     vehicleModel: {
//       type: String,
//       required: true,
//     },
//     manufacturingYear: {
//       type: Number,
//       required: true,
//     },
//     registrationPlate: {
//       type: String,
//       required: true,
//       unique: true,
//     },
//   },
//   { timestamps: true }
// );

// export const BookingModel = model<IBooking>("Booking", bookingSchema);

import mongoose, { Schema, Document } from "mongoose";

export interface IBooking extends Document {
  // customer: mongoose.Types.ObjectId;
  service: mongoose.Types.ObjectId;
  slot: mongoose.Types.ObjectId;
  vehicleType: string;
  vehicleBrand: string;
  vehicleModel: string;
  manufacturingYear: number;
  registrationPlate: string;
}

const BookingSchema: Schema = new Schema(
  {
    //customer: { type: Schema.Types.ObjectId, ref: "User", required: true },
    service: { type: Schema.Types.ObjectId, ref: "Service", required: true },
    slot: { type: Schema.Types.ObjectId, ref: "Slot", required: true },
    vehicleType: { type: String, enum: ["car", "truck", "SUV", "van", "motorcycle", "bus", "electricVehicle", "hybridVehicle", "bicycle", "tractor"], required: true },
    vehicleBrand: { type: String, required: true },
    vehicleModel: { type: String, required: true },
    manufacturingYear: { type: Number, required: true },
    registrationPlate: { type: String, required: true },
  },
  { timestamps: true }
);

export const Booking = mongoose.model<IBooking>("Booking", BookingSchema);
