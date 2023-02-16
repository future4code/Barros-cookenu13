import app from './app'
import { signupRouter } from './router/SignupRouter'


app.use("/signup", signupRouter)