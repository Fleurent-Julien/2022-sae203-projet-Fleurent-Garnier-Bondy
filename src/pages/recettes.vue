<script setup lang="ts">
import Cardrecettes from '@/components/Cardrecettes.vue';
import Navigation from '@/components/Navigation.vue';
import FooterPage from '@/components/FooterPage.vue';
import HeaderLayout from '@/components/headerlayout.vue';

import type {TrouverVotrePlatResponse, Collections } from '@/pocketbase-types';
const platsListe: TrouverVotrePlatResponse[] = [
    {
        "collectionId": "b5pstqgarxbpqvy",
        "created": "2023-05-19 08:43:28.552Z",
        "id": "13s5aq0n5k8evs4",
        "images_plats": "unsplash_fdl_zbwip0a_m_ipY1wRiUwd.png",
        "nom_plats": "Pain à l'oeuf",
        "personne_plats": 2,
        "preparation_plats": 30,
        "updated": "2023-05-19 08:43:28.552Z",
    },
    {
        "collectionId": "b5pstqgarxbpqvy",
        "created": "2023-05-19 08:44:08.283Z",
        "id": "cm0tiicb3ymjtqr",
        "images_plats": "unsplash_tq_oegd_rnow_y_c2TgglXOUC.png",
        "nom_plats": "Crevettes sautées",
        "personne_plats": 2,
        "preparation_plats": 30,
        "updated": "2023-05-19 08:44:08.283Z",
    },
    {
        "collectionId": "b5pstqgarxbpqvy",
        "created": "2023-05-19 08:45:00.867Z",
        "id": "v38npc9s1748qm6",
        "images_plats": "unsplash_oaz0rays_ask_MA9SSiAbp5.png",
        "nom_plats": "Salade d'avocat",
        "personne_plats": 2,
        "preparation_plats": 30,
        "updated": "2023-05-19 08:45:00.867Z",
    },
    {
        "collectionId": "b5pstqgarxbpqvy",
        "created": "2023-05-19 08:45:32.810Z",
        "id": "bj8r8rzisu1vttp",
        "images_plats": "unsplash_y6_a9bh_ilk_m_HmpAGj8N6b.png",
        "nom_plats": "Soupe de maïs",
        "personne_plats": 2,
        "preparation_plats": 30,
        "updated": "2023-05-19 08:45:32.810Z",
    },
    {
        "collectionId": "b5pstqgarxbpqvy",
        "created": "2023-05-19 08:45:57.617Z",
        "id": "4g8hop612hoxsmw",
        "images_plats": "unsplash_zu_idlsz3_xlg_iL4o2Xn9dX.png",
        "nom_plats": "Salade végétarienne",
        "personne_plats": 2,
        "preparation_plats": 30,
        "updated": "2023-05-19 08:45:57.617Z",
    },
    {
        "collectionId": "b5pstqgarxbpqvy",
        "created": "2023-05-19 08:46:19.626Z",
        "id": "8n78u4jpn7kuhze",
        "images_plats": "unsplash_nd3ed_emzcd_q_mRdQ0ldxUV.png",
        "nom_plats": "Vapeur saumon",
        "personne_plats": 2,
        "preparation_plats": 30,
        "updated": "2023-05-19 08:46:19.626Z",
    }
]

import { useTitle } from '@vueuse/core'
const title = useTitle('Recettes')
</script>

<template>
     <header class="max-lg:hidden lg:visible">
      <HeaderLayout ></HeaderLayout>
       </header>
    <div class="grid grid-cols-2 columns-2 lg:grid lg:grid-cols-4 lg:columns-4">
 <Cardrecettes v-bind="platsListe[0]"></Cardrecettes>
 <Cardrecettes v-bind="platsListe[1]"></Cardrecettes>
 <Cardrecettes v-bind="platsListe[2]"></Cardrecettes>
 <Cardrecettes v-bind="platsListe[3]"></Cardrecettes>
 <Cardrecettes v-bind="platsListe[4]"></Cardrecettes>
  <Cardrecettes v-bind="platsListe[5]"></Cardrecettes>
 </div>
     <Navigation></Navigation>
        <FooterPage></FooterPage>
</template>