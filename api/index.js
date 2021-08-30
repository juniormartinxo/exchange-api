const fetch = require('node-fetch')

const url = 'https://exchangenow.net/ajax-fn?function=multiploMoeda&p1=2'

fetch(url)
  .then(response => {
    response.json().then(data => {
      console.log(data)
    })
  })
  .catch(error => {
    console.log(error)
  })
