import './style.css'

const btnBuscarInfo = document.querySelector('[data-js="btnBuscarInfo"]')
const contResponse = document.querySelector('[data-js="contResponse"]')

const url = 'https://exchangenow.net/ajax-fn?function=multiploMoeda&p1=2'

const url2 =
  'https://exchangenow.net/ajax-fn?function=taxas_remessas&p1=2&p2=10000&p3=0&p4=5.1970'

btnBuscarInfo.addEventListener('click', () => {
  buscaDadosExchangeNow(url2)
})

async function buscaDadosExchangeNow(url) {
  await fetch(url)
    .then(response => {
      response.json().then(data => {
        Object.keys(data).map(key => {
          const newDiv = document.createElement('ul')
          newDiv.innerHTML = `<li>${key}: ${data[key]}</li>`
          contResponse.appendChild(newDiv)
        })
      })
    })
    .catch(error => {
      console.log(error)
    })
}
