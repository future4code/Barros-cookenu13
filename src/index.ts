import app from './controller/app'
import { signupRouter } from './router/SignupRouter'


app.use("/signup", signupRouter)