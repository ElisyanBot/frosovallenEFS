<template>
  <MainWidthLayout>
    <div class="icon__container">
      <InfoIcon
        bg-src="./FrosovallenHus.png"
        text="cafe"
        icon-class="church"
        @handle-click="() => (currentInfoObj = 'cafe')"
      />

      <InfoIcon
        bg-src="./FrosovallenHus.png"
        text="vandrarhem"
        icon-class="church"
        @handle-click="() => (currentInfoObj = 'vandrarhem')"
      />

      <InfoIcon
        bg-src="./FrosovallenHus.png"
        text="event"
        icon-class="church"
        @handle-click="() => (currentInfoObj = 'event')"
      />

      <InfoIcon
        bg-src="./FrosovallenHus.png"
        text="gudstjänst"
        icon-class="church"
        @handle-click="() => (currentInfoObj = 'gudstjänster')"
      />
    </div>
    <div class="info-text__line-animation">
      <img src="/line-green.svg" alt="animation" />
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
  import { ref } from 'vue'
  import infoTextObj from '../../../public/_infoTextObj'

  const currentInfoObj = ref('cafe')

  const mockData = ref(infoTextObj)
</script>

<style lang="scss">
  .icon__container {
    display: flex;
    justify-content: space-between;
  }
  .info-text__line-animation {
    margin: 8rem 0;
  }
</style>
