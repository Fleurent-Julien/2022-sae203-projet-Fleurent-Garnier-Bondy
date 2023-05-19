<script setup lang="ts">
import Navigation from '@/components/Navigation.vue';
import FooterPage from '@/components/FooterPage.vue';
import cardconseils from '@/components/cardconseils.vue';
import CardhomeCook from '@/components/cardhomecook.vue'
</script>

<template>
    <CardhomeCook></CardhomeCook>
    <button class="flex text-white font-bold m-auto my-10 border-4 border-lime-700 bg-lime-700 px-10 py-1 rounded-full mb-10"><RouterLink to="/recettes" >Voir plus</RouterLink></button>
    <h2 class="text-2xl font-bold ml-5">Tips & Astuces</h2>
    <cardconseils></cardconseils>  
    <cardconseils></cardconseils>
    <button class="flex text-white font-bold m-auto my-10 border-4 border-lime-700 bg-lime-700 px-10 py-1 rounded-full mb-40"><RouterLink to="/conseil" >Voir plus</RouterLink></button>
    <Navigation></Navigation>
    <FooterPage></FooterPage>
</template>