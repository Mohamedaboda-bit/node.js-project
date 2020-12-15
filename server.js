
const express = require('express');
const app = express();
const bodyParser = require('body-Parser');
// Start up an instance of app

/* Middleware*/
//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cors for cross origin allowance
const cors = require('cors');
app.use(cors())
// Initialize the main project folder
app.use(express.static('website'));
// Setup Server
const port = 9000;
const server = app.listen(port,listing);
function listing(){
    console.log('server is running ');
    console.log(`in port:${port}`)
};
//endpoint
const project = []

//get route
app.get('/allData',test)
function test(req,res){
    res.send(project)
    console.log(project)
}
//post route
app.post('/wether',addwehter)
function addwehter(req,res){

   entry = {   
    temp:req.body.temp,
    feel:req.body.feel,
    data:req.body.date
   },
project.push(entry)
res.send(project)
console.log(project)
}

