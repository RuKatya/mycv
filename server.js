//EXPRESS
const express = require('express');
const app = express();

//PATH
const path = require('path')

//PORT
const PORT = process.env.PORT || 5000;

app.use(express.static(path.resolve(__dirname, 'client')))

//ROUTES
const enRoute = require('./route/enRoute')
const heRoute = require('./route/heRoute')

app.use('/english', enRoute)
app.use('/hebrew', heRoute)

app.get('/', (req, res) => {
    res.status(200) //default status
    res.sendFile(path.join(__dirname, 'client', 'en', 'index.html'))
})

app.listen(PORT, () => {
    console.log(`listen to http://localhost:${PORT}`)
})