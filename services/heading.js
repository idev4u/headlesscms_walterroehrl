var client = require('./contentfulClient').client

function getHeading(query) {
    // little trick to get an entry with include
    // this way all linked items will be resolved for us
    query = query || {}
    query['content_type'] = 'heading' 
    query['sys.id'] = '4RZbv4snIulSMDVe3VMMWI'
    return client.getEntries(query)
  }
 
  module.exports = {
      getHeading
  }