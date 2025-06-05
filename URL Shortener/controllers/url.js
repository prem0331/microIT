const shortid=require("shortid");
const URL=require("../models/url")
async function Handlegenerateshorturl(req,res) {
    const shortID=shortid();
    const body=req.body;
    if(!body.url) return res.status(400).json({error:'url is required'})
    await URL.create({
        shortID:shortID,
        redirectURL:body.url,
        visithistory:[],
    });
    return res.json({id:shortID});
     
    
}
module.exports={
    Handlegenerateshorturl, 
}