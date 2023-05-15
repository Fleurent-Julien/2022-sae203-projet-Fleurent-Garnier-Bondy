<script setup lang="ts">
import IconAvatar from '../icons/LogoFacebook.vue';
import IconBook from '../icons/LogoFacebook.vue';
import IconCalendar from '../icons/LogoFacebook.vue';
import IconHome from '../icons/LogoFacebook.vue';
import IconInterrogation from '../icons/LogoFacebook.vue';
</script>

<template>
    <nav class="bg-lime-800 flex justify-between py-4 px-3 text-white">
        <a href="#"><IconInterrogation class="w-6/12 block mx-auto" /><p>Conseil</p></a>
        <a href="#"><IconCalendar class="w-6/12 block mx-auto" /><p>Planning</p></a>
        <a href="#"><IconHome class="w-6/12 block mx-auto" /><p>Accueil</p></a>
        <a href="#"><IconBook class="w-6/12 block mx-auto" /><p>Recettes</p></a>
        <a href="#"><IconAvatar class="w-6/12 block mx-auto" /><p>Compte</p></a>  

    </nav>
</template>

