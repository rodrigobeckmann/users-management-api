<template>

  <Loading v-if="isLoading" />

  <div v-else class="flex flex-col size-full lg:flex-row">
    <div class="order-2 flex w-full justify-center lg:justify-end lg:order-1">
      <ul class="flex flex-col gap-4 items-center lg:m-10 w-80">
        <li
          class="flex bg-gray-300/50 w-full rounded-md p-2 font-mono text-sm tracking-normal shadow justify-between border"
          v-for="user in usersList" :key="user.id">
          <div class="flex flex-col gap-1">
            <p>User: <span class="font-bold">{{ user.email }}</span></p>
            <p>Name: <span class="font-bold">{{ user.fullName }}</span></p>
          </div>
          <div class="flex flex-col gap-2">
            <font-awesome-icon @click="openUserPanel(user.id)" class="hover:text-yellow-600 cursor-pointer m-[2px]" icon="fa-solid fa-pen" />
            <font-awesome-icon class="hover:text-red-600 cursor-pointer m-[2px]" icon="fa-solid fa-trash" />
          </div>
        </li>
      </ul>
    </div>
    <div class="flex justify-center order-1 w-full lg:order-2 lg:justify-start">
      <aside class="flex bg-gray-300/50 w-96 m-10 h-96 rounded-md shadow justify-between border">
      </aside>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'
import { onBeforeMount, ref } from 'vue';
import { getAllUsers } from '../services/login';
import Loading from '../components/Loading.vue';

const usersList = ref([])
const isLoading = ref(false)

const router = useRouter()

const openUserPanel = (id) => {
  router.push('/user/' + id)
}

onBeforeMount(async () => {
  isLoading.value = true
  const response = await getAllUsers()
  usersList.value = response
  isLoading.value = false
})
</script>