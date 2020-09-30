var client = require('./contentfulClient').client

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
  consoleTest,
  consoleTest2
  }