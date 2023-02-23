import * as jwt from "jsonwebtoken"
import { AuthenticationData } from "../models/signup"

export class Authenticator {
    
    public generateToken = ({id}: AuthenticationData): string => {
        const token = jwt.sign(
            {id},
            process.env.JWT_KEY as string,
            {expiresIn: "1h"}
        )
        return token
    }

    getTokenData = (token: string): AuthenticationData => {
        const payload = jwt.verify(token, process.env.JWT_KEY as string)as AuthenticationData
        return payload
    }

    getData = (token: string) => {
        const tokenData = jwt.verify(
            token, process.env.JWT_KEY as string,
        )

        return tokenData as AuthenticationData
    }
}