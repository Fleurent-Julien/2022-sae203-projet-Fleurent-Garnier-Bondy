<script setup lang="ts">
import IconArrow from '../icons/IconArrow.vue';

import { useTitle } from '@vueuse/core'
const title = useTitle('Contact')
</script>

<template>
   <header class="bg-lime-700 text-white">
    <div class="flex mx-5 items-center pt-2 space-x-28 lg:hidden">
       <RouterLink to="/forum"><IconArrow></IconArrow></RouterLink>
       <p class="text-lg justify-self-center">Contact</p>
    </div>

    <h1 class="text-center font-bold text-3xl py-10">Formulaire de contact</h1>
   </header>
   
       <form class="m-10">

           <div class="grid"> 
               <label for="last-name" class="text-2xl">Nom</label>
               <input type="text" name="first-name" id="first-name" class="border border-lime-600 bg-blue-100 rounded-xl text-2xl mb-5">
           </div>

           <div class="grid">
               <label for="mail" class="text-2xl">Mail</label>
               <input type="text" name="mail" id="mail" class="border border-lime-600 bg-blue-100 rounded-xl text-2xl mb-5">
           </div>

           <div class="grid">
                  <label for="sujet" class="text-2xl">Objet</label>
                  <input type="text" name="sujet" id="sujet" class="border border-lime-600 bg-blue-100 rounded-xl text-2xl mb-5">
              </div>


           <div class="grid">
               <label for="message" class="text-2xl">Message</label>
               <textarea rows=6 name="message" id="message" class="border border-lime-600 bg-blue-100 rounded-xl text-sm"></textarea>
           </div>

            <div class="flex items-center">
                    <input type="checkbox" class="w-28 h-28">
                    <label for="message" class="text-xs ml-3">J’accepte que les informations saisie dans le formulaire soient utilisées afin de me recontacter ultérieurement.</label>
                  </div>

           <button type="submit" class="flex text-white font-bold m-auto my-10 border-4 border-lime-700 bg-lime-700 px-5 py-1 rounded-full mb-32">Envoyer</button>
       </form>

</template>