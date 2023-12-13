import mongoose from 'mongoose'
import { services } from '../data/beautyServices.js'
import Services from '../models/Services.js'

const createService = async (req, res) => {
    if(Object.values(req.body).includes('')) {
        const error = new Error( 'Todos los campos son obligatorios.')
        return res.status(400).json({
            msg: error.message
        })
    }

    try {
        const service = new Services(req.body)
        const result = await service.save()
        res.json({
            msg: 'El servicio se creo correctamente.'
        })
    } catch (error) {
        console.log(error)
    }
}

const getServices = (req, res) => {
    res.json(services)
}

const getServiceById = async (req, res) => {
    const { id } = req.params
    // validar un objeto id
    if(!mongoose.Types.ObjectId.isValid(id)) {
        const error = new Error('Id no es valido.')

        return res.status(400).json({
            msg: error.message
        })
    }
    //Validar que existe
    const service = await Services.findById(id) 
    if(!service) {
        const error = new Error('El servicio no existe.')

        return res.status(404).json({
            msg: error.message
        })
    }

    //Mostrar el servicio
    res.json(service)
}

const updateService = async (req, res) => {
    const { id } = req.params
    // validar un objeto id
    if(!mongoose.Types.ObjectId.isValid(id)) {
        const error = new Error('Id no es valido.')

        return res.status(400).json({
            msg: error.message
        })
    }
    //Validar que existe
    const service = await Services.findById(id) 
    if(!service) {
        const error = new Error('El servicio no existe.')

        return res.status(404).json({
            msg: error.message
        })
    }
// Escrbibimos en el objeto los valores nuevos 
    service.name = req.body.name || service.name
    service.price = req.body.price || service.price

    try {
        await service.save()
        res.json({
            msg: 'El servicio se actualizo correctamente.'
        })
    } catch (error) {
        console.log(error)
    }
}

export {
    createService,
    getServices,
    getServiceById,
    updateService
}