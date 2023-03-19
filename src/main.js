import { createApp } from 'vue'
import App from './App.vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import {
  faUtensils,
  faCalendar,
  faChurch,
  faHouse,
  faIceCream,
  faMugHot,
  faBowlFood,
  faBowlRice
} from '@fortawesome/free-solid-svg-icons'
import './assets/main.css'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faUtensils, faCalendar, faChurch, faHouse, faIceCream, faMugHot, faBowlFood, faBowlRice)
createApp(App).component('FontAwesomeIcon', FontAwesomeIcon).mount('#app')
