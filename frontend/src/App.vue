<script setup>
import { useRouter } from 'vue-router'
import { getLoggedUser } from './services/login';
import { onBeforeMount, ref } from 'vue'
import Header from './components/Header.vue';

const router = useRouter()
const userLogged = ref(false)
const userId = ref(0)
const isAdmin = ref(false)

const updateUser = async () => {
  const response = await getLoggedUser()
  if (response) {
    userLogged.value = true
    userId.value = response.id
    isAdmin.value = response.isAdmin
  } else {
    userLogged.value = false
    userId.value = 0
    isAdmin.value = false
  }
}

const redirectUser = async () => {
  if (userLogged.value) {
    if (isAdmin.value) {
      if (router.currentRoute.value.path === '/') {
        router.push('/control-panel')
      }
    } else {
      router.push('/user/' + userId.value)
    }
  } else {
    router.push('/')
  }
}

onBeforeMount(async () => {
  await updateUser()
  await redirectUser()
})
</script>

<template>
  <Header/>
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
