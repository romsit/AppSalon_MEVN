<script setup>
import { onMounted, inject } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import AuthAPI from '../../api/AuthAPI'

const toast = inject('toast')
const router = useRouter()
const route = useRoute()
const { token } = route.params

onMounted(async () => {
    try {
        const { data } = await AuthAPI.verifyAccount(token)
        toast.open({
            message: data.msg,
            type: 'success'
        }) 
        setTimeout(() => {
            router.push({name: 'login'})
        }, 5000)
    } catch (error) {
        toast.open({
            message: error.response.data.msg,
            type: 'error'
        })
    }
})
</script>

<template>
    <div>
        <h1 class="text-6xl font-extrabold text-white text-center mt-10">Verificar cuenta</h1>
    </div>
</template>