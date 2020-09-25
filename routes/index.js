var express = require('express')
var router = express.Router()
var quotes = require('../services/quotes')

//index.js not used! -> see at app.js


/* GET home page. */
// router.use: invoked for any requests passed to this router
router.use(function (req, res, next) {
  quotes.getQuotes().then(function (quoteCollection) {
    req.quotes = quoteCollection
    next()
  }).catch(function (err) {
    console.log('index.js - getQuotes error:', JSON.stringify(err,null,2))
    next()
  })
})
  
router.get('/', function (req, res, next) {
  res.render('quotes', {
    'heading': 'Walter Röhrl Zitate',
    'quotes': req.quotes
  })
})

module.exports = router
