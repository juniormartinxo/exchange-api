const fetch = require('node-fetch')

const url = 'https://exchangenow.net/ajax-fn?function=multiploMoeda&p1=2'

const url2 =
  'https://exchangenow.net/ajax-fn?function=taxas_remessas&p1=2&p2=10000&p3=0&p4=5.1970'

function buscaDadosExchangeNow(url) {
  fetch(url)
    .then(response => {
      response.json().then(data => {
        console.log(data)
      })
    })
    .catch(error => {
      console.log(error)
    })
}

buscaDadosExchangeNow(url)
buscaDadosExchangeNow(url2)
