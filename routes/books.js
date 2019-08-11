//Set dependencies and add them to variables
const express = require('express');
const router  = express.Router();
const Book = require("../models").Book;


//Setup projects path to render index pug view if no specific path is given
router.get('/', function(req, res) {
  // Book.findAll({limit: 5})
  Book.findAll()
  .then(function(books) {
    res.render('index', { books: books });
  });
});

/* GET book */
router.get('/new', (req, res) => {
  res.render('new_book', { book: Book.build()} );
})


/* POST create book */
router.post('/new', function(req, res) {
  Book.create(req.body) 
  .then(function(book) {
    res.redirect('/books');
    console.log('success');
  })
  .catch(function(err) {
    // print the error details
    res.render('new_book', {
      book: Book.build(req.body),
      errors: err.errors
    });
  });
});
  

/* Get Book details*/
router.get('/:id', (req, res) => {
  const { id } = req.params;
  Book.findByPk(id)
  .then(function(book){
    if(book == null) {
      res.render('page_not_found');
    } else {
      res.render('book_detail', { book: book.dataValues });
    }
    });
});


/* POST retrieve book to update */
router.post('/:id', (req, res) => {
  const { id } = req.params;
  Book.findByPk(id) 
  .then(function(book){
    if (book) {
      book.update(req.body);
    }
  })
  .then(function(book){
    res.redirect("/books");
  })
  .catch(function(err) {
    // print the error details
    res.render('book_detail', {
      book: Book.build(req.body),
      errors: err.errors
    });
  });

});


/* Delete book */
router.post('/:id/delete', (req, res) => {
  Book.findByPk(req.params.id)
  .then(function(book) {
    if (book) {
      book.destroy();
    }
  })
  .then(function() {
    res.redirect('/books');
  })
  .catch(function(err) {
    res.sendStatus(500);
  });
});


module.exports = router;




