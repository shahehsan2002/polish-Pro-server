import { catchAsync } from "../../utils/catchAsync";
import { UserService } from "./user.service";

const createAdmin = catchAsync(async (req, res) => {
    const result = await UserService.createAdminIntoDB(req.body);

    res.status(200).json({
        success: true,
        message: "Admin is created successfully !",
        data: result,
    });
});


export const UserController = {
    createAdmin
}