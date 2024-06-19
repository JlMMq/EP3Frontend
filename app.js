const express = require('express')
const config = require('./public/scripts/config')

const app = express()
app.use(express.json())
app.use(express.urlencoded({extended: false}))


app.get('/', (req, res) => {
    console.log('index.html')
    res.sendFile(__dirname + '/public/index.html')
})

/*
app.post('/solicitud',(req,res) => {
    const solicitud = {
        nombre: `${req.body.name}`,
        correo: `${req.body.email}`,
        asunto: `${req.body.subject}`,
        mensaje: `${req.body.message}`
    }
    console.log('Enviado por: ' + solicitud.nombre +'\n'
        + 'Con correo: ' + solicitud.correo + '\n'
        + 'Asunto: ' + solicitud.asunto + '\n'
        + 'Mensaje: ' + solicitud.mensaje  
    )
    res.sendFile(__dirname + '/public/contact.html')
})
*/

app.use(express.static('public'))

app.listen(config.port, () => {
    console.log(`Servidor corriendo en el puerto ${config.port}, http://localhost:3000`)
})