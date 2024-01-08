<template>
  <div class="flex h-full w-full justify-center">
    <div class="flex mb-2 items-center w-1/4 text-sm justify-center bg-blue-200 rounded-l border-l border-y border-solid border-gray-500 shadow-md text-center md:text-base">{{ inputName }}</div>
      <input :disabled="!isEditing" class="bg-gray-300 text-black/50 rounded-r w-1/2 text-sm shadow-md mb-2 md:text-base"
        :class="{ '!bg-white !text-black': isEditing }" :type="type || 'text'" :value="value"
        @input="emit('input', $event.target.value)" />
  </div>
</template>

<script setup>
const props = defineProps(['isEditing', 'value', 'inputName', 'type'])
const emit = defineEmits(['input'])
</script>