<script setup lang="ts">
import IconArrow from '../icons/IconArrow.vue';
import { useTitle } from '@vueuse/core'
const title = useTitle('Compte')
</script>

<template>
     <header class="bg-lime-700 text-white">
        <div class="ml-5 pt-10 pb-5" >
           <RouterLink to="/"><IconArrow class=" lg:hidden"></IconArrow></RouterLink>
           <p class="text-lg text-center relative top-0">Profil</p>
        </div>
       </header>
 <button class="flex text-white font-bold m-auto my-10 border-4 border-lime-700 bg-lime-700 px-5 py-1 rounded-full mb-32"><RouterLink to="/connexion">Se connecter</RouterLink></button>

</template>