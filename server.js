//EXPRESS
const express = require('express');
const app = express();

//PATH
const path = require('path')

//PORT
const PORT = process.env.PORT || 5000;

app.use(express.static(path.resolve(__dirname, 'client')))

//ROUTES
const enRoute = require('./route/enRoute/enRoute')
const aboutRouteEN = require('./route/enRoute/aboutRouteEN')
const moreRouteEN = require('./route/enRoute/moreRouteEN')

const heRoute = require('./route/heRoute/heRoute')
const aboutRouteHE = require('./route/heRoute/aboutRouteHE')

app.use('/english', enRoute)
app.use('/hebrew', heRoute)
app.use('/aboutmeEn', aboutRouteEN)
app.use('/aboutmeHe', aboutRouteHE)
app.use('/moreProjects', moreRouteEN)


app.get('/', (req, res) => {
    res.status(200) //default status
    res.sendFile(path.join(__dirname, 'client', 'en', 'indexEN.html'))
})

app.get('/download', (req, res) => {
    res.download(path.resolve(__dirname, 'cv', 'cv.pdf'))
})

app.listen(PORT, () => {
    console.log(`listen to http://localhost:${PORT}`)
})