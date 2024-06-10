<script setup>
import { useUserStore } from '../../stores/user'

const user = useUserStore()
</script>

<template>
    <div>
        <h2 class="text-4xl font-extrabold text-white mt-10">Mis Citas</h2>
        <p class="text-white text-lg mt-5"> Podrás administrar tus próximas citas.</p>
        
    </div>
</template>