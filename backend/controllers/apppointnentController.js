import Appointment from "../models/Appointment.js"

const createAppointment = async (req, res) => {
    const appointment = req.body
    appointment.user = req.user._id.toString()
    try {
        const newAppointment = new Appointment(appointment)
        await newAppointment.save()

        res.json({
            msg: 'Cita almacenada correctamente'
        })
    } catch (error) {
        console.log(error)
    }
}

export {
    createAppointment
}