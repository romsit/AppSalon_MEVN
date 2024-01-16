<script setup>
import { useAppointmentsStore } from '../stores/appointments'

const appointments = useAppointmentsStore()

    defineProps({
        service: {
            type: Object
        }
    })
</script>

<template>
    <div class="p-5 space-y-5 rounded-lg cursor-pointer" @click="appointments.onServiceSelected(service)" :class="appointments.isServiceSelected(service._id) ? 'bg-blue-500 text-white' : 'bg-white'">
        <p class="text-2xl font-light">{{ service.name }}</p>
        <p class="text-2xl font-black " :class="appointments.isServiceSelected(service._id) ? 'text-white' : 'text-blue-800'">€ {{ service.price }}</p>
    </div>
</template>