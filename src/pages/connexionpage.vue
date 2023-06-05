<script setup lang="ts">
// @ts-nocheck

import { onMounted, ref } from 'vue'
import PocketBase from 'pocketbase'

let pb = null
const currentUser = ref()
const username = ref('')
const password = ref('')
const fullName = ref('')

const loginMode = ref(true)

onMounted(async () => {
  pb = new PocketBase('http://127.0.0.1:8090')

  pb.authStore.onChange(() => {
    currentUser.value = pb.authStore.model
  }, true)
})

const Logout = () => {
  pb.authStore.clear()
  currentUser.value = null
}

const Login = async () => {
  try {
    const authData = await pb.collection('users').authWithPassword(username.value, password.value)

    console.log(pb.authStore.isValid)
    console.log(pb.authStore.token)
    console.log(pb.authStore.model)
  } catch (error) {
    alert(error.message)
  }
}

const CreateAccount = async () => {
  try {
    const data = {
      username: `user_${self.crypto.randomUUID().split('-')[0]}`,
      email: username.value,
      emailVisibility: true,
      password: password.value,
      passwordConfirm: password.value,
      name: fullName.value
    }

    const record = await pb.collection('users').create(data)

    await Login()
  } catch (error) {
    alert(error.message)
  }
}
</script>

<template>
  <div class="flex min-h-full items-center justify-center bg-gris-1 px-4 py-28 sm:px-6 lg:px-8">
    <div class="w-full max-w-md space-y-8 p-6">
      <div v-if="currentUser">
        <h1 class="text-center font-dancing text-3xl">Bienvenue {{ currentUser?.name }}</h1>
        <div>
          <button
            class="m-28 rounded-xl border-4 border-noir bg-gris-2/50 px-10 py-2 font-dancing font-bold text-noir hover:bg-vert-2"
            @click="Logout"
          >
            Déconnexion
          </button>
        </div>
      </div>
      <div v-else>
        <h1 class="mx-auto text-center font-dancing text-blanc">
          {{ loginMode ? 'Se connecter' : "S'inscrire" }}
        </h1>
        <div class="mt-4 sm:col-span-2 sm:col-start-1">
          <label
            for="username"
            class="block py-4 font-dancing text-3xl font-medium leading-6 text-gris-3"
            >Adresse mail</label
          >
          <div class="mt-2">
            <input
              v-model="username"
              type="text"
              name="username"
              id="username"
              autocomplete="none"
              placeholder="Entrer une adresse mail "
              class="block w-full rounded-md border-0 px-2 py-1.5 text-gris-3 shadow-sm ring-1 ring-inset ring-gris-2 placeholder:text-gris-2 focus:ring-2 focus:ring-inset focus:ring-vert-2 sm:text-sm sm:leading-6"
            />
          </div>
        </div>
        <div class="mt-2 sm:col-span-2 sm:col-start-1">
          <label
            for="password"
            class="block py-4 font-dancing text-3xl font-medium leading-6 text-gris-3"
            >Mot de passe</label
          >
          <div class="mt-2">
            <input
              v-model="password"
              type="password"
              name="password"
              id="password"
              autocomplete="none"
              placeholder="Entrer votre mot de passe "
              class="block w-full rounded-md border-0 px-2 py-1.5 text-gris-3 shadow-sm ring-1 ring-inset ring-gris-2 placeholder:text-gris-2 focus:ring-2 focus:ring-inset focus:ring-vert-2 sm:text-sm sm:leading-6"
            />
          </div>
        </div>
        <div v-if="loginMode">
          <div class="mt-2 py-4 sm:col-span-2 sm:col-start-1">
            <button
              class="col-start-1 row-start-1 mb-3 mr-3 inline-flex rounded-xl border-4 border-noir bg-gris-2/50 px-10 py-2 font-dancing font-bold text-noir hover:bg-vert-2"
              @click="Login"
            >
              Se connecter
            </button>

            <button
              class="col-start-1 row-start-1 mb-3 mr-3 inline-flex rounded-xl border-4 border-noir bg-gris-2/50 px-10 py-2 font-dancing font-bold text-noir hover:bg-vert-2"
              @click="loginMode = false"
            >
              S'inscrire
            </button>
          </div>
        </div>
        <div v-else>
          <div class="mt-2 sm:col-span-2 sm:col-start-1">
            <label
              for="fullName"
              class="block py-4 font-dancing text-3xl font-medium leading-6 text-gris-3"
              >Nom</label
            >
            <div class="mt-2">
              <input
                v-model="fullName"
                type="text"
                name="fullName"
                id="fullName"
                autocomplete="none"
                placeholder="Enter Full Name "
                class="block w-full rounded-md border-0 px-2 py-1.5 text-gris-3 shadow-sm ring-1 ring-inset ring-gris-2 placeholder:text-gris-2 focus:ring-2 focus:ring-inset focus:ring-vert-2 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div class="mt-2 py-4 sm:col-span-2 sm:col-start-1">
            <button
              class="col-start-1 row-start-1 mb-3 mr-3 inline-flex rounded-xl border-4 border-noir bg-gris-2/50 px-10 py-2 font-dancing font-bold text-noir hover:bg-vert-2"
              @click="CreateAccount"
            >
              Sauvegarder Nouvel utilisateur
            </button>

            <button
              class="col-start-1 row-start-1 mb-3 mr-3 inline-flex rounded-xl border-4 border-noir bg-gris-2/50 px-10 py-2 font-dancing font-bold text-noir hover:bg-vert-2"
              @click="loginMode = true"
            >
              Annuler
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped></style>

<!--<script setup lang="ts">
import Backuparrow from '@/icons/Backuparrow.vue'
import Lianes from '@/icons/Lianes.vue'
import Avatar from '@/icons/Avatarconnexion.vue'
</script>

<template>
    <Backuparrow class="ml-5 mt-5"></Backuparrow>
    <h1 class="text-center text-4xl mb-5">Se connecter</h1>
    <Avatar class="flex m-auto mb-10"></Avatar>

        <div class="ml-10 mb-10">
            <label for="name" class="text-3xl">Mail</label>
            <input type="text" class="border-4 border-lime-800 rounded-xl text-2xl mb-5 p-1" />
        </div>

        <div class="ml-10">
            <label for="name" class="text-3xl">Mot de passe</label>
            <div>
                <input type="password" required class="border-4 border-lime-800 rounded-xl text-2xl mb-5 p-1" />
            </div>

        </div>
    <button
    class="flex text-white text-lg font-bold mx-auto my-10 border-4 border-lime-700 bg-lime-700 px-5 py-1 rounded-sm">
    Se connecter</button>

<Lianes class="absolute inset-x-0 bottom-0"></Lianes>
</template>-->
