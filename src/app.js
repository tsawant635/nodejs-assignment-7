const express = require('express')
const app = express()
const bodyParser = require("body-parser");
const marioModel = require('./models/marioChar');

// Middlewares
app.use(express.urlencoded());

// Parse JSON bodies (as sent by API clients)
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

// your code goes here

app.post('/mario', (req, res) => {   // to create data
    console.log(req.body)
    const user = new marioModel(req.body)  
    user.save().then(()=>{
        res.status(201).send(user)
    }).catch((e)=>{
        res.status(404).send({message: 'either name or weight is missing'})
    })
    
})
app.get("/mario",async(req,res)=>{   // to read data
    try{
       const data= await marioModel.find()
       res.send(data)
    }catch(e){
        res.send(e)
    }
})

app.get("/mario/:id",async(req,res)=>{     // get data by ID
    try{
      const _id=req.params.id;
      const data= await marioModel.findById(_id)
      if(!data){
        return res.send(404).send({message: error.message})
      }
      else{
        return res.send(data)
      }

    }catch(error){
        res.send({message: error.message})
    }
})

app.patch("/mario/:id",async(req,res)=>{   //update data by id
    try{
       const _id=req.params.id;
       const updateData= await marioModel.findByIdAndUpdate(_id,req.body,{ new:true,
       useFindAndModity:false})
       res.send(updateData)
    }catch(error){
        res.send({message: error.message})
    }
})

app.delete("/mario/:id",async(req,res)=>{   //delete data by id
    try{
       const _id=req.params.id;
       const deleteData= await marioModel.findByIdAndDelete(_id)
       res.send({message: 'character deleted'})
    }catch(error){
        res.send({message: error.message})
    }
})

module.exports = app;