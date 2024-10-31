import { Request, Response } from "express";
import { catchAsync } from "../../utils/catchAsync";
import { authService } from "./auth.service";
import config from "../../config";

const register = catchAsync(async (req, res) => {
  const result = await authService.register(req.body);

  res.status(200).json({
    success: true,
    message: "User is registered successfully !",
    data: result,
  });
});

const login = catchAsync(async (req: Request, res: Response) => {

  const {accessToken, refreshToken} = await authService.login( req.body);


  res.cookie("refreshToken", refreshToken, {
      httpOnly: true,
      secure: config.NODE_ENV === "production",
  })

  res.status(200).json({
    success: true,
    message: "User is logged in successfully !",
    data: {
      accessToken,

    }
  });
});

export const AuthController = {
  register,
  login,
};
