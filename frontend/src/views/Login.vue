<template>
  <div class="flex w-full h-full items-center justify-center">
    <form class="flex flex-col w-50 h-56 gap-4 items-center border rounded-md bg-slate-100 shadow-2xl p-5"
      :onSubmit="handleLogin">
      <div class="flex flex-col">
        <input class="rounded shadow-md mb-2" v-model="email" type="email" placeholder="email" />
        <input class="rounded shadow-md mb-2" v-model="password" type="password" placeholder="password" />
        <p class="text-xs font-mono text-red-600 italic">email e/ou senha inválidos</p>
      </div>
      <button class="bg-cyan-200 w-1/2 h-1/4 border border-solid rounded shadow-md" type="submit">Login</button>
    </form>
  </div>
</template>

<script setup>
import { login, getAllUsers, verifyLogin } from '../services/login'
import { onBeforeMount, ref } from 'vue'
import { useRouter } from 'vue-router'

const email = ref('')
const password = ref('')

const router = useRouter()

const handleLogin = async (e) => {
  e.preventDefault()
  const response = await login({ email: email.value, password: password.value })
  if (response) {
    const { isAdmin } = await verifyLogin()
    if (isAdmin) {
      router.push('/control-panel')
    } else {
      router.push('/')
    }
  }
}



</script>