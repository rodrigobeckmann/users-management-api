<template>
   <form :onSubmit="handleLogin">
    <input v-model="email" type="text" placeholder="email" />
    <input v-model="password" type="password" placeholder="password" />
    <button :disabled="isLoggedIn" type="submit">Login</button>
    <button :disabled="!isLoggedIn" type="button" @click="logoff">Logoff</button>
  </form>
</template>

<script setup>
import { login, getAllUsers, verifyLogin } from '../services/login'
import { onBeforeMount, ref } from 'vue'
import { useRouter } from 'vue-router'

const email = ref('')
const password = ref('')
const isLoggedIn = ref(false)

const router = useRouter()

const handleLogin = async (e) => {
  e.preventDefault()
  const response = await login({email: email.value, password: password.value})
  if (response) {
    const {isAdmin} = await verifyLogin()
    if (isAdmin) {
      router.push('/control-panel')
    } else {
      router.push('/')
    }
  }
}

const logoff = async () => {
  const pastDate = new Date(0).toUTCString();
  document.cookie = 'token=; expires=' + pastDate + '; path=/;';
  isLoggedIn.value = false
}

onBeforeMount(async () => {
  const users = await getAllUsers()
  console.log(users)
})
</script>