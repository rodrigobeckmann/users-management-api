<template>

  <Loading v-if="isLoading"/>

  <div v-else class="flex flex-col w-full !h-auto lg:flex-row items-center justify-center mt-10 gap-10 md:mt-0 md:!size-full">

    
    <div class="flex flex-col gap-4  bg-gray-300/50 w-80 h-3/4 rounded-md p-5 shadow border items-center">
      <div class="flex w-full relative items-center justify-center">
        <div @click="toggleEditPicureModal" class="flex absolute hover:bg-slate-700/75 w-1/2 aspect-square rounded-full md:w-full items-center justify-center text-transparent cursor-pointer hover:text-black hover:shadow-md">Change Picture</div>
        <img class="w-1/2 aspect-square rounded-full object-cover shadow-md md:w-full" :src="user.userPicture">
      </div>
    </div>

    <form class="flex flex-col gap-4  bg-gray-300/50 w-80 h-auto rounded-md p-5 shadow border md:w-[32rem] md:h-3/4">

      <EditFormInput :input-name="'First Name'" :is-editing="isEditing" :value="user.firstName" v-on:input="updateValue($event, 'firstName')"/>

      <EditFormInput :input-name="'Last Name'" :is-editing="isEditing" :value="user.lastName" v-on:input="updateValue($event, 'lastName')"/>

      <EditFormInput :input-name="'Telephone'" :is-editing="isEditing" :value="user.telephone" v-on:input="updateValue($event, 'telephone')" />
      
      <EditFormInput :input-name="'Address'" :is-editing="isEditing" :value="user.address" v-on:input="updateValue($event, 'address')"/>

      <EditFormInput :input-name="'Address Number'" :is-editing="isEditing" :value="user.addressNumber" v-on:input="updateValue($event, 'addressNumber')"/>

      <EditFormInput :input-name="'Zip Code'" :is-editing="isEditing" :value="user.zipCode" v-on:input="updateValue($event, 'zipCode')"/>

      <EditFormInput :input-name="'City'" :is-editing="isEditing" :value="user.city" v-on:input="updateValue($event, 'city')"/>

      <EditFormInput :input-name="'State'" :is-editing="isEditing" :value="user.state" v-on:input="updateValue($event, 'state')"/>

      <EditFormInput :input-name="'Country'" :is-editing="isEditing" :value="user.country" v-on:input="updateValue($event, 'country')"/>

      <button @click.prevent="toggleEdit">Edit</button>
      <button type="submit" @click.prevent="handleEditUser">submit</button>
    </form>
  </div>

  <EditPictureModal v-if="isEditPictureModalOpen" v-on:closeModal="toggleEditPicureModal" :userActualPicture="user.userPicture" :userId="route.params.id"/>

</template>

<script setup>
import { useRouter, useRoute } from 'vue-router'
import { getLoggedUser, updateUser, updateUserPicture, getUserById } from '../services/login'
import { onBeforeMount, ref } from 'vue'
import EditFormInput from '../components/EditFormInput.vue';
import EditPictureModal from '../components/EditPictureModal.vue';
import Loading from '../components/Loading.vue';

const user = ref({})
const isEditing = ref(false)
const isEditPictureModalOpen = ref(false)
const isLoading = ref(false)


const router = useRouter()
const route = useRoute()

const toggleEdit = () => {
  isEditing.value = !isEditing.value
}

const updateValue = (value, key) => {
  user.value[key] = value
}


const handleEditUser = async () => {
  console.log(user.value)
  const body = {
    firstName: user.value.firstName,
    lastName: user.value.lastName,
    address: user.value.address,
    addressNumber: user.value.addressNumber,
    zipCode: user.value.zipCode,
    city: user.value.city,
    state: user.value.state,
    country: user.value.country
  }
  await updateUser(user.value.id, body)
}

const toggleEditPicureModal = () => {
  isEditPictureModalOpen.value = !isEditPictureModalOpen.value
}

onBeforeMount(async () => {
  isLoading.value = true
  const response = await getLoggedUser()
  if (!response || response.id != Number(route.params.id) && !response.isAdmin) {
    router.push('/')
  } else {
    const userData = await getUserById(route.params.id)
    user.value = userData
  }
  isLoading.value = false
})
</script>