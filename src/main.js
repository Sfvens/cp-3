import Vue from 'vue'
import App from './App.vue'
import router from './router'

import mock from './mock-data.js'

// import { library } from '@fortawesome/fontawesome-svg-core'
// import { faEye } from '@fortawesome/free-regular-svg-icons'
// import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

Vue.config.productionTip = false

//changed product(s) to review(s)
//changed cart to favorites //probably will delete

let data = {
  reviews: mock,
  favorites: [],
  add(review) {
    this.favorites.push(review);
  },
  remove(review) {
    this.favorites.splice(this.favorites.indexOf(review), 1);
    // this.cart.push(product);
  }
}

new Vue({
  router,
  data,
  render: h => h(App)
}).$mount('#app')

// library.add(faEye)
// Vue.component('font-awesome-icon', FontAwesomeIcon);
