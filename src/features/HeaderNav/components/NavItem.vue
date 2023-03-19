<template>
  <li class="header-nav-item" @click="handleClick">
    <a :href="goTo"> {{ text }} </a>
  </li>
</template>

<script setup>
  defineProps({
    text: {
      type: String,
      required: true
    },
    goTo: {
      type: String
    }
  })
  defineEmits(['handleClick'])
</script>
