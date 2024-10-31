import { z } from "zod";
import { USER_Roles, USER_STATUS } from "./user.constant";

const createAdminValidations = z.object({
  body: z.object({
    name: z.string(),
    role: z.nativeEnum(USER_Roles).default(USER_Roles.ADMIN),
    email: z.string().email(),
    password: z.string(),
    status: z.nativeEnum(USER_STATUS).default(USER_STATUS.ACTIVE),
  }),
});
const updateUserValidations = z.object({
  body: z.object({
    name: z.string().optional(),
    role: z.nativeEnum(USER_Roles).optional(),
    status: z.nativeEnum(USER_STATUS).optional(),
  }),
});

export const UserValidations = {
  createAdminValidations,
  updateUserValidations,
};
