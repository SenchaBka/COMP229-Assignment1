/* server.js - Arsenii Buriak - 301266501 - 01/10/23 */

const express = require('express')
const app = express()

app.set('view engine', 'ejs')

app.use(express.static('public/stylesheets'))
app.use(express.static('public/images'))

const indexRouter = require('./routes/index')
app.use('/', indexRouter)

app.listen(3000)
console.log('Server running at http://localhost:3000/')