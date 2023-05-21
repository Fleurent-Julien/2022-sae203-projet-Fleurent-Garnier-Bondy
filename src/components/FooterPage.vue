<script setup lang="ts">
import LogoFacebook from '../icons/LogoFacebook.vue';
import LogoLinkedin from '../icons/LogoLinkedin.vue';
import LogoInsta from '../icons/LogoInsta.vue';
import LogoSite from '../icons/Logo_Site.vue';
import { RouterLink, RouterView } from 'vue-router'

</script>

<template>
    <footer class="bg-neutral-800 py-10 text-white z-10 relative">
        <div class="mx-2 inline-flex items-center">
            <LogoSite></LogoSite>
            <p class="text-4xl ml-2">French Recipe</p>
        </div>
    <div class="columns-2 mx-8 my-8 place-content-end leading-10 lg:columns-3 lg:col-span-3">
    <ul>
        <li class="before:content-['-']"><RouterLink to="/compte"> Mon compte</RouterLink></li>
        <li class="before:content-['-']"><RouterLink to="/recettes"> Recettes</RouterLink></li>
        <li class="before:content-['-']"><RouterLink to="/conseil"> Conseils d'experts</RouterLink></li>
        <li class="before:content-['-']"><a href="#"> Planning</a></li>
        <li class="before:content-['-']"><RouterLink to="/contact"> Contact</RouterLink></li>
        <li class="before:content-['-']" ><RouterLink to="/forum"> Besoin d'aide</RouterLink></li>
        <li class="before:content-['-']"><RouterLink to="/mentions_legales"> Mentions légales</RouterLink></li>
    </ul>
</div>
 <div class="border border-lime-600 mx-32"></div>
<nav >
    <ul class="flex gap-8 py-8 place-content-center">
        <li><a href="#"></a><LogoInsta /></li>
        <li><a href="#"></a><LogoFacebook /></li>
        <li><a href="#"></a><LogoLinkedin /></li>
    </ul>
</nav>
 <div class="border border-lime-600 mx-32"></div>
    
<div class="text-center m-10">
    <p>Projet réalisé dans le cadre d'un exercice pédagogique au département MMI de Montbéliard</p>
    <p class="my-5">© French Recipe 2023</p>
</div>
    </footer>
</template>