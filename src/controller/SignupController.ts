import { Request, Response } from "express"
import { SignupBusiness } from "../business/SignupBusiness"
import { LoginInputDto, SignupInputDto } from "../models/signup"


export class SignupController {
    private signupBusiness = new SignupBusiness()

    signup = async (req: Request, res: Response) => {

        try {
            const {name, email, password} = req.body
            
            const input = new SignupInputDto(name, email, password)
            const token = await this.signupBusiness.signup(input)
            res.status(201).send({ message: "Usuário Cadastrado com Sucesso!", token })

        } catch (error: any) {
            res.status(error.statusCode || 400).send(error.message || error.sqlMessage)
        }
    }

    login = async (req: Request, res: Response) => {

        try {
            const {email, password} = req.body
            
            const input = new LoginInputDto(email, password)
            const token = await this.signupBusiness.login(input)
            res.status(200).send({ token })

        } catch (error: any) {
            res.status(error.statusCode || 400).send(error.message || error.sqlMessage)
        }
    }

}