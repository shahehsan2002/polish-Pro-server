import { TUser } from "./user.interface";
import { UserModel } from "./user.model";

const createAdminIntoDB = async (payload: TUser) => {
  // const {password, ...remaining} = payload 
  const admin = await UserModel.create(payload);
  return admin;
};

const updateUser = async (_id: string, payload: TUser) => {
  const admin = await UserModel.findByIdAndUpdate({ _id }, payload);
  return admin;
};

export const UserService = {
  createAdminIntoDB,
  updateUser,
};
