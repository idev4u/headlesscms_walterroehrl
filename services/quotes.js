var client = require('./contentfulClient').client

function getQuote (id) {
  
  //query = query || {}
  //query['content_type'] = 'quotes'
  //query['fields.id'] = id
  //return client.getEntries(query)

  return client.getEntry("\'"+id+"\'")
}

//possible solution to get 1 heading/quote???
/*
function getBrand (brandId) {
  return client.getEntries({'sys.id': brandId})
}
*/

function getQuotes (query) {
  query = query || {}
  query.content_type = 'quotes'
  return client.getEntries(query)
}

// alle quotes ein mal holen und cachen? dann zufallsauswahl des 
// "Zitat des Tages" und bedenken, dass das gleiche Zitat z.B. nicht mehr als 1x die Woche ausgewählt werden kann

//Filter here or in Routing with getquotes function??
/*
function getQuoteOfTheDay(query) {
  query = query || {}
  query.content_type = 'quotes'
  //add filter
  entries = client.getEntries(query)
  quoteOfTheDay = entries[Math.floor(Math.random() * entries.length)]
  //console.log(quoteOfTheDay.items)
  return quoteOfTheDay
}
*/

module.exports = {
  getQuote,
  getQuotes,
}

