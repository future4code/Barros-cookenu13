import { CustomError } from "../error/customError"
import { OutputUserDTO, Signup } from "../models/signup"
import { BaseDatabase } from "./BaseDatabase"

export class SignupDataBase extends BaseDatabase{


    async signup (signup: Signup){
        try {
            
            await SignupDataBase.connection("Cookenu_signup").insert(signup)
            
        } catch (error: any) {
            throw new CustomError(error.status, error.message)
        }
    }

    async FindUserByEmail (email: string) {
        try {
            const result = await SignupDataBase.connection("Cookenu_signup")
            .select().where({email})
            return result[0]

        } catch (error: any) {
            throw new CustomError(error.status, error.message)
        }
    }
}