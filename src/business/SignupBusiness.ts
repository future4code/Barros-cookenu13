import { SignupDataBase } from "../data/SignupDataBase"
import { CustomError, InvalidEmail, InvalidName, InvalidPassword } from "../error/customError"
import { Signup, SignupInputDto } from "../models/signup"
import { Authenticator } from "../services/Authenticator"
import { idGenerator } from "../services/IdGenerator"

export class SignupBusiness {
    private signupDataBase = new SignupDataBase()
    private authenticator = new Authenticator()
  
    signup = async (input: SignupInputDto) => {
        

        try {
            
            if(!input.setName()){
                throw new InvalidName
            }

            if(!input.setEmail()){
                throw new InvalidEmail
            }
            
            const filterEmail = input.setEmail().includes("@")
            if(filterEmail != true){
                throw new InvalidEmail
            }

            if(!input.setPassword()){
                throw new InvalidPassword
            }

           /*  if(input.setPassword.length < 6){
                throw new Error ("Password must be at least 6 characters")
            } */

            const id = idGenerator.generateId()
            const signup: Signup = new Signup(input.setName(), input.setEmail(), 
            input.setPassword(), id)
            await this.signupDataBase.signup(signup)

            const token = this.authenticator.generateToken({id})
            return token
            

        } catch (error: any) {
            throw new CustomError(error.status, error.message)
        }
    }
}