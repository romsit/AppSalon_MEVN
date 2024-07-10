<script setup>
    import { displayDate } from '../helpers/date'
    defineProps({
        appointment: {
            type: Object
        }
    })
</script>

<template>
          <div 
              class="bg-white p-5 space-y-3 rounded-lg"
          >
                <p class="text-gray-500 font-black">
                    Fecha: <span class="font-light"> {{ displayDate( appointment.date ) }} </span>
                    Hora: <span class="font-light"> {{ appointment.time }} Horas.</span>
                </p>

                <p class="text-gray-500 font-black">
                    Nombre Cliente: <span class="font-light"> {{ appointment.user.name }} </span>
                    Email: <span class="font-light"> {{ appointment.user.email }} </span>
                </p>

                <p class="text-lg font-black">Servicios Solicitados en la cita</p>
                <div v-for="service in appointment.services" :key="service.id">
                    <p>{{ service.name }}</p>
                    <p class="text-2xl font-black text-blue-500">€{{ service.price }}</p>
                </div>

                <p class="text-2xl font-black text-right">
                    Total a pagar: <span class="text-blue-600">€ {{ appointment.totalAmount }} </span>
                </p>
            </div>
</template>