import { CustomError } from "../error/customError"
import { Signup } from "../models/signup"
import { BaseDatabase } from "./BaseDatabase"

export class SignupDataBase extends BaseDatabase{

    async signup (signup: Signup){
        try {
            
            await SignupDataBase.connection("Cookenu_signup").insert(signup)
            
        } catch (error: any) {
            throw new CustomError(error.status, error.message)
        }
    }
}