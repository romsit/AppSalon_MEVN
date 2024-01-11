<script setup>
</script>

<template>
    <div>
        <div class="flex justify-between ">
            <h1 class="text-2xl lg:text-6xl font-black text-white">App Salon</h1>

            <div class="flex flex-col space-y-5"> 
                <div class="flex gap-2 items-center">
                    <p class="text-white text-right"> hola: usuario</p>
                    <button type="button" class="bg-red-600 hover:bg-red-700 p-2 text-white uppercase text-xs font-extrabold rounded-lg">Cerrar Sesion</button>

                </div>
                <nav class="flex gap-2 items-center justify-end">
                    <button class="p-3 text-gray-200 uppercase text-xs font-black rounded-lg"> Mis Citas </button>
                    <RouterLink :to="{name: 'new-appointment'}" class="p-3 text-gray-200 uppercase text-xs font-black rounded-lg bg-blue-700">Nueva Cita</RouterLink>

                </nav>
            </div>
        </div>
        <main>
            <RouterView />
        </main>
    </div>
</template>