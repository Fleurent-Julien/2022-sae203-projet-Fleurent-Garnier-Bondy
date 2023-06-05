<script setup lang="ts">
import recettedetail from '@/components/recettedetail.vue'
import { oneID } from '@/backend'
const props = defineProps<{ id: string }>()
const recette = await oneID(props.id)
</script>
<template>
  <recettedetail v-bind="{ ...recette }" />
</template>
