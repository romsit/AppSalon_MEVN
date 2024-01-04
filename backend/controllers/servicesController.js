import { services } from '../data/beautyServices.js'
import Services from '../models/Services.js'
import { validateObjectId, handleNotFoundError } from '../utills/index.js'

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

const getServices = async (req, res) => {
    try {
        const services = await Services.find()
        res.json(services)
    } catch (error) {
        console.log(error)
    }
}

const getServiceById = async (req, res) => {
    const { id } = req.params
    // validar un objeto id
    if(validateObjectId(id, res)) return
    //Validar que existe
    const service = await Services.findById(id) 
    if(!service) {
        return handleNotFoundError('El servicio no existe.', res)
    }
    //Mostrar el servicio
    res.json(service)
}

const updateService = async (req, res) => {
    const { id } = req.params
    // validar un objeto id
    if(validateObjectId(id, res)) return
    //Validar que existe
    const service = await Services.findById(id) 
    if(!service) {
        return handleNotFoundError('El servicio no existe.', res)
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

const deleteService = async (req, res) => {
    const { id } = req.params
    // validar un objeto id
    if(validateObjectId(id, res)) return
    //Validar que existe
    const service = await Services.findById(id) 
    if(!service) {
        return handleNotFoundError('El servicio no existe.', res)
    }

    try {
         await service.deleteOne()
         res.json({
            msg:'El servicio se elimino correctamente.'
         })
    } catch(error) {
        console.log(error)
    }
}

export {
    createService,
    getServices,
    getServiceById,
    updateService,
    deleteService
}