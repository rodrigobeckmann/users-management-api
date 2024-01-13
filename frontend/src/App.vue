<template>
  <Header :userName="userName" :userLogged="userLogged" v-on:logoff="handleLogOff"/>
  <router-view/>
</template>

<script setup>
import { useRouter } from 'vue-router'
import { getLoggedUser } from './services/login';
import { onBeforeMount, ref } from 'vue'
import Header from './components/Header.vue';
import { removeToken } from './utils/token';

const router = useRouter()
const userLogged = ref(false)
const userId = ref(0)
const isAdmin = ref(false)
const userName = ref('')

const logOff = () => {
  removeToken()
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


const handleLogOff = async () => {
  await logOff()
  await clearUser()
}

onBeforeMount(async () => {
  await updateUser()
})
</script>
