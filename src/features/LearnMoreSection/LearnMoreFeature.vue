<template>
  <MainWidthLayout>
    <div class="icon__container">
      <InfoIcon
        bg-src="./learn-more__cafe-img.png"
        text="cafe"
        icon-class="utensils"
        @handle-click="() => (currentInfoObj = 'cafe')"
      />

      <InfoIcon
        bg-src="./learn-more__vandrarhem-img.png"
        text="vandrarhem"
        icon-class="house"
        @handle-click="() => (currentInfoObj = 'vandrarhem')"
      />

      <InfoIcon
        bg-src="./learn-more__event-img.png"
        text="event"
        icon-class="calendar"
        @handle-click="() => (currentInfoObj = 'event')"
      />

      <InfoIcon
        bg-src="./learn-more__gudstjänst-img.png"
        text="gudstjänst"
        icon-class="church"
        @handle-click="() => (currentInfoObj = 'gudstjänster')"
      />
    </div>
    <div class="info-text__line-animation">
      <img src="/line-green.svg" alt="animation" />
      <img
        :style="{ left: arrowPlacement + '%' }"
        class="line-green__arrow"
        src="/line-green__arrow.svg"
        alt="animation"
      />
    </div>
    <InfoTextLayout>
      <InfoText
        v-for="(item, i) in mockData[currentInfoObj]"
        :key="i"
        :header-txt="item.headerTxt"
        :info-txt="item.infoTxt"
      />
    </InfoTextLayout>
  </MainWidthLayout>
</template>

<script setup>
  import MainWidthLayout from '../../layouts/MainWidthLayout.vue'
  import InfoIcon from './components/InfoIcon.vue'
  import InfoText from './components/InfoText.vue'
  import InfoTextLayout from './components/InfoTextLayout.vue'
  import { ref, watchEffect } from 'vue'
  import infoTextObj from '../../../public/_infoTextObj'

  const currentInfoObj = ref('cafe')
  const mockData = ref(infoTextObj)
  const arrowPlacement = ref(null)

  watchEffect(() => {
    if (currentInfoObj.value === 'cafe') {
      arrowPlacement.value = 8.1
    }
    if (currentInfoObj.value === 'vandrarhem') {
      arrowPlacement.value = 34
    }
    if (currentInfoObj.value === 'event') {
      arrowPlacement.value = 59.8
    }
    if (currentInfoObj.value === 'gudstjänster') {
      arrowPlacement.value = 87.1
    }
  })
</script>

<style lang="scss">
  .icon__container {
    display: flex;
    justify-content: space-between;
  }
  .info-text__line-animation {
    margin: 8rem 0;
    position: relative;
    .line-green__arrow {
      position: absolute;
      top: -3.2rem;
      left: 87%;
      height: 5.5rem;
      width: 8rem;
      transition: all 0.5s;
    }
  }
</style>
