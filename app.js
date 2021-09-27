// Importing express module
const express = require("express");
//Creating an express module object
const app = express();
//Adding dotenv file 
require("dotenv").config();
const route = require('./routes/user.route.js');
app.use(route);

//Establish the server connection
var server = app.listen(process.env.PORT, function () {
  var host = server.address().address;
  var port = server.address().port;
  console.log("Example app listening at http://%s:%s", host, port);
});
