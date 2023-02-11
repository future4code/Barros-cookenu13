import { Request, Response } from "express"
import { SignupBusiness } from "../business/SignupBusiness"
import { SignupInputDto } from "../models/signup"


export class SignupController {
    signup = async (req: Request, res: Response) => {
        const signupBusiness = new SignupBusiness()

        try {
            const name = req.body.name
            const email = req.body.email
            const password = req.body.password

            const input = new SignupInputDto(name, email, password)
            await signupBusiness.signup(input)
            res.status(200).send("Usuário Cadastrado com Sucesso!")

        } catch (error: any) {
            res.status(error.statusCode || 400).send(error.message || error.sqlMessage)
        }
    }
}