<script setup lang="ts">
import IconArrow from '@/icons/IconArrow.vue'
import IconCalories from '@/icons/Icon_Calories.vue'
import Icon_Personnes from '@/icons/Icon_Personnes.vue';
import IconTime from '@/icons/Time.vue'

import {pb} from '@/backend'
import type { PlatsResponse } from '@/pocketbase-types';
const props: PlatsResponse = defineProps<PlatsResponse>()

const img0 = props.images_plats
const urlImg = pb.files.getUrl(props, img0, { thumb: '200x200' })
</script>

<template>

    <section class="bg-lime-700 text-white">
    <div class="flex justify-between mx-2 items-center py-5 lg:text-center">
    <IconArrow class="flex lg:hidden"></IconArrow> 

       <p class="text-2xl flex">{{ nom_plats }}</p>
       <IconArrow class="flex lg:hidden"></IconArrow>
   </div>
            <img :src="urlImg" class="w-8/12 h-8/12 lg:w-3/12 lg:3/12 flex m-auto rounded-full">

            <div class="flex text-center justify-evenly py-20">
                <div>25 Min<IconTime class="flex m-auto lg:w-8/12 lg:h-8/12"/></div>
                <div>2-3 pers <Icon_Personnes class="flex m-auto" /></div>
                <div>350 kcal <IconCalories class="flex m-auto" /></div>
            </div>
    </section>
    <main>
        <div class="bg-white pt-16 relative -top-12 rounded-xl">
            <div class="border-4 border-lime-700 mx-24 lg:mx-[1200px] rounded-xl"></div>
        </div>
        <div>
        <h2 class="ml-10 my-10 text-3xl">Ingrédients</h2>
        <p class="ml-5">{{ingredients}}</p>
        <h2 class="ml-10 my-10 text-3xl">Préparation</h2>
        <p class="ml-5">{{etapes}}</p>
    </div>
    </main>
</template>