<script setup>
import { login, getAllUsers, verifyLogin } from './services/login'
import { onBeforeMount, ref } from 'vue'

const email = ref('')
const password = ref('')
const isLoggedIn = ref(false)

const handleLogin = async (e) => {
  e.preventDefault()
  const response = await login({email: email.value, password: password.value})
  if (response) {
    isLoggedIn.value = false
  }
}

const logoff = async () => {
  const pastDate = new Date(0).toUTCString();
  document.cookie = 'token=; expires=' + pastDate + '; path=/;';
  isLoggedIn.value = false
}

onBeforeMount(async () => {
  isLoggedIn.value = await verifyLogin()
  const users = await getAllUsers()
  console.log(users)
})
</script>

<template>
  <form :onSubmit="handleLogin">
    <input v-model="email" type="text" placeholder="email" />
    <input v-model="password" type="password" placeholder="password" />
    <button :disabled="isLoggedIn" type="submit">Login</button>
    <button :disabled="!isLoggedIn" type="button" @click="logoff">Logoff</button>
  </form>
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
