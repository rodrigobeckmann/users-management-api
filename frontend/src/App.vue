<template>
  <Header :userName="userName" :userLogged="userLogged" v-on:logoff="handleLogOff"/>
  <router-view/>
</template>

<script setup>
import { useRouter } from 'vue-router'
import { getLoggedUser } from './services/login';
import { onBeforeMount, ref } from 'vue'
import Header from './components/Header.vue';

const router = useRouter()
const userLogged = ref(false)
const userId = ref(0)
const isAdmin = ref(false)
const userName = ref('')

const logOff = async () => {
  const pastDate = new Date(0).toUTCString();
  document.cookie = 'token=; expires=' + pastDate + '; path=/;';
  router.push('/')
}

const clearUser = async () => {
  userLogged.value = false
  userId.value = 0
  isAdmin.value = false
  userName.value = ''
}

const updateUser = async () => {
  try {
    const response = await getLoggedUser()
    userLogged.value = true
    userId.value = response.id
    isAdmin.value = response.isAdmin
    userName.value = response.firstName
  } catch {
    clearUser()
  }
}

const redirectUser = async () => {
  if (userLogged.value === true) {
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

const handleLogOff = async () => {
  await logOff()
  await clearUser()
}

onBeforeMount(async () => {
  await updateUser()
  await redirectUser()
})
</script>
