const express=require("express")
const cors=require("cors")

const app=express()
app.use(cors)
app.use(express.json)

app.post("api/login" ,(req,res)=> {
    const {email,password}=req.body
    console.log("login recieve" ,email,password)

    

})