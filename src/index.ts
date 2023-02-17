import { Request, Response } from "express"
import app from './app'
import { signupRouter } from './router/SignupRouter'


app.use("/signup", signupRouter)

app.get("/teste", (req: Request, res: Response)=> {
    res.send("ola")
})