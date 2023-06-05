<script setup lang="ts">
import { allTips, one2ID } from '@/backend';
import cardconseils from '@/components/cardconseils.vue';
const listconseils = await allTips

import { useTitle } from '@vueuse/core'
const title = useTitle('Conseil')
</script>

<template>
    <cardconseils v-for="unConseil of listconseils" v-bind="{ ...unConseil }" :v-key="unConseil.id"></cardconseils>
</template>