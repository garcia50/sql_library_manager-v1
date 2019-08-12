'use strict';

//Set dependencies and add them to variables
const express = require('express');
const app = express();
const path = require('path');
const sequelize = require("./models").sequelize;
const routes = require('./routes');
const booksRoute = require('./routes/books');

//Set middleware
app.use(express.json());
app.use(express.urlencoded())
//Setup a static route to directly send images to client/browser
app.use('/static', express.static(path.join(__dirname, 'public')));
app.set('view engine', 'pug');
//Invoke the app.use for the "layers"/routes created and later set up middleware
app.use(routes);
app.use('/books', booksRoute); 

//Setup error handler when user visits non-exiting site (path)
app.use((req, res, next) => {
  const err = new Error('Page Not Found');
  err.status = 404;
  console.log("Sorry, but the page your looking for does not exist.");
  next(err); 
});

//Setup error handler when user encounters other errors 
app.use((err, req, res, next) => {
  const status = err.status || 500;
  if (status == 404) {
    res.render('page_not_found');
    res.status(status);
  } else {
    res.status(status);
    res.render('error');
  } 
});

//Setup app.listen handler to return the http server instance from which express created
sequelize.sync().then(function() {
  app.listen(3000, () => console.log('App listening on port 3000!'));
})
