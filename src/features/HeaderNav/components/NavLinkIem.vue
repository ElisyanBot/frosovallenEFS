<template>
  <li class="header-nav-item header-nav-item__link">
    <a target="_blank" :href="aLink">{{ text }}</a>
    <FontAwesomeIcon icon="arrow-up-right-from-square" />
  </li>
</template>

<script setup>
  import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

  defineProps({
    text: {
      type: String,
      required: true
    },
    aLink: {
      type: String,
      required: true
    }
  })
</script>

<style lang="scss">
  .header-nav-item__link {
    a {
      text-decoration: none;
      color: inherit;
    }
    svg {
      height: 1.3rem;
      color: #525d54;
      align-self: flex-start;
      margin: 0.5rem 0 0 0.5rem;
    }

    &:hover {
      svg {
        color: rgb(49, 126, 198);
      }
    }
  }
</style>
