const express = require('express')

const app = express()

app.use(express.static('./dist/oitava-aula'))

app.get('/*', (req, res) => {
  res.sendFile('index.html', {root: 'dist/oitava-aula/'})
})

app.listen(process.env.PORT || 8080)