<script setup lang="ts">
import NavigationBar from '../src/components/Navigation.vue'
import FooterPage from '../src/components/FooterPage.vue'
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <NavigationBar class="fixed bottom-0 z-1 w-full"></NavigationBar>
  <RouterView />
  <FooterPage class="relative text-white z-10"></FooterPage>

  
</template>