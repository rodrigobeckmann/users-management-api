<script setup>
import { login, getAllUsers } from './services/login'
import { onBeforeMount, ref } from 'vue'

const email = ref('')
const password = ref('')

const handleLogin = async (e) => {
  e.preventDefault()
  await login({email: email.value, password: password.value})
}

onBeforeMount(async () => {
  const users = await getAllUsers()
  console.log(users)
})
</script>

<template>
  <form :onSubmit="handleLogin">
    <input v-model="email" type="text" placeholder="email" />
    <input v-model="password" type="password" placeholder="password" />
    <button type="submit">Login</button>
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
