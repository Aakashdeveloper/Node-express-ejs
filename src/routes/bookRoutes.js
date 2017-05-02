var express = require('express');

var bookRouter = express.Router();
var router = function(nav) {
 
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