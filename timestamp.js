/*********
var express = require('express');
var app = express();
var qwer = unixData();
console.log("time=", qwer);

app.get('/:dateIn', function (req, res) {
  res.send(JSON.stringify(req))
  
  // DO STUFF
  
  
  
  // RETURN RESPONSE
})




//timestamp - microservice
var newString = "1451001600000";

function dateToUnix() {
 var dateTime = new Date("2015-12-15"); 
var timestamp = Math.floor(dateTime / 1000);
 return timestamp;
}

function isUnix() {
     
  return newString;
  
}
app.route('/')
    .get(function(req, res) {
		  res.sendFile(process.cwd() + '/views/index.html');
    })



// *BNU* Add a new route to serve /hello
app.get('/hello',function(req, res) {
  res.send('hello this world');
})

// *BNU* Add a new route to serve /hello/... to show paramater capture
app.get('/hello/:name',function(req, res) {
  res.send('hello ' + req.params.name);
})

// Respond not found to all the wrong routes
app.use(function(req, res, next){
  res.status(404);
  res.type('txt').send('Not found');
});

// Error Middleware
app.use(function(err, req, res, next) {
  if(err) {
    res.status(err.status || 500)
      .type('txt')
      .send(err.message || 'SERVER ERROR');
  }  
})
app.listen(process.env.PORT, function () {
  console.log('Node.js listening ...');
});
**/
 