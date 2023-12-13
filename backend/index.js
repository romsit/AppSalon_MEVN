import express from 'express'
import dotenv from 'dotenv'
import { db } from './config/db.js'
import servicesRoutes from './routes/serviceRoutes.js'

//Variables de entorno
dotenv.config()

// Configurar la app
const app = express()

// Leer datos via body
app.use(express.json())

// Conectar a DB
db()

// Definir una ruta
app.use('/api/services', servicesRoutes)
// Definir puerto
const PORT = process.env.PORT || 4000

// Arrancar la app
app.listen(PORT, () => {
    console.log('El servidor se esta ejecutando en el perto:', PORT)
})