require("dotenv").config()
const mongoose = require("mongoose");
const express = require("express");
const app = express();
const cors = require("cors");

//middleware

app.use(express.json());
app.use(cors());

app.get("/",(req,res)=>{
	res.json("Hello world this is nodejs project updated using git command from terminal")
})

app.get("/user",(req,res)=>{
	user = {
		name:"kdcode",
		email:"kdcode@gmail.com",
		phone:"122343434"
	}
	res.json({user:user})
})
// connect mongodb to the server

app.listen(8000,()=>{
	console.log("app is up and running")
})
