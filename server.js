const express = require('express')
const app = express()

app.set('view engine', 'ejs')

app.get('/', (req, res) => {
     res.render('home')
})

const aboutRouter = require('./routes/contact')
app.use('/contact', aboutRouter)

const projectsRouter = require('./routes/projects')
app.use('/projects', projectsRouter)

const servicesRouter = require('./routes/services')
app.use('/services', servicesRouter)

app.listen(3000)

