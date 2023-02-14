import express from "express"
import { SignupController } from "../controller/SignupController"

const signupController = new SignupController()
export const signupRouter = express.Router()


signupRouter.post("/new-user", signupController.signup)