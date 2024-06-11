import { parse, formatISO, startOfDay, endOfDay } from 'date-fns'
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

const getAppointmentsByDate = async (req, res) => {
    const { date } = req.query

    const newDate = parse(date, 'dd/MM/yyyy', new Date())
    const isoDate = formatISO(newDate)
    const appointments = await Appointment.find({ date: {
        $gte : startOfDay(new Date(isoDate)),
        $lte: endOfDay(new Date(isoDate))
    }})

    res.json(appointments)
}

export {
    createAppointment,
    getAppointmentsByDate
}