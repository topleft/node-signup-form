var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('index');
});

router.post('/submit', function(req, res){
  console.log(req.body.email);
  res.redirect('/success')
})

router.get('/success', function(req, res){
  res.render('success');
})

module.exports = router;
