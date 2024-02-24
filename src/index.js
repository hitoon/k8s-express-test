const express = require('express')

const app = express()
const port = 3000

app.get('/healthcheck', async (req, res, next) => {
  res.send('{"healthcheck" : "ok"}')
})

app.get('/', async (req, res, next) => {
  res.send(`hostname: ${process.env.HOSTNAME}`)
})

app.listen(port, () => {
  console.log('🚀 app started. port:' + port)
})
