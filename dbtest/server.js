const express = require("express");
// dotEnv
require("dotenv").config({path:"variables.env"});
const mongoose = require("mongoose");
// mongodb Schema
const Item = require("./models/Item");

const server = express();
// bodyParser
const bodyParser = require("body-parser");
const { db } = require("./models/Item");
server.use(bodyParser.urlencoded({extended:false}));
server.use(bodyParser.json());

server.get("/",(req,res)=>{
    const item = new Item();
    Item.find({}).then((data)=>{
        console.log(data);
    });
    console.log("get Test!!!");
    res.send("<h2>Hellow Node Api Server</h2>");
});

server.get("/get/items",(req,res)=>{
    let items = [];
    Item.find({})
    .then((item)=>{
        items.push(item);
    })
    .catch((err)=>{
        return res.status(400).json({
            message:"DB findError!!!"
        }).end;
    })
    .finally(()=>{
        console.log(items);
        res.json({
            items:items
        });
    });
});

server.put("/put",(req,res)=>{
    console.log(req.body.name);
    Item.updateOne({name:req.body.name},{ price:req.body.price},()=>{
        console.log("success");
        res.json({
            success:"update Success"
        });
    });
});

server.delete("/del",(req,res)=>{
    Item.findOneAndDelete({name:req.body.name},()=>{
        console.log("delSuccess");
        res.status(200).json({
            message:"delete Success"
        });
    });
});

// "/create/'itemName'?price=(Number)&optionName='String'"
server.get("/create/:name",(req,res)=>{
    const item = new Item();
    item.name = req.params.name;
    item.price = req.query.price;
    item.option = {
        optionName:req.param("optionName"),
        optionValue:"value",
    }
    item.save()
        .then((success)=>{
            console.log(success);
            res.status(200)
            .json({
                message:"item created success"
            });
        })
        .catch((err)=>{
            res.status(500)
            .json({
                message: "item created error"
            });
        });
});

server.post("/create",(req,res)=>{
    const item = new Item();
    console.log(req.body);
    item.name = req.body.itemName;
    item.price = req.body.price;
    item.option = req.body.option;
    
    item.save()
        .then((success)=>{
            console.log(success);
            res.status(200)
            .json({
                message:"item created success"
            });
        })
        .catch((err)=>{
            res.status(500)
            .json({
                message: "item created error"
            });
        });
});



server.listen(3000,(err)=>{
    if(err){
        console.log("Server Start Error!!!");
        return console.log(err);
    }else{
        mongoose.connect(process.env.MONGODB_URL,{useUnifiedTopology: true,useNewUrlParser:true},(err)=>{
            if (err){
                console.log("MongoDB 연결 실패");            
                return console.log(err);
            }else{
                console.log("MongoDB 연결 성공");
            }
        });
    }
    console.log("Start NodeAPI Server!!!");
});