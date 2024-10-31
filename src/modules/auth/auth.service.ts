import config from "../../config";
import { isPasswordMatched } from "../../utils/auth.util";
import { USER_Roles } from "../user/user.constant";
import { TUser } from "../user/user.interface";
import { UserModel } from "../user/user.model";
import { TLoginUser } from "./auth.interface";
import jwt from "jsonwebtoken";

const register = async (payload: TUser) => {
  // User existence check
  const user = await UserModel.findOne(payload);

  if (user) {
    throw new Error("User already exists");
  }

  // set user role by default

  payload.role = USER_Roles.USER;

  // create user
  const newUser = await UserModel.create(payload);
  return newUser;
};

const login = async (payload: TLoginUser) => {
  const user = await UserModel.findOne({ email: payload.email }).select(
    "+password"
  );

  if (!user) {
    throw new Error("User not found");
  }

  if (user.status === "BLOCKED") {
    throw new Error("User is blocked");
  }

  const passwordMatched = await isPasswordMatched(
    payload.password,
    user.password
  );

  if (!passwordMatched) {
    throw new Error("Password is incorrect");
  }

  const jwtPayload = {
    email: user.email,
    role: user.role,
  };

  const accessToken = jwt.sign(jwtPayload, config.jwt_access_secret as string, {
    expiresIn: config.jwt_access_expires_in,
  });

  const refreshToken = jwt.sign(
    jwtPayload,
    config.jwt_refresh_secret as string,
    {
      expiresIn: config.jwt_refresh_expires_in,
    }
  );

  return {
    accessToken,
    refreshToken,
  };
};

export const authService = {
  register,
  login,
};
