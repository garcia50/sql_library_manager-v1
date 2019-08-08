'use strict';
const express = require('express');
const app = express();
const path = require('path');
const sequelize = require("./models").sequelize;

const routes = require('./routes');
const booksRoute = require('./routes/books');

app.use(express.json());
var bodyParser = require('body-parser');
app.use(bodyParser.json());


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
  res.status(status);
  res.render('error');
});



sequelize.sync().then(function() {
  app.listen(3000, () => console.log('App listening on port 3000!'));
})










































// function asyncHandler(cb){
//   return async (req,res,next)=> {
//     try {
//       await cb(req,res,next);
//     } catch(err){
//       res.render('error', {error:err});
//     }
//   }
// }

//**********************after refactor
//CALL BACKS
// function getUsers(cb){
//   fs.readFile('data.json', 'utf8', (err, data) => {
//     if (err) return cb(err);
//     const users = JSON.parse(data);
//     return cb(null, users);
//   });
// }

// app.get('/', (req,res) => {
//   getUsers((err, users)=>{
//     if(err){
//       res.render('error', {error:err});
//     } else {
//       res.render('index', {title: "Users", users: users.users})
//     }
//   });
// }); 
//**********************

// PROMISES 
// function getUsers(){
//   return new Promise((resolve, reject)=> {
//     fs.readFile('data.json', 'utf-8', (err, data)=> {
//       if(err){
//         reject(err);
//       } else {
//         const users = JSON.parse(data);
//         resolve(users);
//       }
//     });
//   });
// }

//**********************after refactor
// app.get('/', (req,res) => {
//   getUsers()
//     .then((users)=> {
//       res.render('index', {title: "Users", users: users.users});
//     })
//     .catch((err)=> {
//       res.render('error', {error: err});
//     });
// }); 
//**********************

// ASYNC/AWAIT
// app.get('/', asyncHandler(async (req,res) => {
//   // const users = await getUsers();
//   // res.render('index', {title: "Users", users: users.users});
//   res.render('index');
// })); 




