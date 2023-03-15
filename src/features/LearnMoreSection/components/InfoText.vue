<template>
  <div class="info-text__container">
    <h4>{{ headerTxt }}</h4>
    <span v-html="infoTxt"></span>
  </div>
</template>

<script setup>
  import { defineProps } from 'vue'

  defineProps({
    headerTxt: {
      type: String,
      required: true
    },
    infoTxt: {
      type: String,
      required: true
    }
  })
</script>

<style lang="scss">
  .info-text__container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 8rem;

    h4 {
      font-size: 3.5rem;
      text-transform: uppercase;
      color: #1c4e46;
    }

    span {
      display: flex;
      justify-content: flex-end;
      align-items: center;
      font-size: 2.6rem;
      text-transform: uppercase;
      color: #5e6963;
      height: inherit;

      a {
        color: #4791a8;
        &::before {
          content: '|';
          margin: 0 1rem;
        }
      }
    }
  }
</style>
