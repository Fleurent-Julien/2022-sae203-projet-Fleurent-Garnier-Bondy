<script setup lang="ts">
import IconArrow from '../icons/IconArrow.vue';
</script>

<template>
   <header class="bg-lime-700 text-white">
    <div class="flex mx-5 pt-10 items-center space-x-28">
       <IconArrow></IconArrow>
       <p class="text-lg justify-self-center">Contact</p>
    </div>

    <h1 class="text-center font-bold text-3xl py-16">Formulaire de contact</h1>
   </header>
   
       <form class="mx-14 mt-16">

           <div class="inline-block">
               <label for="last-name" class="text-2xl">Nom</label>
               <input type="text" name="first-name" id="first-name" class="border border-lime-600 bg-blue-100 rounded-lg text-2xl mb-5">
           </div>

           <div>
               <label for="mail" class="text-2xl">Mail</label>
               <input type="text" name="mail" id="mail" class="border border-lime-600 bg-blue-100 rounded-lg text-2xl mb-5">
           </div>

           <div>
                  <label for="sujet" class="text-2xl">Objet</label>
                  <input type="text" name="sujet" id="sujet" class="border border-lime-600 bg-blue-100 rounded-lg text-2xl mb-5">
              </div>


           <div>
               <label for="message" class="text-2xl">Message</label>
               <textarea rows=6 name="message" id="message" class="border border-lime-600 bg-blue-100 rounded-lg text-2xl mb-5 p-5"></textarea>
           </div>

           <button type="submit" class="flex text-white font-bold m-auto my-10 border-4 border-lime-700 bg-lime-700 px-5 py-1 rounded-full mb-32">Envoyer</button>
       </form>
</template>