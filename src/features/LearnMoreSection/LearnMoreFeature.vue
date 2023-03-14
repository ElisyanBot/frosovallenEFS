<template>
  <MainWidthLayout>
    <div class="icon__container">
      <InfoIcon
        bg-src="./FrosovallenHus.png"
        text="cafe"
        @handle-click="() => (currentInfoObj = 'cafe')"
      />

      <InfoIcon
        bg-src="./FrosovallenHus.png"
        text="vandrarhem"
        @handle-click="() => (currentInfoObj = 'vandrarhem')"
      />

      <InfoIcon
        bg-src="./FrosovallenHus.png"
        text="event"
        @handle-click="() => (currentInfoObj = 'event')"
      />

      <InfoIcon
        bg-src="./FrosovallenHus.png"
        text="gudstjänst"
        @handle-click="() => (currentInfoObj = 'gudstjänster')"
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
import { ref } from 'vue'

const currentInfoObj = ref('cafe')

const mockData = ref({
  cafe: [
    {
      headerTxt: 'öppet',
      infoTxt: "detta är ett test <a href='#'>länk</a>"
    },
    {
      headerTxt: 'hitta hit',
      infoTxt: "detta är ett test <a href='#'>länk</a>"
    }
  ],
  vandrarhem: [
    {
      headerTxt: 'kontakt',
      infoTxt: "detta är ett test <a href='#'>länk</a>"
    },
    {
      headerTxt: 'hitta hit',
      infoTxt: "detta är ett test <a href='#'>länk</a>"
    }
  ],
  event: [
    {
      headerTxt: 'om oss',
      infoTxt: "detta är ett test <a href='#'>länk</a>"
    },
    {
      headerTxt: 'hitta hit',
      infoTxt: "detta är ett test <a href='#'>länk</a>"
    }
  ],
  gudstjänster: [
    {
      headerTxt: 'söndagar',
      infoTxt: "detta är ett test <a href='#'>länk</a>"
    },
    {
      headerTxt: 'hitta hit',
      infoTxt: "detta är ett test <a href='#'>länk</a>"
    }
  ]
})
</script>

<style lang="scss">
.icon__container {
  display: flex;
  justify-content: space-between;
}
</style>
