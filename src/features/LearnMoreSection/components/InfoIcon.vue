<template>
  <div @click="handleClick" class="info-icon">
    <div class="info-icon__background">
      <img :src="bgSrc" alt="info-icon icon background" />
      <div>
        <FontAwesomeIcon class="test" :icon="['fas', iconClass]" />
      </div>
    </div>
    <div class="info-icon__text">
      <p>
        {{ text }}
      </p>
    </div>
  </div>
</template>

<script setup>
  import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
  import { defineProps, defineEmits } from 'vue'

  defineProps({
    bgSrc: {
      type: String,
      required: true
    },
    text: {
      type: String,
      required: true
    },
    iconClass: {
      type: String,
      required: false
    }
  })

  const emit = defineEmits(['handleClick'])

  const handleClick = () => {
    emit('handleClick')
  }
</script>

<style lang="scss">
  .info-icon {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 28rem;

    &:hover {
      cursor: pointer;
    }
  }

  .info-icon__background {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;

    div {
      position: absolute;
      background-color: #7d9a89;
      border-radius: 5px;
      width: 20rem;
      height: 20rem;
      display: flex;
      justify-content: center;
      align-items: center;
      svg {
        width: inherit;
        height: 9rem;
        color: #1c4e46;
      }

      .test {
        filter: drop-shadow(0px 0px 8px 10px #092420);
      }
    }
  }

  .info-icon__text {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 7rem;
    width: 100%;

    p {
      color: #1c4e46;
      font-size: 2.8rem;
      font-weight: bold;
      text-transform: uppercase;
    }
  }
</style>
