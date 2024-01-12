import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

import router from './router'

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faUsers, faTrash, faPen, faXmark } from '@fortawesome/free-solid-svg-icons'

library.add(faUsers, faTrash, faPen, faXmark)

createApp(App)
  .component('font-awesome-icon', FontAwesomeIcon)
  .use(router)
  .mount('#app')
