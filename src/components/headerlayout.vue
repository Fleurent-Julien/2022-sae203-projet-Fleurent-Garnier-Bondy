<script setup lang="ts">
import LogoSite from '@/icons/Logo_Site.vue';
import { ref } from 'vue'
const menuIsOpen = ref(null)
</script>

<template>
    <header>
        <div class="flex items-center"></div>
    <div>
        <RouterLink to="/"><LogoSite class="absolute m-5"></LogoSite></RouterLink>
    <nav id="mainNav" class="bg-lime-800 flex py-10 px-3 text-white text-xl top-0 w-full z-1 pr-10 items-center space-x-10 justify-end">  
        <ul>
            <li>
                <RouterLink to="/conseil">Conseil</RouterLink>
            </li>
        </ul>
        <ul>
            <li>
                <RouterLink to="/planning">Planning</RouterLink>
            </li>
        </ul>
        <ul>
            <li>
                <RouterLink to="/recettes">Recettes</RouterLink>
            </li>
        </ul>
         <button aria-controls="mainNav"
          aria-expanded="true" @pointerdown="menuIsOpen = !menuIsOpen">Compte</button>
     </nav>
    
    <nav id="mainNav" v-show="menuIsOpen" class="absolute text-right right-0 ml-5 bg-lime-950 font-bold text-white p-10"> 
        <ul class="space-y-28">
          <li><RouterLink to="/event">Vos évènements</RouterLink></li>
          <li><RouterLink to="/recettes">Vos recettes</RouterLink></li>
          <li><RouterLink to="/conseil">Vos conseils/astuces</RouterLink></li>
          <li><RouterLink to="/favoris">Favoris</RouterLink></li>
        </ul>
    </nav>
    </div>
    <nav >
        
      </nav>
    </header>
</template>