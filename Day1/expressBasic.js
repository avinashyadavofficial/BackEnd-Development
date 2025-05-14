const express=require('express')
const app=express()
const port=3000
app.use(express.json());
app.post('/',(req,res)=>{
    res.status(200);
    const {name}=req.body;
    const {age}=req.body;
    res.send(`${name} ${age}`);

})
app.listen(port,()=>{
   console.log(`App listening on port ${port}`);
})
