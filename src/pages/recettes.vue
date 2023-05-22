<script setup lang="ts">
import Cardrecettes from '@/components/Cardrecettes.vue';
import Navigation from '@/components/Navigation.vue';
import FooterPage from '@/components/FooterPage.vue';

import { useTitle } from '@vueuse/core'
const title = useTitle('Recettes')
</script>

<template>
    <div class="grid grid-cols-2 columns-2 lg:grid lg:grid-cols-4 lg:columns-4">
 <Cardrecettes></Cardrecettes>
 <Cardrecettes></Cardrecettes>
 <Cardrecettes></Cardrecettes>
 <Cardrecettes></Cardrecettes>
 <Cardrecettes></Cardrecettes>
  <Cardrecettes></Cardrecettes>
 </div>
     <Navigation></Navigation>
        <FooterPage></FooterPage>
</template>