import { SignupDataBase } from "../data/SignupDataBase"
import { CustomError, InvalidName } from "../error/CustomError"
import { Signup, SignupInputDto } from "../models/signup"
import { idGenerator } from "../services/IdGenerator"

export class SignupBusiness {
  
    signup = async (input: SignupInputDto) => {
        try {
            const signupDataBase = new SignupDataBase()

            if(!input.setName()){
                throw new InvalidName
            }
            
            const id = idGenerator.generateId()
            const signup: Signup = new Signup(input.setName(), input.setPassword(), 
            input.setEmail(), id)
            await signupDataBase.signup(signup)

        } catch (error: any) {
            throw new CustomError(error.status, error.message)
        }
    }
}