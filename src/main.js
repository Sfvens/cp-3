import Vue from 'vue'
import App from './App.vue'
import router from './router'

import { library } from '@fortawesome/fontawesome-svg-core'
import { faEye } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'



Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

library.add(faEye)
Vue.component('font-awesome-icon', FontAwesomeIcon);
