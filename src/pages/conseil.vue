<script setup lang="ts">
import cardconseils from '@/components/cardconseils.vue';
import Navigation from '@/components/Navigation.vue';
import FooterPage from '@/components/FooterPage.vue';
import HeaderLayout from '@/components/headerlayout.vue';

import { useTitle } from '@vueuse/core'
const title = useTitle('Conseil')
</script>

<template>
     <header class="max-lg:hidden lg:visible">
      <HeaderLayout ></HeaderLayout>
       </header>
    <main>
    <cardconseils></cardconseils>
    <cardconseils></cardconseils>
    <cardconseils></cardconseils>
    </main>

         <Navigation></Navigation>
            <FooterPage></FooterPage>
</template>