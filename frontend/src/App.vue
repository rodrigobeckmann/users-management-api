<script setup>
import { useRouter } from 'vue-router'
import { getLoggedUser } from './services/login';
import { onBeforeMount } from 'vue'

const router = useRouter()

onBeforeMount(async () => {
  const response = await getLoggedUser()
  if (response) {
    if (response.isAdmin) {
      if (router.currentRoute.value.path === '/') {
        router.push('/control-panel')
      }
    } else {
      router.push('/user/' + response.id)
    }
  } else {
    router.push('/')
  }
})
</script>

<template>
  <router-view/>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
