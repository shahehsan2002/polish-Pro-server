import  { model, Schema } from "mongoose";
import { TUser } from "./user.interface";
import { USER_Roles, USER_STATUS } from "./user.constant";

const userSchema = new Schema<TUser>({
  name: {
    type: String,
    required: [true, "Name is required"],
  },
  role: {
    type: String,
    required: [true, "Role is required"],
    enum: Object.keys(USER_Roles),
  },
  email: {
    type: String,
    required: [true, "Email is required"],
    unique: true,
  },
  password: {
    type: String,
    required: [true, "Password is required"],
  },
  status: {
    type: String,
    required: [true, "Status is required"],
    enum: Object.keys(USER_STATUS),
    default: "ACTIVE",
  },
  passwordChangedAt: Date,
});

export const UserModel = model<TUser>("User", userSchema);
