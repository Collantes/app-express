var express = require('express'); 
var app = express(); 
app.get('/', function(req, res){ 
console.log("Ingresando a p�gina"+res)
res.send('Hello World Expressjs'); 
});
app.get('/cliente', function(req, res){ 
console.log("Ingresando a p�gina cliente"+res)
res.send('Hello World Expressjs cliente'); 
}); 
app.listen(8084); 
console.log('Server is running on port 8084'); 