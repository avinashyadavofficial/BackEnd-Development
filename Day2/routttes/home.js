// Importing express module

import express from 'express';
const router=express.Router()

// Handling request using router
router.get("/home",(req,res,next)=>{
    res.send("This is the homepage request")
})

// Exporting the router
export default router;