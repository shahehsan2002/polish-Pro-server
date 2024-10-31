import express from "express";
import { AuthController } from "./auth.controller";

const router = express.Router();

// REGISTER USER
router.post(
  "/register",
  AuthController.register
);

// LOGIN USER
router.post(
  "/login",
  AuthController.login
);



export const AuthRoutes = router;