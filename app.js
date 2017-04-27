var express = require('express');
var app = express();
var port = process.env.PORT || 3000;
var nav = [{
      Links: '/Books',
      Text: 'Book'
    }, {
      Links: '/Authors',
      Text: 'Author'
    }]
var bookRouter = require('./src/routes/bookRoutes')(nav);

app.use(express.static(__dirname + '/public'));
app.set('views', './src/views');
app.set('view engine', 'ejs');
//app.use(express.static(__dirname + '/src/views'));


app.use('/Books', bookRouter);

app.get('/', function(req, res) {
  res.render('index', {
    title: "hello i am here",
    nav: nav
  });
});

app.get('/books', function(req, res) {
  res.send('books')
});

app.listen(port, function(err) {
  console.log('running');
})