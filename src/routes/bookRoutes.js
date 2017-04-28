var express = require('express');

var bookRouter = express.Router();
var router = function(nav) {
  var books = [{
    title: 'War and Peace',
    genre: 'Historical Fiction',
    author: 'Lev Nikolayevich Tolstoy',
    read: false
  }, {
    title: 'Les Misérables',
    genre: 'Historical Fiction',
    author: 'Victor Hugo',
    read: false
  }, {
    title: 'The Time Machine',
    genre: 'Science Fiction',
    author: 'H. G. Wells',
    read: false
  }, {
    title: 'A Journey into the Center of the Earth',
    genre: 'Science Fiction',
    author: 'Jules Verne',
    read: false
  }, {
    title: 'The Dark World',
    genre: 'Fantasy',
    author: 'Henry Kuttner',
    read: false
  }];

  bookRouter.use(function(req, res, next) {
    if (!req.user) {
      res.redirect('/');
    }
    next();
  });
  bookRouter.route('/')
    .get(function(req, res) {
      res.render('bookListView', {
        title: "hello i am here",
        nav: nav,
        book: books
      });
    });

  bookRouter.route('/:id')
    .get(function(req, res) {
      var id = req.params.id;
      res.render('bookView', {
        title: "hello i am here",
        nav: nav,
        book: books[id]
      });
    });

  return bookRouter;
};


module.exports = router;