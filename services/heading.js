var client = require('./contentfulClient').client

function getHeading(query) {
    // little trick to get an entry with include
    // this way all linked items will be resolved for us
    query = query || {}
    query['content_type'] = 'heading' 
    return client.getEntries(query)
  }
  

  //or this function?
  /*
  function getHeading (id, query) {
    // little trick to get an entry with include
    // this way all linked items will be resolved for us
    query = query || {}
    query['content_type'] = 'heading'
    query['sys.id'] = id
    return client.getEntries(query)
  }
  */
 
  module.exports = {
      getHeading
  }