<script setup lang="ts">
import Backuparrow from '@/icons/Backuparrow.vue'
import Lianes from '@/icons/Lianes.vue'
import Avatar from '@/icons/Avatarconnexion.vue'
</script>

<template>
    <Backuparrow class="ml-5 mt-5"></Backuparrow>
    <h1 class="text-center text-4xl mb-5">Se connecter</h1>
    <Avatar class="flex m-auto mb-10"></Avatar>

        <div class="ml-10 mb-10">
            <label for="name" class="text-3xl">Mail</label>
            <input type="text" class="border-4 border-lime-800 rounded-xl text-2xl mb-5 p-1" />
        </div>

        <div class="ml-10">
            <label for="name" class="text-3xl">Mot de passe</label>
            <div>
                <input type="password" required class="border-4 border-lime-800 rounded-xl text-2xl mb-5 p-1" />
            </div>

        </div>
    <button
    class="flex text-white text-lg font-bold mx-auto my-10 border-4 border-lime-700 bg-lime-700 px-5 py-1 rounded-sm">
    Se connecter</button>

<Lianes class="absolute inset-x-0 bottom-0"></Lianes>
</template>