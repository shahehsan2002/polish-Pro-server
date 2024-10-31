import express from "express";
import { UserController } from "./user.controller";
import validateRequest from "../../middleware/validateRequest";
import { UserValidations } from "./user.validation";

const router = express.Router();

// CREATE ADMIN
router.post(
  "/create-admin",
  validateRequest(UserValidations.createAdminValidations),
  UserController.createAdmin
);

// UPDATE USER
router.put(
  "/:userId",
validateRequest(UserValidations.updateUserValidations),
  UserController.updateUser
);



export const UserRoutes = router;