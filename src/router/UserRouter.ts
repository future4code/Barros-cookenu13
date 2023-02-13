import  express  from "express"
import { SignupController } from "../controller/SignupController"

export const userRouter = express.Router()
const userController = new SignupController()

userRouter.post("/signup", userController.signup)

