const express = require('express')
const config = require('./public/scripts/config')

const app = express()
app.use(express.json())
app.use(express.urlencoded({extended: false}))


app.get('/', (req, res) => {
    console.log('index.html')
    res.sendFile(__dirname + '/public/index.html')
})

app.use(express.static('public'))

app.listen(config.port, () => {
    console.log(`Servidor corriendo en el puerto ${config.port}, http://localhost:3000`)
})