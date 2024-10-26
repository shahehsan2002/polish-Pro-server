import { model, Schema } from "mongoose";
import { TService, TServiceModel } from "./service.interface";

const serviceSchema = new Schema<TService>(
  {
    name: {
      type: String,
      required: [true, "Name is required"],
    },
    description: {
      type: String,
      required: [true, "Description is required"],
    },
    price: {
      type: Number,
      required: [true, "Price is required"],
    },
    duration: {
      type: Number,
      required: [true, "Duration is required"],
    },
    isDeleted: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

const ServiceModel = model<TService, TServiceModel>("Service", serviceSchema);

export default ServiceModel;
