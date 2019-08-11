'use strict';
const express = require('express');
const app = express();
const path = require('path');
const sequelize = require("./models").sequelize;
const routes = require('./routes');
const booksRoute = require('./routes/books');

app.use(express.json());
app.use(express.urlencoded())

app.use('/static', express.static(path.join(__dirname, 'public')));
app.set('view engine', 'pug');

app.use(routes);
app.use('/books', booksRoute); 

app.use((req, res, next) => {
  const err = new Error('Page Not Found');
  err.status = 404;
  console.log("Sorry, but the page your looking for does not exist.");
  next(err); 
});

app.use((err, req, res, next) => {
  res.locals.error = err;
  const status = err.status || 500;
  if (status == 404) {
    res.render('page_not_found');
    res.status(status);
  } else {
    res.status(status);
    res.render('error');
  } 
});

sequelize.sync().then(function() {
  app.listen(3000, () => console.log('App listening on port 3000!'));
})
