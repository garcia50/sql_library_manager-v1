//Set dependencies and add them to variables
const express = require('express');
const router  = express.Router();

//Setup index/homepage path to render welcome pug view
router.get('/', (req, res) => {
  res.render('welcome');
});


//Expose router as a module
module.exports = router;
