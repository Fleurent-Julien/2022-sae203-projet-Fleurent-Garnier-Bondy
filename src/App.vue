<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router';
import Inscription from "@/components/Cardrecettes.vue"
import Navigation from './components/Navigation.vue';
</script>

<template>
  <Inscription></Inscription>
  <Navigation></Navigation>
  <RouterView />
</template>