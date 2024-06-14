<script setup>
import { ref } from 'vue'
import VueTailwindDatepicker from 'vue-tailwind-datepicker'
import SelectedService from '../../components/SelectedService.vue'
import { useAppointmentsStore } from '@/stores/appointments';

const appointments = useAppointmentsStore()

const formatter = ref({
    date: 'DD/MM/YYYY',
    month: 'MMM'
})

const disableDate = (date) => {
    const today = new Date()
    return date < today || date.getMonth() > today.getMonth() + 1 || [0,6].includes(date.getDay())
}
</script>

<template>
    <main>
        <h2 class="text-4xl font-extrabold text-white mt-10">Detalles cita y resumen.</h2>
        <p class="text-white text-lg mt-5"> A continuacion verifica la informacion y confirma tu cita.</p>

        <h3 class="text-3xl font-extrabold text-white mt-5">Servicios</h3>

        <p v-if="appointments.noServicesSelected" class="text-white text-2xl mt-5 text-center"> No hay servicios
            seleccionados.</p>
        <div v-else class="grid gap-5 mt-5">
            <SelectedService v-for="service in appointments.services" :key="service._id" :service="service" />
            <p class="text-right text-white text-2xl">
                Total a pagar:
                <span class="font-black"> €{{ appointments.totalAmount }}</span>
            </p>
        </div>

        <div class="space-y-8" v-if="!appointments.noServicesSelected">
            <h3 class="text-3xl font-extrabold text-white"> Fecha y hora</h3>

            <div class="lg:flex gap-5 items-start">
                <div class="w-full lg:w-96 bg-white justify-center flex rounded-lg">
                    <VueTailwindDatepicker :disable-date="disableDate" i18n="es" as-single no-input :formatter="formatter"
                        v-model="appointments.date" />
                </div>
                <div v-if="appointments.isDateSelected" class="flex-1 grid grid-cols-1 xl:grid-cols-2 gap-5 mt-10 lg:mt-0">
                    <button class="block text-blue-500 rounded-lg text-xl font-black p-3 disabled:opacity-10" v-for="hour in appointments.hours"
                        :key="hour.id" @click="appointments.time = hour"
                        :class="appointments.time === hour ? 'bg-blue-500 text-white' : 'bg-white'"
                        :disabled="appointments.disableTime(hour) ? true : false "> {{ hour }}
                    </button>
                </div>
            </div>
            <div v-if="appointments.isValidReservation" class="flex justify-end">
                <button @click="appointments.saveAppointment" type="button" class="w-full md:w-auto bg-blue-500 p-3 rounded-lg uppercase font-black text-white">Confirmar Reservacion</button>
            </div>
    </div>
</main></template>