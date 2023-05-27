<script setup lang="ts">
import LogoSite from '@/icons/Logo_Site.vue';
import IconAvatar from '@/icons/IconAvatar.vue';
import { ref } from 'vue'
const menuIsOpen = ref(null)
</script>

<template>
    <header>
        <div class="flex items-center"></div>
    <div class="z-50">
        <RouterLink to="/"><LogoSite class="absolute m-8"></LogoSite></RouterLink>
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
         <IconAvatar @pointerdown="menuIsOpen = !menuIsOpen" class="w-14 h-14 border-2 rounded-full"/>
     </nav>
    
       
    </div>
    <Transition
          enter-from-class="translate-x-full"
          enter-to-class="-translate-x-0"
          leave-active-class="translate-x-full"
          class="transition-transform duration-1000 -z-1">
    <nav v-show="menuIsOpen" class="absolute text-right text-xl right-0 ml-5 bg-lime-950 font-bold text-white p-10 rounded-xl"> 
        <ul class="space-y-28">
          <li><RouterLink to="/event">Vos évènements</RouterLink></li>
          <li><RouterLink to="/recettes">Vos recettes</RouterLink></li>
          <li><RouterLink to="/conseil">Vos conseils / astuces</RouterLink></li>
          <li><RouterLink to="/favoris">Favoris</RouterLink></li>
        </ul>
    </nav>
    </Transition>
    </header>
</template>