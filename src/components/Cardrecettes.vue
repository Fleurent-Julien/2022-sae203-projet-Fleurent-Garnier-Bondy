<script setup lang="ts">
import Avatarconnexion from '@/icons/Avatarconnexion.vue';
import LogoInsta from '@/icons/LogoInsta.vue';
</script>

<template>

   <div class="mt-5">
<div class="border border-white rounded-xl mx-5 my-10 shadow-xl shadow-black/50">
         <Avatarconnexion class="flex m-auto h-auto -mt-10 mb-10"></Avatarconnexion>
        <div>
            <p class="text-center text-xl">Crevettes sautées</p>
        </div>

    <div class="flex justify-between mx-5 my-1">
        <div>
            <LogoInsta></LogoInsta>
            <p>30 min</p>
        </div>
        <div class="border-2 border-lime-400 rounded-full my-3"></div>
        <div>
            <LogoInsta></LogoInsta>
                <p>3 pers</p>
            </div>
    </div>
    
</div>
</div>
</template>