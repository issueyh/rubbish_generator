const express = require('express')
const exphbs = require('express-handlebars')
const hbshelpers = require('handlebars-helpers')()
const generateRubbish = require('./generator_rubbish')
const app = express()
const port = 3000

app.engine('hbs', exphbs({ defaultLayout: 'main', extname: '.hbs' }))
app.set('view engine', 'hbs')

app.use(express.urlencoded({ extended: true }))

app.get('/', (req, res) => {
    res.render('index')
})

app.post('/', (req, res) => {
    const character = req.body.character
    const rubbish = generateRubbish(character)
    res.render('index', { character, rubbish })
})

app.listen(port, () => {
    console.log(`The Express server is running on http://localhost:${port}`)
})