const {getuser}=require("../services/auth");
async function restrictToLoggedUserOnly(req,res,next){
    const userUId=req.cookies.uid;
    if(!userUId) return res.redirect("/login")
    const user=getuser(userUId);
    if(!user) return res.render("/login");
    req.user=user;
    next();

} 
module.exports={
    restrictToLoggedUserOnly,
}
    
