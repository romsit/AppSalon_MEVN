<script setup>
import { useRoute } from 'vue-router'
import { useAppointmentsStore } from '@/stores/appointments';
import { onMounted } from 'vue';

const route = useRoute()
const appointments = useAppointmentsStore()

onMounted(() => {
    appointments.clearAppointmentData()
})
</script>

<template>
    <div>
        <nav class="my-5 flex gap-3">
            <RouterLink :to="{ name: 'new-appointment' }" class="flex-1 text-center p-3 uppercase font-extrabold hover:bg-blue-600 hover:text-white" :class="route.name === 'new-appointment' ? 'bg-blue-500 text-white' : 'bg-white text-blue-500'">
                Servicios 
            </RouterLink>
            <RouterLink :to="{ name: 'appointment-details' }" class="flex-1 text-center p-3 uppercase font-extrabold hover:bg-blue-600 hover:text-white" :class="route.name === 'appointment-details' ? 'bg-blue-500 text-white' : 'bg-white text-blue-500'">
                Cita y Resumen 
            </RouterLink>
        </nav>
        <div>        
            <RouterView />
        </div>

    </div>
</template>