<script setup lang="ts">
import { RouterView } from 'vue-router'
import Navigation from '@/components/Navigation.vue';
import FooterPage from '@/components/FooterPage.vue';
</script>

<template>
      <Navigation></Navigation>  
      <RouterView />
      <FooterPage></FooterPage>
</template>