<script setup>
import { useRoute } from 'vue-router'

const route = useRoute()

const authRoutes = [
    { name: 'register', text: 'Crear una cuenta'},
    { name: 'login', text: 'Iniciar Sesion'},
    { name: 'forgot-password', text: 'Olvide mi password'}
]
</script>

<template>
    <div class="mx-auto lg:w-3/5 mt-20">
        <RouterView />

        <nav class="mt-10 flex flex-col items-center space-y-5 lg:flex-row lg:justify-between lg:space-y-0">
            <RouterLink 
                v-for="authRoute in authRoutes"
                :key="authRoute.id"
                class="uppercase font-bold text-white"
                :class="{'hidden' : route.name === authRoute.name}"
                :to="{name: authRoute.name }"
            >{{  authRoute.text  }}</RouterLink> 

        </nav>
    </div>
</template>