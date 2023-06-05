<script setup lang="ts">
import Cardrecettes from '@/components/Cardrecettes.vue'
import type { PlatsResponse } from '@/pocketbase-types'
import { allPlat } from '@/backend'
const Toutlesplats: PlatsResponse[] = await allPlat()
const listrecette = await allPlat()
console.log('dans plat :', Toutlesplats)

import { useTitle } from '@vueuse/core'
const title = useTitle('Recettes')
</script>

<template>

  <div class="lg:grid lg:grid-cols-4 lg:columns-4">
    <ul>
      <li v-for="recette of listrecette" v-bind="{ ...recette }" :v-key="recette.id">
        <RouterLink
          :to="{
            name: 'recette-id',
            params: { id: recette.id }
          }"
        >
          <Cardrecettes v-bind="{ ...recette }" />
        </RouterLink>
      </li>
    </ul>
  </div>

</template>
