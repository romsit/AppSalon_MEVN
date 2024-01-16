<script setup>
import { useAppointmentsStore } from '@/stores/appointments';

const appointments = useAppointmentsStore() 

    defineProps({
        service: {
            type: Object
        }
    })
    
 </script>

<template>
    <div class="border border-gray-600 rounded-lg p-5 flex justify-between items-center">
        <div>
        <p class="text-2xl font-extrabold text-white">{{service.name}}</p>
            <p class="text-3xl font-black text-blue-700">€{{ service.price }}</p>
        </div>

        <button type="button" class="inline-flex items-center rounded-md bg-red-600 text-white text-sm px-3 py-2 font-semibold shadow-sm ring-1 ring-inset ring-red-300 hover:bg-red-700" @click="appointments.onServiceSelected(service)">Eliminar</button>
    </div>

</template>