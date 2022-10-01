const express = require('express')
const app = express()
const port = 3000
const morgan = require('morgan')

app.get('/home', (req, res) => {
    return res.send('hello guys')})

app.use(morgan('combined'))
app.listen(port, () => console.log(`App listening at http://localhost:${port}`))
