const express = require('express')
const Router = express.Router()

Router.get('/example', (req, res, next) => {
  res.json({
    example: 'example'
  })
})

module.exports = Router