<script setup lang="ts">;
import LogoInsta from '@/icons/LogoInsta.vue';

import { pb } from '@/backend'
import type { TrouverVotrePlatRecord } from '@/pocketbase-types';
const props = defineProps<TrouverVotrePlatRecord>()

</script>

<template>

   <div class="mt-5">
<div class="border border-white rounded-xl mx-5 my-10 shadow-xl shadow-black/50">
         <img class="flex m-auto h-auto -mt-10 mb-10" :src="urlImg0" />
        <div>
            <p class="text-center text-xl">{{ nom_plats }}</p>
        </div>

    <div class="flex justify-between mx-5 my-1">
        <div>
            <LogoInsta></LogoInsta>
            <p>{{ preparation_plats }} min</p>
        </div>
        <div class="border-2 border-lime-400 rounded-full my-3"></div>
        <div>
            <LogoInsta></LogoInsta>
                <p>{{ personne_plats}} pers</p>
            </div>
    </div>
    
</div>
</div>
</template>