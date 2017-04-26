var express = require('express');
var app = express();
var port=3000;

app.use(express.static(__dirname + '/public'));
app.use(express.static(__dirname + '/src/views'));

app.get('/',function(req,res){
	res.send('hello')
});

app.get('/books',function(req,res){
	res.send('books')
});

app.listen(port,function(err){
	console.log('running');
})