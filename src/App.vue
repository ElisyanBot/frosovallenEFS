<template>
  <header></header>

  <main>
    <LearnMoreFeature />
    <FoodTable />
  </main>
  <footer>

  </footer>
</template>

<script setup>
  import LearnMoreFeature from './features/LearnMoreSection/LearnMoreFeature.vue'
  import FoodTable from './features/FoodTable/FoodTable.vue'
</script>

<style lang="scss">
  footer {
    background-color: #F37563;
    width: 100%;
    height: 30rem;
  }
</style>
