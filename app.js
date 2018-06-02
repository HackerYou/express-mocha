const express = require('express')

const app = express()

app.get('/hello', (req, res) => {
  res.json('Hello, world!')
})

app.listen(3000, () => 'Listening on 3000')

module.exports = app
