const express= require('express');
var router=express.Router();

const dotenv=require("dotenv");
const cookieParser = require('cookie-parser');
let app=express();
app.use(cookieParser());
const path = require('path');
dotenv.config({path:'./config.env'});
require('./DB/connect')
const PORT = process.env.PORT;
app.use(express.json());
app.use(require('./ROUTER/auth'));

app.use(`/UPLOAD`, express.static('../frontend/public/UPLOAD'))



app.listen(PORT,()=>{
    console.log(`server running on Port no.${PORT}`)
});


