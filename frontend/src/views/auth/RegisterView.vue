<script setup>
</script>

<template>
    <div>
        <h1 class="text-6xl font-extrabold text-white text-center mt-10">Crea una cuenta</h1>
        <p class="text-2xl text-white text-center my-5"> Crea una cuenta en AppSalon</p>

        <FormKit type="form" :actions="false" incomplete-message="No se pudo enviar, revisa las notificaciones">
            <FormKit type="text" label="Nombre" name="name" placeholder="Tu Nombre" validation="required|length:3"
                :validation-messages="{ required: 'El nombre es obligatorio', length: 'El nombre es muy corto' }">
            </FormKit>
            <FormKit type="email" label="Email" name="email" placeholder="Tu correo" validation="required|email"
                :validation-messages="{ required: 'El correo es obligatorio', email: 'El correo no es valido.' }">
            </FormKit>
            <FormKit type="password" label="Contrasena" name="password" placeholder="Contrasena - Min 8 caracteres"
                validation="required|length:8"
                :validation-messages="{ required: 'La contrasena es obligatoria', length: 'La contrasena debe contener al menos 8 caracteres' }">
            </FormKit>

            <FormKit type="password" label="Repetir contrasena" name="password_confirm"
                placeholder="Repite tu contrasena." validation="required|confirm"
                :validation-messages="{ required: 'La contrasena es obligatoria', confirm: 'Las contrasenas no son iguales.' }">
            </FormKit>

            <FormKit type="submit"> Crear Cuenta</FormKit>

        </FormKit>
    </div>
</template>