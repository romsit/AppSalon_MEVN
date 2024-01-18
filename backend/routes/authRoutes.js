import express from 'express'
import { register } from '../controllers/authController.js'

const router = express.Router()

// Rutas de autenticacion y registro de usuarios

router.post('/register', register)

export default router