const express = require("express");

const data = express();

      data.get("/" , function(req , res) {
      	res.send("<h1>Hello world </h1>")
      })

      data.get("/api/main" , function(req , res) {
      	res.write("Express in Node /n");
      	res.write("<p>Express is a minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications.</p>")
      	res.end("completed")
      })

      data.get("/api" , function(req , res) {
      	res.json({name:"qwerty"})
      })
      
data.listen(5000);