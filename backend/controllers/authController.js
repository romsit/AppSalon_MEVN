import User from '../models/User.js'

const register = async (req, res) => {

    // Valida todos los campos
    if(Object.values(req.body).includes('')) {
        const error = new Error( 'Todos los campos son obligatorios.')
        return res.status(400).json({
            msg: error.message
        })
    }

    const { email, password, name} = req.body
    // Evitar registros duplicados
    const userExists = await User.findOne({ email })
    if(userExists) {
        const error = new Error('Usuario ya registrado')
        return res.status(400).json({msg: error.message})
    }

    // Validar la extension del password
    const MIN_PASSWORD_LENGTH = 8
    if(password.trim().length < MIN_PASSWORD_LENGTH) {
        const error = new Error(`El password debe contener ${MIN_PASSWORD_LENGTH} caracteres`)
        return res.status(400).json({msg: error.message})
    }


    try {
        const user = new User(req.body)
        await user.save()

        res.json ({ msg: 'El usuario se creo correctamente, revisa tu email.'  })
    } catch (error) {
        console.log(error)
    }
}

export {
    register
}