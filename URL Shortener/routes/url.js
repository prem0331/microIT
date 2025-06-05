const express=require("express");
const router=express.Router();
const { Handlegenerateshorturl }=require("../controllers/url")
router.post('/',Handlegenerateshorturl);
module.exports=router;