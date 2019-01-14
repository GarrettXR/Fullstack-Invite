const express = require('express')
const bodyParser = require('body-parser')

const app = express()

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

app.use('/api', require('./routes/invites'))

app.listen(3001, () => {
  console.log('app listening on port 3001')
})
