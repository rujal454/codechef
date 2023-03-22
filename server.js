const { response } = require("express");
const express= require("express")
const app =express();
const mongoose=require("mongoose");
app.use(express.json())
const uri = "mongodb+srv://pro1:rujal@cluster0.kgioppd.mongodb.net/?retryWrites=true&w=majority";
async function connect(){
    try{
        await mongoose.connect(uri)
        console.log("connected to mongodb")
    }catch(error){
        console.error(error);
    }

}
connect();
const sch={
    email:{
    type:String,
    unique:true},

    pass:{
    type:String,
    minlength:6,
    }
    
}
const monmodel =mongoose.model("login",sch)
app.post("/post",async(req,res)=>{
    console.log("inside post function");
    const data=new monmodel({
        email:req.body.email,
        pass:req.body.pass,
   })
   const val=await data.save();
   res.json(val);
    app.get("/fetch/:email",function(err,val){
    fetchemail=req.params.email;
    monmodel.find(({email:fetchemail}),function(err,val){
        res.send(val);
    })
})



    app.listen(3000,() => 
    {
    console.log("server started on port 3000")
    })
});
