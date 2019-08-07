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
router.get('/', (req, res) => {
  res.render('index');
});

// router.get("/new", function(req, res, next) {
router.get('/new', (req, res) => {
  console.log('reqqqqqqqq', req.body);
  res.render('new_book');
})

/* POST create book */
router.post('/new', async (req, res, next) => {
  console.log('reeeeeq', req.body);
  const book = await Book.create(req.body);
  res.redirect('/books/' + book.id);
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
