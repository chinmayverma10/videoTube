import dotenv from "dotenv"
import {app} from "./app.js"
import cors from "cors"

dotenv.config({
    path: './.env'
})


const port = process.env.PORT ||8080;

app.listen(port,(req,res)=>{
    console.log(`app is listening on ${port}`)
})