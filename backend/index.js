import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import { db } from './config/db.js'
import servicesRoutes from './routes/servicesRoutes.js'

//Variables de entorno
dotenv.config()

// Configurar la app
const app = express()

// Leer datos via body
app.use(express.json())

// Conectar a DB
db()

//Confirgurar CORS
const whitelist = [process.env.FRONTEND_URL, undefined]

const corsOptions = {
    origin: function(origin, callback) {
        if(whitelist.includes(origin)) {
            //permite
            callback(null, true)
        } else {
            // no permite
            callback(new Error('Error de CORS'))
        }
    }
}
app.use(cors(corsOptions))

// Definir una ruta
app.use('/api/services', servicesRoutes)
// Definir puerto
const PORT = process.env.PORT || 4000

// Arrancar la app
app.listen(PORT, () => {
    console.log('El servidor se esta ejecutando en el perto:', PORT)
})