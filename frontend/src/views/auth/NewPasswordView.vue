<script setup>
import { onMounted, inject, ref } from 'vue';
import { useRoute, useRouter } from 'vue-router'
import AuthAPI from '@/api/AuthAPI';

const toast = inject('toast')
const route = useRoute()
const router = useRouter()
const { token } = route.params

const validToken = ref(false)

onMounted(async () => {
    try {
        const { data } = await AuthAPI.verifyPasswordResetToken(token)
        validToken.value = true
    } catch (error) {
        toast.open({
            message: error.response.data.msg,
            type: 'error'
        })
    }
})

const handleSubtmit = async ({password}) => {
    try {
        const { data } = await AuthAPI.updatePassword(token, {password})
        toast.open({
            message: data.msg,
            type: 'success'
        })
        setTimeout(() => {
            router.push({name: 'login'})
        }, 2000)
    } catch(error) {
        toast.open({
            message: error.response.data.msg,
            type: 'error'
        })
    }
}
</script>

<template>
    <div>
    <div v-if="validToken">
        <h1 class="text-6xl font-extrabold text-white text-center mt-10">Nueva contraseña</h1>
        <p class="text-2xl text-white text-center my-5">Coloca tu nueva contraseña</p>

        <FormKit id="newPasswordForm" type="form" :actions="false"
            incomplete-message="No se pudo enviar, revisa las notificaciones" @submit="handleSubtmit">

            <FormKit type="password" label="Contrasena" name="password" placeholder="Contrasena - Min 8 caracteres"
                validation="required|length:8"
                :validation-messages="{ required: 'La contrasena es obligatoria', length: 'La contrasena debe contener al menos 8 caracteres' }">
            </FormKit>


            <FormKit type="submit">Guardar contraseña </FormKit>
        </FormKit>
    </div>
    <div v-else>
        <p class="text-center text-2xl font-black text-white">Token no válido</p>

    </div>
</div>
</template>