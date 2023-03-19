<template>
  <li class="header-nav-item header-nav-item__link">
    <a :href="aLink">{{ text }}</a>
  </li>
</template>

<script setup>
  defineProps({
    text: {
      type: String,
      required: true,
    },
    aLink: {
      type: String,
      required: true,
    }
  })
</script>

<style lang="scss">
  .header-nav-item__link {
    &::after {
      content: '...';
    }
    a {
      text-decoration: none;
      color: inherit;
    }
  }
</style>