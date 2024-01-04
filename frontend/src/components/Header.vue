<template>
  <header class="bg-gradient-to-r from-slate-100 to-white shadow-md">
    <nav class=" flex items-center justify-between p-8 px-8" aria-label="Global">
      <div class="flex flex-1">
        <a href="#" class="-m-1.5 p-1.5">
          <font-awesome-icon icon="fa-solid fa-users"/>
        </a>
      </div>
      <div class="flex gap-x-12">
      </div>
      <div class="flex flex-1 justify-end">
        <button @click="logoff" class="text-sm font-semibold leading-6">Log off <span aria-hidden="true">&rarr;</span></button>
      </div>
    </nav>
  </header>
</template>

<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()

const logoff = async () => {
  const pastDate = new Date(0).toUTCString();
  document.cookie = 'token=; expires=' + pastDate + '; path=/;';
  router.push('/')
}
</script>