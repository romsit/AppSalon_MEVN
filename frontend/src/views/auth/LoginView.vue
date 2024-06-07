<script setup>
import { inject } from 'vue'
import { useRouter } from 'vue-router'
import AuthApi from '../../api/AuthAPI'

const toast = inject('toast')
const router = useRouter()

const handleSubtmit = async (formData) => {
    try {
        const { data: { token } } = await AuthApi.login(formData)
        localStorage.setItem('AUTH_TOKEN', token)
        router.push({name: 'my-appointments'})
        // toast.open({
        //     message: data.msg, type: 'success'
        // })
        // reset('loginForm')
    } catch (error) {
        toast.open({ 
            message: error.response.data.msg, type: 'error'
        })
    }
}
</script>

<template>
     <div>
        <h1 class="text-6xl font-extrabold text-white text-center mt-10">Iniciar Sesión</h1>
        <p class="text-2xl text-white text-center my-5">Si tienes una cuenta, inicia sesión.</p>

        <FormKit id="loginForm" type="form" :actions="false" incomplete-message="No se pudo enviar, revisa las notificaciones"
            @submit="handleSubtmit">
            <FormKit type="email" label="Email" name="email" placeholder="Email de usuario" validation="required|email"
                :validation-messages="{ required: 'El correo es obligatorio', email: 'El correo no es valido.' }">
            </FormKit>
            <FormKit type="password" label="Contrasena" name="password" placeholder="Contrasena"
                validation="required"
                :validation-messages="{ required: 'La contrasena es obligatoria', length: 'La contrasena debe contener al menos 8 caracteres' }">
            </FormKit>
            <FormKit type="submit">Iniciar sesión</FormKit>

        </FormKit>
    </div>
</template>