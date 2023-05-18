<script setup lang="ts">
import Backuparrow from '@/icons/Backuparrow.vue'
import Lianes from '@/icons/Lianes.vue'
</script>

<template>
<Backuparrow class="ml-5 mt-5"></Backuparrow>
<h1 class="text-center text-4xl mb-5">Inscription</h1>

    <div class="ml-10">
          <label for="name" class="text-3xl">Nom</label>
    
          <div>  <input type="text" class="border-4 border-lime-800 rounded-xl text-2xl mb-5 p-1"/></div>


           <label for="name" class="text-3xl">Prénom</label>
              <div>  <input type="text" class="border-4 border-lime-800 rounded-xl text-2xl mb-5 p-1"/></div>

    <div>
          <label for="name" class="text-3xl">Mail</label>
        <input type="text" class="border-4 border-lime-800 rounded-xl text-2xl mb-5 p-1"/>
    </div>

      <div>
      <label for="name" class="text-3xl">Mot de passe</label>
      <div>
          <input type="password" required class="border-4 border-lime-800 rounded-xl text-2xl mb-5 p-1"/></div>

          <div class="flex flex-row -ml-5 ">
                <input type="checkbox" class="w-10 h-10 basis-1/4 border-lime-800" required/>
<label class="text-xs basis-3/4 mr-5 align-middle">J’accepte que les informations saisie dans le formulaire soient utilisées pour créer mon compte FrenchRecipe et déclare accepter les conditions générales d’utilisation.</label>
        </div>

      

    </div>
    </div>
    <button class="flex text-white text-lg font-bold mx-auto my-10 border-4 border-lime-700 bg-lime-700 px-5 py-1 rounded-sm">Créer mon compte</button>

    <Lianes></Lianes>
</template>