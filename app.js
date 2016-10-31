// System Requires
const fs = require('fs')

// Package Requires
const express = require('express')
const expressLiquid = require ('express-liquid')

// Local Requires
const data = require('./data/user-data.json')

// Server variables
const app = express()
const PORT = process.env.PORT || 3000

// Liquid engine options
const options = {
  includeFile: (filename, callback) => {
    fs.readFile(filename, 'utf8', callback)
  },

  context: expressLiquid.newContext(),
  customTags: {},
  traceError: false
}

// Where to serve static files from
app.use('/static', express.static(__dirname + '/assets'))

// Sets up Liquid as the view engine
app.set('view engine', 'liquid')
app.engine('liquid', expressLiquid(options))
app.use(expressLiquid.middleware)

// Renders the page on visiting home
app.get('/*', (req, res) => {
  res.locals.data = data
  res.locals.url = req.path
  res.render('layout')
})

// Runs the app
app.listen(PORT, () => {
  console.log('Example app listening on port 3000!')
})
