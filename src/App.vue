<script setup lang="ts">
import { RouterView } from 'vue-router'
import Navigation from '@/components/Navigation.vue'
import FooterPage from '@/components/FooterPage.vue'
import HeaderLayout from '@/components/headerlayout.vue'
</script>

<template>
      <header>
      <HeaderLayout class="z-50"></HeaderLayout>
      </header>
      <Suspense>
      <RouterView />
      </Suspense>

      <Navigation></Navigation>
      <FooterPage></FooterPage>
</template>