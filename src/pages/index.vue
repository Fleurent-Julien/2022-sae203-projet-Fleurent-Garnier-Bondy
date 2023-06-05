<script setup lang="ts">
import cardconseils from '@/components/cardconseils.vue'
import Cardhomecook from '@/components/cardhomecook.vue'
import cardevent from '@/components/cardevent.vue'

import type { PlatsResponse} from '@/pocketbase-types'
import { allPlat, allTips, allEvenement } from '@/backend'
const Toutlesplats: PlatsResponse[] = await allPlat()
const listEvent = await allEvenement()
const listrecette = await allPlat()
const listtips = await allTips()
console.log('dans plat :', Toutlesplats)

import { useTitle } from '@vueuse/core'
const title = useTitle('Accueil')
</script>

<template>
  <h1 class="text-4xl font-bold text-lime-700 m-10">Bienvenue !</h1>
  <div>
                <ul class=" grid grid-cols-3">
        <li v-for="unEvent of listEvent" v-bind="{ ...unEvent }">
          <RouterLink
            :to="{
              name: 'conseil-id',
              params: { id: unEvent.id }
            }"
          >
            <cardevent v-bind="{ ...unEvent }" />
          </RouterLink>
        </li>
      </ul>

  </div>

  <div>
      <ul class="grid grid-cols-3">
        <li v-for="unPlat of listrecette" v-bind="{ ...unPlat }">
          <RouterLink
            :to="{
              name: 'recette-id',
              params: { id: unPlat.id }
            }"
          >
            <Cardhomecook v-bind="{ ...unPlat }" />
          </RouterLink>
        </li>
      </ul>

  </div>

  <button
    class="flex text-white font-bold m-auto my-10 border-4 border-lime-700 bg-lime-700 px-10 py-1 rounded-full mb-10"
  >
    <RouterLink to="/recette">Voir plus</RouterLink>
  </button>
  <h2 class="text-2xl font-bold ml-5">Tips & Astuces</h2>

  <div>
        <ul class="grid grid-cols-3">
        <li v-for="unConseil of listtips" v-bind="{ ...unConseil }">
          <RouterLink
            :to="{
              name: 'conseil-id',
              params: { id: unConseil.id }
            }"
          >
            <cardconseils v-bind="{ ...unConseil }" />
          </RouterLink>
        </li>
      </ul>
</div>
  <div class="lg:flex lg:mx-10 lg:justify-center">
  </div>
  <button
    class="flex text-white font-bold m-auto my-10 border-4 border-lime-700 bg-lime-700 px-10 py-1 rounded-full mb-40"
  >
    <RouterLink to="/conseil">Voir plus</RouterLink>
  </button>
</template>
