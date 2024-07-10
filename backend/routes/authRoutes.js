import express from 'express'
import { register, verifyAccount, login, forgotPassword, verifyPasswordResetToken, updatePassword, user, admin } from '../controllers/authController.js'
import authMiddleware from '../middleware/authMiddleware.js'

const router = express.Router()

// Rutas de autenticacion y registro de usuarios

router.post('/register', register)
router.get('/verify/:token', verifyAccount)
router.post('/login', login)
router.post('/forgot-password', forgotPassword)
router.route('/forgot-password/:token')
    .get(verifyPasswordResetToken)
    .post(updatePassword)

//Area Privada - Requiere un JWT
router.get('/user', authMiddleware, user)
router.get('/admin', authMiddleware, admin)


export default router