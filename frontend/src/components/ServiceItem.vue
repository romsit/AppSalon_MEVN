<script setup>
    defineProps({
        service: {
            type: Object
        }
    })
</script>

<template>
    <div class="p-5 space-y-5 rounded-lg cursor-pointer bg-white">
        <p class="text-2xl font-light">{{ service.name }}</p>
        <p class="text-2xl font-black text-blue-800">€ {{ service.price }}</p>
    </div>
</template>