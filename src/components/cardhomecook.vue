<script setup lang="ts">
import { pb } from '@/backend'
import type { PlatsResponse } from '@/pocketbase-types'
const props: PlatsResponse = defineProps<PlatsResponse>()

const img0 = props.images_plats
const urlImg = pb.files.getUrl(props, img0, { thumb: '200x200' })
</script>

<template>
  <div class="border border-white rounded-xl mx-5 my-10 py-5 shadow-xl shadow-black/50">
     <img :src="urlImg" alt="image recette" class="float-right rounded-full mr-2 mt-2" />
    <div class="m-5">
      <div class="flex">
        <div class="flex space-x-2 text-xs mt_5">
          <p class="border-2 bg-gray-200 px-5 rounded-full text-gray-700 font-bold -mt-1">
            New
          </p>
        </div>
      </div>

      <div class="space-y-0.5 mb-5">
        <h2 class="font-bold text-lg">{{ nom_plats }}</h2>
        <p>{{ calories }} calories</p>
        <p class="text-sm">{{ ville }}</p>
      </div>
    </div>
  </div>
</template>
