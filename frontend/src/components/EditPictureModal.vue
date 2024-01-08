<template>
  <div @click="emit('closeModal')" class="fixed inset-0 bg-gray-500/75">
  <div class="flex size-full items-center justify-center">
    <div @click.stop class="flex w-80 h-60 bg-white rounded ">

    </div>
  </div>
  </div>

  
</template>

<script setup>

const emit = defineEmits(['closeModal'])

</script>