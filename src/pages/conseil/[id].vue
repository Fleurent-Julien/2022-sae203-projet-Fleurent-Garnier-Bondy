<script setup lang="ts">
import cardconseils from '@/components/cardconseils.vue';
import { one2ID } from '@/backend'
const props = defineProps<{ id: string }>()
const unConseil = await one2ID(props.id)
</script>
<template>
</template>