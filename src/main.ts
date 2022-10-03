import { createApp } from 'vue'
import App from './App.vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faPhone, faPlus, faThumbsUp, faCheck } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faPhone)
library.add(faPlus)
library.add(faThumbsUp)
library.add(faCheck)

// createApp(App).mount('#app')
createApp(App).component('font-awesome-icon', FontAwesomeIcon).mount('#app')
