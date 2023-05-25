<script setup lang="ts">
import Navigation from '@/components/Navigation.vue';
import FooterPage from '@/components/FooterPage.vue';
import cardconseils from '@/components/cardconseils.vue';
import Cardhomecook from '@/components/cardhomecook.vue';
import HeaderLayout from '@/components/headerlayout.vue';

import { useTitle } from '@vueuse/core'
const title = useTitle('Accueil')

</script>

<template>
  <header class="max-lg:hidden lg:visible">
  <HeaderLayout ></HeaderLayout>
   </header>

   <h1 class="text-4xl font-bold text-lime-700 m-10">Bienvenue !</h1>
  <div class="lg:flex lg:grid-cols-5 lg:col-span-2 lg:justify-center lg:mx-28">
  <cardconseils></cardconseils>
  <cardconseils></cardconseils>
  <cardconseils></cardconseils>
  <cardconseils></cardconseils>
  </div>

  <div class="lg:grid lg:grid-cols-4 mg:grid-cols-2">
    <Cardhomecook class="lg:col-start-2"></Cardhomecook>
    <Cardhomecook></Cardhomecook>
    <Cardhomecook class="lg:col-start-2"></Cardhomecook>
    <Cardhomecook></Cardhomecook>
</div>

    <button class="flex text-white font-bold m-auto my-10 border-4 border-lime-700 bg-lime-700 px-10 py-1 rounded-full mb-10"><RouterLink to="/recettes" >Voir plus</RouterLink></button>
    <h2 class="text-2xl font-bold ml-5">Tips & Astuces</h2>

    <div class="lg:flex lg:mx-10 lg:justify-center">
    <cardconseils ></cardconseils>  
    <cardconseils></cardconseils>
    <cardconseils></cardconseils>
  </div>
    <button class="flex text-white font-bold m-auto my-10 border-4 border-lime-700 bg-lime-700 px-10 py-1 rounded-full mb-40"><RouterLink to="/conseil" >Voir plus</RouterLink></button>
    <Navigation></Navigation>
    <FooterPage></FooterPage>
</template>

