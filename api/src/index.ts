import express from "express"
import cors from "cors"

import { checkDB } from "./utils/checkDB";
import userRouter  from "./routes/user.route";


const app = express()
const PORT = 5000

app.use(express.json())
app.use(cors())


app.use("/api/users", userRouter)

app.listen(PORT, () => {
    checkDB()
    console.log(`Server running on port ${PORT}`)
})