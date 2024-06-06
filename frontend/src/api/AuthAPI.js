import api from '../lib/axios'

export default {
    register(data) {
        return api.post('/auth/register', data)
    }
}