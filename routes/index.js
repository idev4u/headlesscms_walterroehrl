var express = require('express')
var router = express.Router()
var quotes = require('../services/quotes')
var date = require('../services/date')
var schedule = require('node-schedule');


/* Probably not needed anymore
router.use(function(req,res, next) {
  quotes.getQuotes().then(function (quoteofTheDay) {
    //run function everyday at midnight: https://stackoverflow.com/questions/51301301/how-would-i-get-a-function-to-run-every-24-hours-on-a-server/51301855
    //quoteOfTheDay Mitternacht switchen (über env variables fakebar?)
    //Datum im Frontend anzeigen
    req.randomQuote = quoteofTheDay.items[Math.floor(Math.random() * quoteofTheDay.items.length)]
    next()
  })
  .catch(function (err) {
    console.log('quotes.js - getQuotes error:', JSON.stringify(err,null,2))
    next()
  })
})
*/

//set intial quote after server start
quotes.getQuotes().then(function (randomQuote) {
  quoteOfTheDay = randomQuote.items[Math.floor(Math.random() * randomQuote.items.length)]
  //console.log('intitial quote test: '+ randomQuote.items.length)
})
.catch(function (err) {
  console.log('quotes.js - getQuotes error:', JSON.stringify(err,null,2))
})

//cron job to reroll the quote of the day once a day at midnight
//scheduleJob: seperated stars/numbers are corresponding second(optional)/minute/hour/day of month/month/day of week
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
