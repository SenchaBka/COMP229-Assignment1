const express = require('express')
const app = express()

app.get('/', (req, res, next) => {
    res.render('home.html')
})

app.listen(3000)

