import express from 'express'
import { createAppointment } from '../controllers/apppointnentController.js'
import authMiddleware from '../middleware/authMiddleware.js'

const router = express.Router()

router.route('/')
    .post(authMiddleware, createAppointment)

export default router