var client = require('./contentfulClient').client

function getQuote (id, query) {
  query = query || {}
  query['content_type'] = 'quotes'
  query['sys.id'] = id
  return client.getEntries(query)
}

function getQuotes (query) {
  query = query || {}
  query.content_type = 'quotes'
  return client.getEntries(query)
}

module.exports = {
  getQuote,
  getQuotes,
}

