<template>
  <h1>User {{ $route.params.id }}</h1>
  <button type="button" @click="logoff">Logoff</button>
</template>

<script setup>
import { useRouter, useRoute } from 'vue-router'
import { getLoggedUser } from '../services/login'
import { onBeforeMount } from 'vue'

const router = useRouter()
const route = useRoute()

const logoff = async () => {
  const pastDate = new Date(0).toUTCString();
  document.cookie = 'token=; expires=' + pastDate + '; path=/;';
  router.push('/')
}

onBeforeMount(async () => {
  const response = await getLoggedUser()
  if (!response || response.id != Number(route.params.id) && !response.isAdmin) {
    router.push('/')
  } 
})
</script>