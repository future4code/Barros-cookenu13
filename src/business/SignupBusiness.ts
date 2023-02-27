import { SignupDataBase } from "../data/SignupDataBase"
import { CustomError, InvalidEmail, InvalidName, InvalidPassword, UserNotFound } from "../error/customError"
import { LoginInputDto, Signup, SignupInputDto } from "../models/signup"
import { Authenticator } from "../services/Authenticator"
import { idGenerator } from "../services/IdGenerator"
import { HashManager } from "../services/HashManager"

export class SignupBusiness {
    private signupDataBase = new SignupDataBase()
    private authenticator = new Authenticator()
    private hashManager = new HashManager()
    
    //criar usuário
    signup = async (input: SignupInputDto) => {

        try {
            
            if(!input.setName()){
                throw new InvalidName
            }

            /* if(input.setName.length < 4){
                throw new InvalidName
            }   */

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
                throw new InvalidPassword
            }   */

            const id = idGenerator.generateId()
            const hashPassword: string = await this.hashManager.generateHash(input.setPassword())

            const signup: Signup = new Signup(input.setName(), input.setEmail(), 
            hashPassword, id)
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

            const compareResult: boolean = await this.hashManager.compareHash(input.password, user.password)

            if(!compareResult){
                throw new InvalidPassword
            }

            const token = this.authenticator.generateToken({id: user.id})
            return token
            

        } catch (error: any) {
            throw new CustomError(error.status, error.message)
        }
    }

    getAll = async () => {
        try {
            
            const signupDataBase = new SignupDataBase()
            const result = await signupDataBase.getAll
            return result

        } catch (error: any) {
            throw new CustomError(error.status, error.message)
        }
    }
    
}