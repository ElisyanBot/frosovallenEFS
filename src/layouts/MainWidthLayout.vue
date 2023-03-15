<template>
  <section class="layout__main-width">
    <slot></slot>
  </section>
</template>

<style lang="scss">
  .layout__main-width {
    margin: auto;
    display: flex;
    flex-direction: column;

    width: 100%;
    max-width: 130rem;
  }
</style>
