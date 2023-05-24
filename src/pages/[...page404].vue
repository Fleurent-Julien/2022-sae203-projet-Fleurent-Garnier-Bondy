<script lang="ts">
export default {
    name: 'NotFound',
};

</script>

<template>
<div class="bg-lime-600">
  <div class="fixed border-lime-400 bg-lime-400 border-2 rounded-full -right-6 -top-8 w-36 h-36"></div>
  <div class="relative border-lime-400 bg-lime-400 border-2 rounded-full -left-24 -top-8 w-40 h-40"></div>
  
  <img src="../img/error404.svg" href="image erreur" class="border-lime-400 bg-lime-400 border-2 rounded-full m-auto"/>
  <div class="text-center text-white my-10">
  <h1 class="text-5xl font-semibold">Oh Non !</h1>
  <p class="mt-5 mx-10 text-2xl">Quelque chose n'a pas fonctionné !</p>
</div>
  <button class="flex text-white text-center font-bold m-auto border-4 border-lime-700 bg-lime-700 px-10 py-5 rounded-lg"><RouterLink to="/">Retour à la page d'accueil</RouterLink></button>
  <div class="relative border-lime-400 bg-lime-400 border-2 rounded-t-full -left-10 bottom-0 w-40 h-28 mt-10"></div>
  </div>
</template>