import { services } from '../data/beautyServices.js'

const getServices = (req, res) => {
    res.json(services)
}

export {
    getServices
}