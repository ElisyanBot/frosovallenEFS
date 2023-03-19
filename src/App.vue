<template>
  <HeaderNav />
  <main>
    <AboutUs />
    <LearnMoreFeature />
    <FoodTable />
  </main>
  <footer></footer>
</template>

<script setup>
  import LearnMoreFeature from './features/LearnMoreSection/LearnMoreFeature.vue'
  import FoodTable from './features/FoodTable/FoodTable.vue'
  import AboutUs from './components/AboutUs.vue'
  import HeaderNav from './features/HeaderNav/HeaderNav.vue';
</script>

<style lang="scss">
  footer {
    background-color: #f37563;
    width: 100%;
    height: 30rem;
  }
</style>
