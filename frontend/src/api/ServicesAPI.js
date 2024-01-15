import api from "../lib/axios"

export default {
    all() {
        return api.get('/services')
    }
}

