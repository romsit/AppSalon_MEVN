<script setup>
import { inject } from 'vue'
import { reset} from '@formkit/core'
import AuthAPI from '@/api/AuthAPI';

const toast = inject('toast')

const handleSubtmit = async ({email}) => {
    try {
        const { data } = await AuthAPI.forgotPassword({email})
        toast.open({
            message: data.msg,
            type: 'success'
        })
        reset('forgotPassword')
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
        <h1 class="text-6xl font-extrabold text-white text-center mt-10">Olvide mi contraseña.</h1>
        <p class="text-2xl text-white text-center my-5">Recupera el acceso a tu cuenta..</p>

        <FormKit id="forgotPassword" type="form" :actions="false"
            incomplete-message="No se pudo enviar, revisa las notificaciones" @submit="handleSubtmit">
            <FormKit type="email" label="Email" name="email" placeholder="Email de usuario" validation="required|email"
                :validation-messages="{ required: 'El correo es obligatorio', email: 'El correo no es valido.' }">
            </FormKit>
            <FormKit type="submit">Enviar </FormKit>
        </FormKit>
    </div>

</template>