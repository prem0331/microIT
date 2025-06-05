const user=require("../models/user");
const {v4:uuidv4}=require("uuid");
const {setuser,getuser }=require("../services/auth")
async function handleusersignup(req,res){
    const {name,email,password}=req.body;
    await user.create({
        name,
        email,
        password,
    });
    return res.redirect("/");

}
async function handleuserlogin(req,res){
    const { email,password }=req.body;

const user1=await user.findOne({email,password   });
console.log("user",user1);
if(!user1) return res.render("login",{
    error:"invalid usename or password."
    
});
const sessionId=uuidv4();
setuser(sessionId,user);
res.cookie("uid",sessionId);
console.log(sessionId);


    return res.redirect("/byejs-rendering");

}
module.exports={
    handleusersignup,
    handleuserlogin,
};