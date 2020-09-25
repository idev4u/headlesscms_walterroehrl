var client = require('./contentfulClient').client

function getQuote (id) {
  // little trick to get an entry with include
  // this way all linked items will be resolved for us
  
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

function consoleTest() {
  client.getEntry('3YwxOVzkjhcYu5MfmBGKar')
.then(function (entry) {
  console.log("consoleTest:")
  // logs the entry metadata
  console.log(entry.sys)

  // logs the field with ID title
  console.log(entry.fields.zitat)
})
}

function consoleTest2 (query) {
  query = query || {}
  query.content_type = 'quotes'
  client.getEntries(query)
  .then(function(quotes) {
  console.log("consoleTest2:")
  console.log(quotes.items[1])
  })
}
  

module.exports = {
  getQuote,
  getQuotes,
  consoleTest,
  consoleTest2
}

// alle quotes ein mal holen und cachen? dann zufallsauswahl des 
// "Zitat des Tages" und bedenken, dass das gleiche Zitat z.B. nicht mehr als 1x die Woche ausgewählt werden kann