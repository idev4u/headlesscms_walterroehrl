var express = require('express')
var router = express.Router()
var quotes = require('../services/quotes')

/* router params for specific quote */
router.param('id', function (req, res, next, id) {
  quotes.getQuote(id).then(function (quote) {
    req.quote = quote.items[0]
    next()
  }).catch(function (err) {
    console.log('quotes.js - getQuote error:', JSON.stringify(err,null,2))
    next()
  })
})

// router.use: invoked for any requests passed to this router
// console.logs are irrelevant, just there to debug if smth wents wrong with the contentful connection
router.use(function (req, res, next) {
  quotes.getQuotes().then(function (quoteCollection) {
    //console.log("Quote Collection test: "+ JSON.stringify(quoteCollection.items[0]))
    req.quotes = quoteCollection.items
    //console.log("Console req.quotes test: "+JSON.stringify(req.quotes[0]))
    next()
  }).catch(function (err) {
    console.log('quotes.js - getQuotes error:', JSON.stringify(err,null,2))
    next()
  })
})

//Test to check if connection to contentful is provided
/*
router.use(function(req,res, next) {
  quotes.consoleTest()
  quotes.consoleTest2()
  next()
})
*/


router.get('/quotes/:id', function (req, res, next) {
  res.render('quote', {title: req.quote.fields.zitat, quote: req.quote}) //an meine Anforderung anpassen
})

router.get('/quotes', function (req, res, next) {
  res.render('quotes', {
    'title': 'Quotes',
    'quotes': req.quotes
  })
})

router.get('/', function (req, res, next) {
  res.render('quotes', {
    'title': 'Quotes',
    'quotes': req.quotes
  })
})

module.exports = router
