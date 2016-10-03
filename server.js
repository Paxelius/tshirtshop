var express = require('express');
var app = express();

/*
Sorry to say, I currently have problems deploying my mongoDb to Heroku,
however it is not a must - Everything works without it.
I just had to downscale some functions I used to have which was tied
to the database, like login / admin / products etc..

var mongoose = require('mongoose');
mongoose.connect(process.env.MONGOLAB_URI);
*/

app.use(express.static(__dirname + "/app"));

app.listen(process.env.PORT || 3000);
console.log("Server up on port 3000");