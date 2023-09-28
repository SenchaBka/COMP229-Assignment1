const express = require('express')
const app = express()

app.set('view engine', 'ejs')

app.get('/', (req, res) => {
     res.render('home')
})

const aboutRouter = require('./routes/about')
app.use('/about', aboutRouter)

app.listen(3000)

