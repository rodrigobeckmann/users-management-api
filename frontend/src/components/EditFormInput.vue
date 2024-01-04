<template>
  <label> {{ inputName }}:
    <input :disabled="!isEditing" class="bg-gray-300 text-black/50" :class="{ '!bg-white !text-black': isEditing }"
      type="text" :value="value" @input="emit('input', $event.target.value)" />
  </label>
</template>

<script setup>
const props = defineProps(['isEditing', 'value', 'inputName'])
const emit = defineEmits(['input'])
</script>