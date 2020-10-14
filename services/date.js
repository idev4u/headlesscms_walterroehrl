
function getDate() {
  var today = new Date()
  //format into dd.mm.yyyy
  var dd = String(today.getDate()).padStart(2, '0')
  var mm = String(today.getMonth() + 1).padStart(2, '0') //January is 0!
  var yyyy = today.getFullYear()

  today = dd + '.' + mm + '.' + yyyy
  return today
}

module.exports = {
  getDate
}