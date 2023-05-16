<script setup lang="ts">
import LogoFacebook from '../icons/LogoFacebook.vue';
import LogoLinkedin from '../icons/LogoLinkedin.vue';
import LogoInsta from '../icons/LogoInsta.vue';
import LogoSite from '../icons/Logo_Site.vue';
import { RouterLink, RouterView } from 'vue-router'

</script>

<template>
    <footer class="bg-neutral-800 py-10">
        <div class="mx-5 inline-flex items-center lg:place-content-center">
            <LogoSite></LogoSite>
            <p class="text-4xl ml-12">Produit Vert</p>
        </div>
    <div class="columns-2 mx-8 my-8 place-content-end leading-10 lg:columns-3 lg:col-span-3">
    <ul>
        <li class="before:content-['-']"><a href="#"> Mon compte</a></li>
        <li class="before:content-['-']"><a href="#"> Recettes</a></li>
        <li class="before:content-['-']"><a href="#"> Conseils d'experts</a></li>
        <li class="before:content-['-']"><a href="#"> Planning</a></li>
        <li class="before:content-['-']"><a href="#"> Contact</a></li>
        <li class="before:content-['-']" ><RouterLink to="/forum"> Besoin d'aide</RouterLink></li>
        <li class="before:content-['-']"><RouterLink to="/accueil"> Mentions légales</RouterLink></li>
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
    <p class="my-5">© Produit Vert 2023</p>
</div>
    </footer>
</template>