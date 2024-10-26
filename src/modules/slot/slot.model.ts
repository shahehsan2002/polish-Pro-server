import  { model, Schema } from "mongoose";
import { ISlot } from "./slot.interface";

const SlotSchema = new Schema<ISlot>(
  {
    service: {
      type: String,
      required: [true, "Service is required"],
    },
    date: {
      type: String,
      required: [true, "Date is required"],
    },
    startTime: {
      type: String,
      required: [true, "Start time is required"],
    },
    endTime: {
      type: String,
      required: [true, "End time is required"],
    },
    isBooked: {
      type: String,
      enum: ["available", "booked", "cancelled"],
      default: "available",
    },
  },
  {
    timestamps: true,
  }
);


const SlotModel = model<ISlot>("Slot", SlotSchema);

export default SlotModel;

