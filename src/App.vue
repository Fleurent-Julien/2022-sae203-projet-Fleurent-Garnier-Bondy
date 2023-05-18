<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router';
import Inscription from "@/components/cardconseils.vue"
import Navigation from './components/Navigation.vue';
</script>

<template>
  <Inscription></Inscription>
  <Navigation></Navigation>
  <RouterView />
</template>