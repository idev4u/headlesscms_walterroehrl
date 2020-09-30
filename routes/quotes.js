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

//routing for /quotes/(id optional)
router.get('/:id', function (req, res, next) {
  res.render('quote', {
    'quote': req.quote.fields.zitat
  }) //an meine Anforderungen anpassen
})

router.get('/', function (req, res, next) {
  res.render('quotes', {
    'heading': 'Walter Röhrl Zitate',
    'quotes': req.quotes
  })
})

module.exports = router
