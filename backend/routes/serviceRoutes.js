import express from 'express'
import { getServices } from '../controllers/servicesController.js'

const router = express.Router()

router.get('/', getServices)

export default router