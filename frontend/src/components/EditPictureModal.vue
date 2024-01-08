<template>
  <div @click="emit('closeModal')" class="fixed inset-0 bg-gray-500/75">
    <div class="flex size-full items-center justify-center">
      <div @click.stop class="flex flex-col items-center h-1/2 p-6 bg-white rounded ">
        <img :src="previewURL ? previewURL : userActualPicture" alt="Preview" class="mx-2 aspect-square h-3/4 border object-cover rounded-full shadow-md">
        <form enctype="multipart/form-data">
          <div class="flex flex-col items-center justify-center">
            <input ref="fileInput" type="file" name="image" class="hidden" @change="previewImage">
            <button @click.prevent="openFileInput" class="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold w-full py-2 px-4 rounded">Select image</button>
            <button :disabled="!uploadedImageIsValid" @click="handleUpdatePicture" type="submit"
              class="mt-4 bg-gray-500 text-white font-bold w-full py-2 px-4 rounded"
              :class="{'!bg-blue-500 !hover:bg-blue-700': uploadedImageIsValid}"
              >Save</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup>
import { updateUserPicture } from '../services/login';
import { ref, computed } from 'vue';

const props = defineProps({
  userActualPicture: String,
  userId: String
});

const previewURL = ref(null);
const fileInput = ref(null);

const uploadedImageIsValid = computed(() => previewURL.value !== null);

const openFileInput = () => {
  fileInput.value.click();
}

const handleUpdatePicture = async (e) => {
  e.preventDefault();
  const formData = new FormData();
  const file = document.querySelector('input[type="file"]').files[0];
  formData.append('userPicture', file);
  await updateUserPicture( props.userId, formData);
  emit('closeModal');
}

const previewImage = (e) => {
  const file = e.target.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = (event) => {
      previewURL.value = event.target.result;
    };
    reader.readAsDataURL(file);
  } else {
    previewURL.value = null;
  }
}

const emit = defineEmits(['closeModal'])

</script>