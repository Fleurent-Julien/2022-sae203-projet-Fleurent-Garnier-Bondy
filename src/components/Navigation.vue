<script setup lang="ts">
import IconAvatar from '../icons/IconAvatar.vue';
import IconBook from '../icons/IconBook.vue';
import IconCalendar from '../icons/IconCalendar.vue';
import IconHome from '../icons/IconHome.vue';
import IconInterrogation from '../icons/IconInterrogation.vue';
</script>

<template>
    <nav class="bg-lime-800 flex justify-between py-5 px-3 text-white bottom-0 fixed w-full z-1">
        <RouterLink to="/conseil"><IconInterrogation class="block mx-auto" /><p>Conseil</p></RouterLink>
        <a href="#"><IconCalendar class="block mx-auto" /><p>Planning</p></a>
        <a href="#"><IconHome class="block mx-auto" /><p>Accueil</p></a>
        <a href="#"><IconBook class="block mx-auto" /><p>Recettes</p></a>
        <a href="#"><IconAvatar class="block mx-auto" /><p>Compte</p></a>  

    </nav>
</template>

