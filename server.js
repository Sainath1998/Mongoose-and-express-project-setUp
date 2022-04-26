const express = require("express")
var mongoose = require('mongoose');
const app = express()
const expressLayouts = require("express-ejs-layouts")
const indexRouter = require("./routes/index")
// set up view engine
app.set("view engine","ejs")
app.set("views",__dirname+"/views")
app.set("layout","layouts/layout")
app.use(expressLayouts)
app.use(express.static('public'))

app.use('/',indexRouter)
app.listen(process.env.PORT || 3000)
var mongoDB = 'mongodb://127.0.0.1/my_database';
mongoose.connect(mongoDB, {useNewUrlParser: true, useUnifiedTopology: true});

//Get the default connection
var db = mongoose.connection;

//Bind connection to error event (to get notification of connection errors)
db.on('error', console.error.bind(console, 'MongoDB connection error:'));