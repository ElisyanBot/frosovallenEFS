<template>
  <div @click="handleClick" class="food-table__category">
    <i :class="fontAwesomeClass"></i>
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
    width: 100%;
    max-width: 24.2rem;
    height: 21.5rem;
    border-radius: 0.5rem;
    color: #f2f2f2;
    filter: drop-shadow(0px 0px 15px rgba(0, 0, 0, 0.25));
    &:hover {
      cursor: pointer;
    }
    h4 {
      font-size: 2.2rem;
      text-transform: uppercase;
      font-weight: bold;
    }
    i {
      font-size: 2.2rem;
    }
  }
  .food-table__category--selected {
    i {
      color: #f37563;
    }
  }
</style>
