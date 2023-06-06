<script setup lang="ts">;
import Icon_Personnes from '@/icons/Icon_Personnes_Green.vue';
import IconTime from '@/icons/Icon_Time_Green.vue'

import { pb } from '@/backend'
import type { PlatsResponse } from '@/pocketbase-types';
const props: PlatsResponse = defineProps<PlatsResponse>()

const img0 = props.images_plats
const urlImg = pb.files.getUrl(props, img0, { thumb: '200x200' })
</script>

<template>

   <div class="mt-5">
<div class="border border-white rounded-xl mx-5 my-10 shadow-xl shadow-black/50">
         <img class="flex rounded-full m-auto h-auto -mt-10 mb-10" :src="urlImg"/>
        <div>
            <p class="text-center text-xl">{{ nom_plats }}</p>
        </div>

    <div class="flex justify-around mx-5 my-1">
        <div>
            <Icon_Personnes class="ml-2" />
            <p>{{ preparation_plats }} min</p>
        </div>
        <div class="border-2 border-lime-400 rounded-full my-3"></div>
        <div>
            <IconTime class="ml-2"/>
                <p>{{ personne_plats}} pers</p>
            </div>
    </div>
    
</div>
</div>
</template>