<template>
  <div class="flex w-full h-full items-center justify-center">
    <form class="flex flex-col w-50 h-56 gap-4 items-center border rounded-md bg-slate-100 shadow-2xl p-5"
      :onSubmit="handleLogin">
      <div class="flex flex-col">
        <input class="rounded shadow-md mb-2" v-model="email" type="email" placeholder="email" />
        <input class="rounded shadow-md mb-2" v-model="password" type="password" placeholder="password" />
      </div>
      <button class="bg-cyan-200 w-1/2 h-1/4 border border-solid rounded shadow-md" type="submit">Login</button>
    </form>
  </div>
</template>

<script setup>
import { login } from '../services/login'
import { ref } from 'vue'
import swal from 'sweetalert2'

const email = ref('')
const password = ref('')

const handleLogin = async (e) => {
  e.preventDefault()
  try {
    await login({ email: email.value, password: password.value })
    location.reload()
  } catch {
    swal.fire({
      title: 'Error',
      text: 'Invalid email or password',
      icon: 'error',
      confirmButtonText: 'Ok'
    })
  }
}
</script>