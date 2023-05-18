<script setup lang="ts">
import { RouterView } from 'vue-router'
import cardconseils from '@/components/cardconseils.vue';
import Navigation from '@/components/Navigation.vue';
import FooterPage from '@/components/FooterPage.vue';
</script>

<template>
      <Navigation></Navigation>
      <FooterPage></FooterPage>
  <RouterView />
</template>