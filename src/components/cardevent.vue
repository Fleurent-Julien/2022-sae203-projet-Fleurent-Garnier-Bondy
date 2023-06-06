<script setup lang="ts">
import { pb } from '@/backend'
import type { ProchainsEvenementsResponse } from '@/pocketbase-types';
const props: ProchainsEvenementsResponse = defineProps<ProchainsEvenementsResponse>()

const img0 = props.images_evenements
const urlImg = pb.files.getUrl(props, img0, { thumb: '200x200' })
</script>

<template>
    <div class="border border-white rounded-xl mx-5 my-5 shadow-xl shadow-black/50">
    <img :src="urlImg" alt="Conseil pour débutant" class="w-1/2 h-1/2 m-auto flex"/>
    <div class="m-5">
        <div class="flex space-x-2 text-xs mt_5">
          <p class="border-2 bg-gray-200 px-5 py-0.5 rounded-full text-gray-700 font-bold -mt-1">{{ etat_evenements }}</p>
        </div>
        <div class="space-y-0.5 mb-5">
        <h2 class="font-bold text-lg">{{ nom_evenements }}</h2>
        <p>{{ lieu1_evenements }}</p>
        <p class="text-sm">{{ lieu2_evenements }}</p>
        </div>
         </div>
    </div>
</template>