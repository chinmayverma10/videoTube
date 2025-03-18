import { app } from "./app.js"
import dotenv from "dotenv"
import DBconnection from "./db/index.js";

dotenv.config({
    path: "./.env"

})


const PORT = process.env.PORT || 8001;



DBconnection()
.then(
    app.listen(PORT,()=>{
        console.log(`App is listening on ${PORT}`)
    })
)
.catch((err)=>{
    console.log("Database connection error ", err)
})