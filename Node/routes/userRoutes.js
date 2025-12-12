import express from "express";
import { userValidate } from "../utils/userValidate.js"
import { isAuthenticated } from "../middleware/auth.js";

const router = express.Router();

const users = [
    {   
        userId: "ar12",
        firstName:"Avinash",
        lastName:"Ranjan",
        email:"avinashranjan918@gmail.com",
        password:"Avinash123"
    }
]

//^ login

router.post("/login", (req,res)=>{
    const {email,password} = req.body;

   const user = users.find(user=> user.email === email && user.password === password);

   if(!user){
        res.status(404).json({msg:"Invalid User"})
   }
    req.session.user = { emailID: email };
    res.status(200).send({success: true,msg:"Login Successfull"});
})

//^ signin

router.post("/signin",(req,res)=>{
    const isValidated = userValidate(req.body);
    if(!isValidated){
        return res.status(404).json({msg:"Invalid Credentials"})
    }

    res.status(200).send({msg:"Signin Successfull"});
})

router.get("/profile", isAuthenticated ,(req,res)=>{
    console.log(req.cookies);    
    res.status(200).send({msg:"Profile Page"});
})

export default router;



