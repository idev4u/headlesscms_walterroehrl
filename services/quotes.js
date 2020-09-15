var client = require('./contentfulClient').client

function getQuote(query) {
  // little trick to get an entry with include
  // this way all linked items will be resolved for us
  query = query || {}
  query['content_type'] = 'quotes' 
  //query['fields.slug'] = slug
  return client.getEntries(query)
}

function getQuotes (query) {
    query = query || {}
    query.content_type = 'product'
    return client.getEntries(query)
  }

module.exports = {
    getQuote,
    getQuotes
}
// alle quotes ein mal holen und cachen? dann zufallsauswahl des "Zitat des Tages" und bedenken, dass das gleiche Zitat z.B. nicht mehr als 1x die Woche ausgewählt werden kann