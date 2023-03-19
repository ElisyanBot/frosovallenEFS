<template>
  <picture class="main-header__img">
    <img src="/main-header__img.png" alt="" />
  </picture>
  <MainWidthLayout>
    <header class="header-nav">
      <ul class="header-nav__desktop-menu-row">
        <NavItem text="cafe" go-to="#cafe" />
        <NavItem text="meny" go-to="#meny" />
      </ul>
      <div class="header-nav__logo">logo</div>
      <ul class="header-nav__desktop-menu-row">
        <NavLinkIem text="evenemang" a-link="https://facebook.com" />
        <NavLinkIem text="hitta hit" a-link="https://facebook.com" />
      </ul>
    </header>
  </MainWidthLayout>
</template>

<script setup>
  import MainWidthLayout from '../../layouts/MainWidthLayout.vue'
  import NavItem from './components/NavItem.vue'
  import NavLinkIem from './components/NavLinkIem.vue'
</script>

<style lang="scss">
  .main-header__img {
    background-color: #040410;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 80rem;
    img {
      width: 192.5rem;
      height: 80rem;
      object-fit: fill;
    }
  }
  .header-nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;
    overflow: visible;
    width: 100%;
  }
  .header-nav__logo {
    background-color: #f2f2f2;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 23rem;
    height: 22rem;
    filter: drop-shadow(0px 0px 10px rgba(0, 0, 0, 0.25));
    border-radius: 0.5rem;
    position: absolute;
    z-index: 9999;
    left: 0;
    right: 0;
    top: -8rem;
    margin: 0 auto;
  }
  .header-nav-item {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 22rem;
    height: 5rem;
    list-style: none;
    margin: 5rem 0;
    font-size: 2.4rem;
    font-weight: bold;
    text-transform: uppercase;
    a {
      color: inherit;
      text-decoration: none;
    }

    &:hover {
      cursor: pointer;

      a {
        text-decoration: underline;
      }
    }
  }

  .header-nav__desktop-menu-row {
    display: flex;
    justify-content: space-between;
    height: inherit;
  }
</style>
