import { USER_Roles, USER_STATUS } from "./user.constant";

export type TUser = {
    name: string;
    role:keyof typeof USER_Roles;
    email: string;
    password: string;
    status: keyof typeof USER_STATUS;
    passwordChangedAt?: Date;
};

