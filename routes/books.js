//Set dependencies and add them to variables
const express = require('express');
const router  = express.Router();

// const db = require('./db');
// const { Book } = db.models;


//Setup projects path to render index pug view if no specific path is given
router.get('/', (req, res) => {
  res.render('index');
});

// router.get("/new", function(req, res, next) {
router.get("/new", (req, res) => {
  res.render('new_book');
})

module.exports = router;
