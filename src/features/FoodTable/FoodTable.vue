<template>
  <section class="food-table">
    <picture id="food-table__img-header">
      <source media="(min-width:650px)" srcset="../../../public/food-table/imgHeaderDesktop.png" />
      <source media="(min-width:465px)" srcset="../../../public/food-table/imgHeaderMobile.png" />
      <img src="../../../public/food-table/imgHeaderDesktop.png" alt="berg" />
    </picture>
    <MainWidthLayout>
      <div class="food-table__categories">
        <TableCategory
          font-awesome-class="bowl-rice"
          text="varm mat"
          :selected="selectedCategory === 'warm'"
          @handle-click="showWarmFood"
        />
        <TableCategory
          font-awesome-class="bowl-food"
          text="kall mat"
          :selected="selectedCategory === 'cold'"
          @handle-click="showColdFood"
        />
        <TableCategory
          font-awesome-class="ice-cream"
          text="fika"
          :selected="selectedCategory === 'dessert'"
          @handle-click="showDesserts"
        />
        <TableCategory
          font-awesome-class="mug-hot"
          text="dryck"
          :selected="selectedCategory === 'drinks'"
          @handle-click="showDrinks"
        />
      </div>
    </MainWidthLayout>
    <MainWidthLayout>
      <div
        :class="{
          'food-table__items': true,
          'food-table__items--expanded': expandedSection
        }"
      >
        <div class="food-table__divider" :style="{ 'grid-row-end': 'span ' + `${rowsNr}` }"></div>
        <FoodItem
          v-for="(item, index) in foodItems"
          :key="index"
          :header-txt="item.headerTxt"
          :text="item.text"
          :out-of-stock="item.outOfStock"
          :img-src="item.imgSrc"
        />
      </div>
    </MainWidthLayout>
    <div class="food-table__btn-container">
      <button v-if="foodItems.length >= 4" @click="handleClick">
        {{ btnTxt }}
      </button>
    </div>
  </section>
</template>

<script setup>
  import MainWidthLayout from '../../layouts/MainWidthLayout.vue'
  import TableCategory from './components/TableCategory.vue'
  import FoodItem from './components/FoodItem.vue'
  import { ref, watchEffect } from 'vue'
  import { warmFood, coldFood, desserts, drinks } from '../../../public/_MenuItems.js'

  const rowsNr = ref(1)
  const expandedSection = ref(false)
  const btnTxt = ref('visa mer')
  const foodItems = ref(warmFood)
  const selectedCategory = ref('warm')

  watchEffect(() => {
    rowsNr.value = Math.ceil(foodItems.value.length / 2)
  })

  const handleClick = () => {
    expandedSection.value = !expandedSection.value

    if (expandedSection.value) {
      btnTxt.value = 'visa mindre'
    } else {
      btnTxt.value = 'visa mer'
    }
  }

  const showWarmFood = () => {
    foodItems.value = warmFood
    selectedCategory.value = 'warm'
  }

  const showColdFood = () => {
    foodItems.value = coldFood
    selectedCategory.value = 'cold'
  }

  const showDesserts = () => {
    foodItems.value = desserts
    selectedCategory.value = 'dessert'
  }

  const showDrinks = () => {
    foodItems.value = drinks
    selectedCategory.value = 'drinks'
  }
</script>

<style lang="scss">
  #food-table__img-header {
    img {
      width: 100%;
      background-color: #f2f2f2;
      padding-top: 15rem;
    }
  }

  .food-table {
    background-color: #bdbba4;
    padding-bottom: 7rem;
    position: relative;
  }
  .food-table__categories {
    display: flex;
    justify-content: space-between;
    position: relative;
    top: -8rem;
  }
  .food-table__items {
    display: grid;
    grid-template-columns: [first] 1fr [divider] 10rem [second] 1fr;
    grid-template-rows: auto;
    justify-content: space-between;
    padding: 0 2rem;
    gap: 1rem;
    width: 100%;
    max-height: 50rem;
    overflow: hidden;
    animation: shrink-animation 0.5s ease-out;

    .food-table__divider {
      content: ' ';
      overflow: hidden;
      padding-bottom: 1rem;
      border-right: 2px dashed #f8f8f8da;

      justify-self: center;
      grid-column-start: span divider;
      grid-column-end: second;
      grid-row: 1 / last-line;
    }
  }

  .food-table__items--expanded {
    max-height: fit-content;
    animation: expand-animation 1s ease-out;
  }

  .food-table__btn-container {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    margin-top: 6rem;

    button {
      background-color: #7d9a89;
      border: none;
      color: #ffffff;
      font-weight: bold;
      font-size: 2rem;
      text-transform: uppercase;
      filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
      padding: 2rem 0;
      width: 25rem;

      &:hover {
        cursor: pointer;
      }
    }
  }

  @keyframes expand-animation {
    0% {
      max-height: 50rem;
    }

    100% {
      max-height: 250rem;
    }
  }

  @keyframes shrink-animation {
    0% {
      max-height: 150rem;
    }

    100% {
      max-height: 50rem;
    }
  }
</style>
