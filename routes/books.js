//Set dependencies and add them to variables
const express = require('express');
const router  = express.Router();
// import Book from '../db/models/book.js';
const Book = require("../models").Book;
  
// const Book = require('../db/models/book');
// console.log(Book);
// const { Book } = db.models;
// const { Book } = db;


// function asyncHandler(cb){
//   return async (req,res,next)=> {
//     try {
//       await cb(req,res,next);
//     } catch(err){
//       res.render('error', {error:err});
//     }
//   }
// }

// function getBooks(){
//   return new Promise((resolve, reject)=> {
//     // fs.readFile('data.json', 'utf-8', (err, data)=> {
//       Book.FINDALLLLLL, (err, data) => {
//       if(err){
//         reject(err);
//       } else {
//         const users = JSON.parse(data);
//         resolve(users);
//       }
//     });
//   });
// }

// app.get('/', asyncHandler(async (req,res) => {
//   const users = await getBooks();
//   res.render('index', {title: "Users", users: users.users});
// })); 

//Setup projects path to render index pug view if no specific path is given
// router.get('/', (req, res) => {
//   res.render('index');
// });

router.get('/', function(req, res) {
  Book.findAll()
  .then(function(books) {
    res.render('index', { books: books });
  });
  });



// router.get("/new", function(req, res, next) {
router.get('/new', (req, res) => {
  console.log('reqqqqqqqq', req.body);
  res.render('new_book', { book: Book.build()} );
  console.log('resssssss', res.body);
})

    // new Book({
    //   title: req.body.title,
    //   author: req.body.author,
    //   genre: req.body.genre,
    //   year: req.body.year
    // })


/* POST create book */
router.post('/new', function(req, res, next) {
  console.log('postreeeeeq', req.body);
  // const book = await Book.create(req.body);

  Book.create(req.body)
  .then(function(book) {
      // you can now access the newly created task via the variable task
      res.redirect('/books/' + book.id);
      console.log('success');
  })
  .catch(function(err) {
      // print the error details
      res.render('error', err);
      console.log(err, req.body.email);
  });
});



// /* GET / retrieve book to update */
// router.get('/:id/edit', async (req, res, next) => {
//   const book = await Book.findByPk(req.params.id);
//   res.render('books/edit', { book, title: 'Edit Movie' });
// });

// /* PUT update book */
// router.put('/:id', async (req, res, next) => {
//   const book = await Book.findByPk(req.params.id);
//   await book.update(req.body);
//   res.redirect('/books/' + book.id);
// });

// /* Delete book */
// router.post('/books/:id/delete', async (req, res) => {
//   const bookToDelete = await Book.findByPk(req.params.id);
//   await bookToDelete.destroy();
//   res.redirect('/books');
// });

module.exports = router;














