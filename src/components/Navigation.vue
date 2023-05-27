<script setup lang="ts">
import IconAvatar from '../icons/IconAvatar.vue';
import IconBook from '../icons/IconBook.vue';
import IconCalendar from '../icons/IconCalendar.vue';
import IconHome from '../icons/IconHome.vue';
import IconInterrogation from '../icons/IconInterrogation.vue';
</script>

<template>
    <nav class="bg-lime-800 flex justify-between py-2 px-3 text-white bottom-0 fixed w-full z-1 max-md:visible lg:hidden">
        <RouterLink to="/conseil"><IconInterrogation class="block mx-auto" /><p>Conseil</p></RouterLink>
        <a href="#"><IconCalendar class="block mx-auto" /><p>Planning</p></a>
        <RouterLink to="/"><IconHome class="block mx-auto" /><p>Accueil</p></RouterLink>
        <RouterLink to="/recettes"><IconBook class="block mx-auto" /><p>Recettes</p></RouterLink>
        <RouterLink to="/compte"><IconAvatar class="block mx-auto" /><p>Compte</p></RouterLink>  

    </nav>
</template>

