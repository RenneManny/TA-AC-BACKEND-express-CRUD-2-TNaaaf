var express = require('express');
var router = express.Router();
// importing Schema
var Article=require("../models/blog")
/* GET users listing. */
router.get('/', function(req, res, next) {
  // res.render('updateForm');
  
});
router.get('/new', function(req, res, next) {
  res.render('add.ejs');
});

// router.get("/new",(req,res)=>{
//   res.render('');
// })

module.exports = router;
