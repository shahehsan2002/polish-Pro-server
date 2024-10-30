import express from "express";
import { UserController } from "./user.controller";
import validateRequest from "../../middleware/validateRequesr";
import { UserValidations } from "./user.validation";

const router = express.Router();

router.post(
  "/create-admin",
  validateRequest(UserValidations.createAdminValidations),
  UserController.createAdmin
);



export const UserRoutes = router;