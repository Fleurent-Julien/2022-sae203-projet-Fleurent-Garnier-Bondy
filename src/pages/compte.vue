<script setup lang="ts">
import IconArrow from '../icons/IconArrow.vue';
import FooterPage from '@/components/FooterPage.vue';
import Navigation from '@/components/Navigation.vue';
</script>

<template>
     <header class="bg-lime-700 text-white">
        <div class="flex mx-5 pt-10 items-center space-x-28">
           <RouterLink to="/"><IconArrow></IconArrow></RouterLink>
           <p class="text-lg justify-self-center">Profil</p>
        </div>
       </header>

       
       <Navigation></Navigation>
       <FooterPage></FooterPage>
</template>