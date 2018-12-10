const express = require('express')
const app = express()

app.get('/', (request, response) => {
  response.send('<p>Hola Express</p>')
})

app.get('/personas', (request, response) => {
  response.redirect('/empleados')
})

app.get('/empleados', (request, response) => {
  let personas = ['Juan', 'José', 'Pedro']
  response.json(personas)
})

app.get('/personasHTML', (request, response) => {
  let personas = '<ul><li>Juan</li><li>José</li><li>Pedró</li></ul>'
  response.send(personas)
})

app.listen(3000, () => {
  console.log('Escuchando en el puerto 3000')
})
