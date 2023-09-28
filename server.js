const express = require('express')
const app = express()

app.set('view engine', 'ejs')

app.get('/', (req, res) => {
     res.render('home')
})

const aboutRouter = require('./routes/about')
app.use('/about', aboutRouter)

const projectsRouter = require('./routes/projects')
app.use('/projects', projectsRouter)

const contactRouter = require('./routes/contact')
app.use('/contact', contactRouter)

const servicesRouter = require('./routes/services')
app.use('/services', servicesRouter)

app.use(express.static('public/stylesheets'))
app.use(express.static('public/images'))

app.listen(3000)