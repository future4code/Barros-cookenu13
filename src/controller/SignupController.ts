import { Request, Response } from "express"
import { SignupBusiness } from "../business/SignupBusiness"
import { SignupInputDto } from "../models/signup"


export class SignupController {
    private signupBusiness = new SignupBusiness()

    signup = async (req: Request, res: Response) => {

        try {
            const {name, email, password} = req.body
            
            const input = new SignupInputDto(name, email, password)
            await this.signupBusiness.signup(input)
            res.status(200).send("Usuário Cadastrado com Sucesso!")

        } catch (error: any) {
            res.status(error.statusCode || 400).send(error.message || error.sqlMessage)
        }
    }
}