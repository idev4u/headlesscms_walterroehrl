var client = require('./contentfulClient').client


// the requests get JSONS in response (the filter of the content/ the rendering gets done somewhere else)
function getAllQuotes (query) {
    query = query || {}
    query.content_type = 'quotes'
    return client.getEntries(query.fields.zitat)
  }

function getRandomQuote() {
  //get all quotes and choose a random one
}

function getSpecificQuote () {
  return client.getEntry("3YwxOVzkjhcYu5MfmBGKar").fields.zitat
}

function consoleTest() {
  client.getEntry('3YwxOVzkjhcYu5MfmBGKar')
.then(function (entry) {
  // logs the entry metadata
  console.log(entry.sys)

  // logs the field with ID title
  console.log(entry.fields.zitat)
})
}
  
module.exports = {
    getAllQuotes,
    getRandomQuote,
    getSpecificQuote,
    consoleTest
}


// alle quotes ein mal holen und cachen? dann zufallsauswahl des 
// "Zitat des Tages" und bedenken, dass das gleiche Zitat z.B. nicht mehr als 1x die Woche ausgewählt werden kann