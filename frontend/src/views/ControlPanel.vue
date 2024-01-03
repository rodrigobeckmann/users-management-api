<template>
  <h1>cp</h1>
  <button type="button" @click="logoff">Logoff</button>
</template>

<script setup>
import {useRouter} from 'vue-router'

const router = useRouter()

const logoff = async () => {
  const pastDate = new Date(0).toUTCString();
  document.cookie = 'token=; expires=' + pastDate + '; path=/;';
  router.push('/')
}

</script>