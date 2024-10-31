
 /* eslint-disable @typescript-eslint/no-this-alias */
import { USER_Roles, USER_STATUS } from "./user.constant";
import { TUser } from "./user.interface";
import { model, Schema } from "mongoose";
import bcryptjs from "bcryptjs";
import config from "../../config";

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
    select: 0,
  },
  status: {
    type: String,
    required: [true, "Status is required"],
    enum: Object.keys(USER_STATUS),
    default: USER_STATUS.ACTIVE,
  },
  passwordChangedAt: {
    type: Date,
  },
});

// Password Hashing

userSchema.pre("save", async function (next) {
  const user = this;

  user.password = await bcryptjs.hash(user.password, Number(config.salt_rounds));

  next();
});


userSchema.post("save", function (doc, next) {
  doc.password = "";

  next();
});

export const UserModel = model<TUser>("User", userSchema);