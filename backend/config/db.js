import mongoose from 'mongoose'

export const db = async () => {
    try {
        const db = await mongoose.connect(process.env.MONGO_URI)
        const url = `${db.connection.host}:${db.connection.port}`
        console.log('Conexion exitosa:', url)
    } catch (error) {
        console.log('Error: ${error.message')
        process.exit(1)
    }
}