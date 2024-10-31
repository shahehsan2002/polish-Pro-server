import { USER_Roles } from "../user/user.constant";
import { TUser } from "../user/user.interface";
import { UserModel } from "../user/user.model";

const register = async (payload: TUser) => {
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




export const userServices = {
  register,
}