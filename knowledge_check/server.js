const express = require('express');
const app = express();
// either use heroku env/port then use local #
const port = process.env.PORT || 8080;


// Routes
app.get('/', function(req, res) {
   res.send("Default Landing Page");
 });


app.get('/index', function (request, response) {
   response.sendFile(__dirname + "/" + "index.html");
 })
 
 app.get('/about', function (request, response) {
  response.sendFile(__dirname + "/" + "about.html");
})

app.get('/contact-me', function (request, response) {
  response.sendFile(__dirname + "/" + "contact-me.html");
})

app.get('*', function (request, response) {
  response.sendFile(__dirname + "/" + "404.html");
})


app.listen(port);
console.log('Server started at http://localhost:' + port);

// express.static(knowledge_check, [404, about, contact-me, index])



app.get('/getTaco',function(req, res){
  //    //get and read are the same
  //    res.send("You are worthy of taco")
  //  });
  
  //  app.get('/deleteTaco',function(req, res){
  //    //if you are cool
  //    res.send("Taco is gone =(")
  //  });
  
  //  app.get('/createTaco',function(req, res){
  //    //if you are cool
  //    res.send("Taco is made")
  //  });
  
  //  app.get('/updateTaco',function(req, res){
  //    //if you are cool
  //    res.send("Taco has new ingredients")
  //  });