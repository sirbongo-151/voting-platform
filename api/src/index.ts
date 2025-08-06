import express from "express"
import cors from "cors"
import cookieParser from "cookie-parser";
import dotenv from "dotenv"; 
dotenv.config();

import { checkDB } from "./utils/checkDB";
import userRouter  from "./routes/user.route";
import categoryRoutes from "./routes/category.routes"
import candidateRoutes from "./routes/candidate.routes";
import voteRoutes from "./routes/ vote.routes";



const app = express()
const PORT = 5000

app.use(express.json())
app.use(cors())
app.use(cookieParser())


app.use("/api/users", userRouter)
app.use('/api/categories', categoryRoutes);
app.use('/api/candidates', candidateRoutes);
app.use('/api/votes', voteRoutes);

app.listen(PORT, () => {
    checkDB()
    console.log(`Server running on port ${PORT}`)
})