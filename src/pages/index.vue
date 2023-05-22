<script setup lang="ts">
import Navigation from '@/components/Navigation.vue';
import FooterPage from '@/components/FooterPage.vue';
import cardconseils from '@/components/cardconseils.vue';
import Cardhomecook from '@/components/cardhomecook.vue';

import { useTitle } from '@vueuse/core'
const title = useTitle('Accueil')

</script>

<template>
  <div class="lg:flex lg:grid-cols-5 lg:col-span-2 lg:gap-x-5 lg:justify-center">
  <cardconseils></cardconseils>
  <cardconseils></cardconseils>
  <cardconseils></cardconseils>
  <cardconseils></cardconseils>
  </div>

  <div class="lg:grid lg:grid-cols-2">
    <Cardhomecook></Cardhomecook>
    <Cardhomecook></Cardhomecook>
    <Cardhomecook></Cardhomecook>
    <Cardhomecook></Cardhomecook>
</div>

    <button class="flex text-white font-bold m-auto my-10 border-4 border-lime-700 bg-lime-700 px-10 py-1 rounded-full mb-10"><RouterLink to="/recettes" >Voir plus</RouterLink></button>
    <h2 class="text-2xl font-bold ml-5">Tips & Astuces</h2>

    <div class="lg:flex lg:grid-cols-3 lg:justify-center">
    <cardconseils ></cardconseils>  
    <cardconseils></cardconseils>
    <cardconseils></cardconseils>
  </div>
    <button class="flex text-white font-bold m-auto my-10 border-4 border-lime-700 bg-lime-700 px-10 py-1 rounded-full mb-40"><RouterLink to="/conseil" >Voir plus</RouterLink></button>
    <Navigation></Navigation>
    <FooterPage></FooterPage>
</template>

