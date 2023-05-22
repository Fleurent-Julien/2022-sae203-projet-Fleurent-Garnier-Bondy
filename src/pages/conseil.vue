<script setup lang="ts">
import cardconseils from '@/components/cardconseils.vue';
import Navigation from '@/components/Navigation.vue';
import FooterPage from '@/components/FooterPage.vue';

import { useTitle } from '@vueuse/core'
const title = useTitle('Conseil')
</script>

<template>
    <main>
    <cardconseils></cardconseils>
    <cardconseils></cardconseils>
    <cardconseils></cardconseils>
    </main>

         <Navigation></Navigation>
            <FooterPage></FooterPage>
</template>