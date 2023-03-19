<template>
  <li class="header-nav-item" @click="handleClick">
    {{ text }}
  </li>
</template>

<script setup>
  defineProps({
    text: {
      type: String,
      required: true
    }
  })
  defineEmits(['handleClick'])
</script>
