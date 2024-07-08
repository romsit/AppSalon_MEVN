<script setup>
</script>

<template>
    <div>
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
</template>