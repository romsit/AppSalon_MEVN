import express from 'express'
import {createService, getServices, getServiceById, updateService, deleteService} from '../controllers/servicesController.js'

const router = express.Router()

router.post('/', createService)
router.get('/', getServices)
router.get('/:id', getServiceById)
router.put('/:id', updateService)
router.delete('/:id', deleteService)

export default router