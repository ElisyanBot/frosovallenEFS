<template>
  <div :class="{ 'food-item': true, 'food-item--disabled': outOfStock }">
    <picture>
      <div v-if="outOfStock" class="food-item__picture--disabled">
        <p>slutsåld</p>
      </div>
      <img :src="imgSrc" alt="food item picture" />
    </picture>
    <div class="food-item__text-block">
      <h5>
        {{ headerTxt }}
      </h5>
      <p>
        {{ text }}
      </p>
    </div>
  </div>
</template>

<script setup>
  import { defineProps } from 'vue'

  defineProps({
    imgSrc: {
      type: String,
      required: true
    },
    headerTxt: {
      type: String,
      required: true
    },
    text: {
      type: String,
      required: true
    },
    outOfStock: {
      type: Boolean,
      required: false,
      default: false
    }
  })
</script>

<style lang="scss">
  .food-item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 4rem;

    border-bottom: 3px dashed #f2f2f2;
    color: #f2f2f2;

    width: 100%;
    max-width: 53rem;
    height: 20rem;

    picture {
      border-radius: 0.5rem;
      overflow: hidden;
      height: 15rem;
      width: 100%;
      max-width: 15rem;
    }
  }
  .food-item__text-block {
    height: 15rem;
    display: flex;
    flex-direction: column;
    gap: 1.2rem;

    h5 {
      color: #5a7d69;
      font-size: 2.2rem;
      font-weight: bold;
      text-transform: uppercase;
    }
    p {
      font-size: 1.8rem;
    }
  }
  .food-item--disabled {
    picture {
      position: relative;

      img {
        opacity: 1;
      }
    }
    .food-item__text-block {
      opacity: 0.4;
    }
  }

  .food-item__picture--disabled {
    background-color: rgba(47, 47, 47, 0.83);
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    position: absolute;
    p {
      display: block;
      padding: 1rem;
      color: #c64533;
      font-weight: bold;
      font-size: 1.8rem;
      text-align: center;
      text-transform: uppercase;
      border: 3px dashed #c64533;
      border-radius: 0.5rem;
    }
  }
</style>
