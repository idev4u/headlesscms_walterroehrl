var express = require('express')
var router = express.Router()
var quotes = require('../services/quotes')
var date = require('../services/date')
var schedule = require('node-schedule');

//set intial quote after server start
quotes.getQuotes().then(function (randomQuote) {
  quoteOfTheDay = randomQuote.items[Math.floor(Math.random() * randomQuote.items.length)]
})
.catch(function (err) {
  console.log('quotes.js - getQuotes error:', JSON.stringify(err,null,2))
})

//cron job to reroll the quote of the day once a day at midnight
//scheduleJob: seperated stars/numbers are corresponding second(optional)/minute/hour/day of month/month/day of week
//for test cases cron job rythm set to 1 minute: schedule.scheduleJob('0 * * * * *', function(){...}
schedule.scheduleJob('0 0 * * *', function(){
  quotes.getQuotes().then(function (randomQuote) {
    quoteOfTheDay = randomQuote.items[Math.floor(Math.random() * randomQuote.items.length)]
    //console.log('cronjob quote test: '+ randomQuote.items.length)
  })
  .catch(function (err) {
    console.log('quotes.js - getQuotes error:', JSON.stringify(err,null,2))
  })
})


//Test to check if connection to contentful is provided
/*
router.use(function(req, res, next) {
  //quotes.consoleTest()
  //quotes.consoleTest2()
})
*/

router.get('/', function (req, res, next) {
  res.render('index', {
    'heading': 'Walter Röhrl Zitate',
    'date': date.getDate(),
    'quoteOfTheDay': quoteOfTheDay
  })
})

module.exports = router
