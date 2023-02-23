import { JwtPayload } from "jsonwebtoken"
import { SignupDataBase } from "../data/SignupDataBase"
import { CustomError, InvalidEmail, InvalidName, InvalidPassword, MissingToken, ProfileNotFound, UserNotFound } from "../error/customError"
import { LoginInputDto, OutputUserDTO, ResponseProfileDTO, Signup, SignupInputDto } from "../models/signup"
import { Authenticator } from "../services/Authenticator"
import { idGenerator } from "../services/IdGenerator"

export class SignupBusiness {
    private signupDataBase = new SignupDataBase()
    private authenticator = new Authenticator()
    
    //criar usuário
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

    //logar 
    login = async (input: LoginInputDto) => {
        

        try {
            const { email, password } = input
            
            if(!email){
                throw new InvalidEmail
            }
            
            const filterEmail = email.includes("@")
            if(filterEmail != true){
                throw new InvalidEmail
            }

            if(!password){
                throw new InvalidPassword
            }

            const signupDataBase = new SignupDataBase()
            const user = await signupDataBase.FindUserByEmail(email)

            if(!user){
                throw new UserNotFound
            }

            if(user.password !== password){
                throw new InvalidPassword
            }

            const token = this.authenticator.generateToken({id: user.id})
            return token
            

        } catch (error: any) {
            throw new CustomError(error.status, error.message)
        }
    }

    
}