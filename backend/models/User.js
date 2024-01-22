import mongoose from 'mongoose'
import { uniqueId } from '../utills/index.js'

const userSchema = mongoose.Schema({
    name: {
        type: String,
        require: true,
        trim: true
    },
    password:{
        type: String,
        require: true,
        trim: true
    },
    email : {
        type: String,
        require: true,
        trim: true,
        unique: true
    },
    token : {
        type: String,
        default: () => uniqueId()
    },
    verified: {
        type: Boolean,
        default: false
    },
    admin: {
        type: Boolean,
        default: false
    }
})

const User = mongoose.model('User', userSchema)

export default User