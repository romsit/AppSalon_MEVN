<script setup>
import SelectedService from '../../components/SelectedService.vue'
import { useAppointmentsStore } from '@/stores/appointments';

const appointments = useAppointmentsStore()
</script>

<template>
    <main>
        <h2 class="text-4xl font-extrabold text-white mt-10">Detalles cita y resumen.</h2>
        <p class="text-white text-lg mt-5"> A continuacion verifica la informacion y confirma tu cita.</p>

        <h3 class="text-3xl font-extrabold text-white mt-5">Servicios</h3>

        <div class="grid gap-5 mt-5">
            <SelectedService v-for="service in appointments.services" :key="service._id" :service="service" />
        </div>
    </main>
</template>