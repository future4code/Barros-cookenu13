import { SignupDataBase } from "../data/SignupDataBase"
import { CustomError, InvalidEmail, InvalidName, InvalidPassword } from "../error/customError"
import { Signup, SignupInputDto } from "../models/signup"
import { idGenerator } from "../services/IdGenerator"

export class SignupBusiness {
    private signupDataBase = new SignupDataBase()
  
    signup = async (input: SignupInputDto) => {
        try {
            
            if(!input.getName()){
                throw new InvalidName
            }

            if(!input.getEmail()){
                throw new InvalidEmail
            }
            
            const filterEmail = input.getEmail().includes("@")
            if(filterEmail != true){
                throw new InvalidEmail
            }

            if(!input.getPassword()){
                throw new InvalidPassword
            }

           /*  if(input.getPassword.length < 6){
                throw new Error ("Password must be at least 6 characters")
            } */

            const id = idGenerator.generateId()
            const signup: Signup = new Signup(input.getName(), input.getEmail(), 
            input.getPassword(), id)
            await this.signupDataBase.signup(signup)
            

        } catch (error: any) {
            throw new CustomError(error.status, error.message)
        }
    }
}