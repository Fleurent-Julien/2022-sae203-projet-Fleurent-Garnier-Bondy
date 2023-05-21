<script setup lang="ts">
import Cardrecettes from '@/components/Cardrecettes.vue';
import Navigation from '@/components/Navigation.vue';
import FooterPage from '@/components/FooterPage.vue';
</script>

<template>
    <div class="grid grid-cols-2 columns-2">
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