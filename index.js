const express = require('express');
const ejs = require('ejs');


const app = express();

//setting up the view engine....
app.set("view engine","ejs");

//telling express where are we keeping our index.js...
app.set("views",__dirname+"/views");

//setting up static folder...
app.use( express.static( "public" ) );


app.get('/',(req,res)=>{
    res.render("index");
})


const port = process.env.PORT;
//const port = 8080;
app.listen(port,(err,resp)=>{
    if(err)console.log(err);
    else{
        console.log('App woking fine');
    }
})