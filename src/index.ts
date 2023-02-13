
import { userRouter } from './router/UserRouter'
import app from './controller/app'



app.get("/ping")

app.use("/signup", userRouter) 