var express = require('express');
var router = express.Router();
var heading = require('../services/heading')
var quotes = require('../services/quotes')


/* GET home page. */
// router.use: invoked for any requests passed to this router

/* @TODO DEBUG
router.use(function (req, res, next) {
  quotes.getAllQuotes().then(function (quoteCollection) {
    req.quotes = quoteCollection
    next()
  }).catch(function (err){
    console.log('index.js - get error:', JSON.stringify(err,null,2))
    next()
  })
})
*/

//@TODO how to use req,res properly
/*
router.use(function(req, res) {
  quotes.getSpecificQuote()
})
*/
//show test-function

// Console-Test if contentful connection is provided
  /*
  router.use(function(req,res) {
    quotes.consoleTest()
  })
  */


router.get('/', function(req, res) {
  res.render('index', { 
    'heading': "Walter Röhrl Zitate",
    //'quotes': req.quotes, 
    //'quote': req.quote,
  })
})

module.exports = router;
