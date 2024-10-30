import { TUser } from "./user.interface";
import { UserModel } from "./user.model";

const createAdminIntoDB= async (payload:TUser)=>{
    const admin = await UserModel.create(payload);
    return admin;
}

export const UserService = {
    createAdminIntoDB,
}