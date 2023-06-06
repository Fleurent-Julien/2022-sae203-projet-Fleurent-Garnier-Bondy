<script setup lang="ts">
import { allTips, one2ID } from '@/backend';
import cardconseils from '@/components/cardconseils.vue';
const listconseils = await allTips()

import { useTitle } from '@vueuse/core'
const title = useTitle('Conseil')
</script>

<template>
   <ul>
      <li v-for="unConseil of listconseils" :v-key="unConseil.id">
        <RouterLink
          :to="{
            name: 'conseil-id',
            params: { id: unConseil.id }
          }"
        >
          <Cardrecettes v-bind="{ ...unConseil }" />
        </RouterLink>
      </li>
    </ul>
</template>