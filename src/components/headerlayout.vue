<script setup lang="ts">
import LogoSite from '@/icons/Logo_Site.vue';
</script>

<template>
    <div>
        <RouterLink to="/"><LogoSite class="absolute m-5"></LogoSite></RouterLink>
    <nav class="bg-lime-800 flex py-10 px-3 text-white text-xl top-0 w-full z-1 pr-10 items-center space-x-10 justify-end">
        
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
        <ul>
            <li>
                <RouterLink to="/compte">Compte</RouterLink>
            </li>
        </ul>
    </nav>
    </div>
</template>