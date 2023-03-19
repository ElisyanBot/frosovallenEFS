<template>
  <div
    @click="handleClick"
    :class="{ 'food-table__category': true, 'food-table__category--selected': selected }"
  >
    <FontAwesomeIcon :icon="['fas', fontAwesomeClass]" />
    <h4>{{ text }}</h4>
  </div>
</template>

<script setup>
  import { defineProps, defineEmits } from 'vue'

  defineProps({
    text: {
      type: String,
      required: true
    },
    fontAwesomeClass: {
      type: String,
      required: false
    },
    selected: {
      type: Boolean,
      default: false
    }
  })

  const emit = defineEmits(['handleClick'])

  const handleClick = () => {
    emit('handleClick')
  }
</script>

<style lang="scss">
  .food-table__category {
    background-color: #bdbba4;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 2.5rem;
    width: 100%;
    max-width: 24.2rem;
    height: 21.5rem;
    border-radius: 0.5rem;
    color: #f2f2f2;
    filter: drop-shadow(0px 0px 15px rgba(0, 0, 0, 0.25));
    &:hover {
      cursor: pointer;
      h4 {
        text-decoration: underline;
      }
    }
    h4 {
      font-size: 2.2rem;
      text-transform: uppercase;
      font-weight: bold;
    }
    svg {
      width: 15rem;
      height: 8.5rem;
    }
  }
  .food-table__category--selected {
    svg {
      color: #f37563;
    }
  }
</style>
