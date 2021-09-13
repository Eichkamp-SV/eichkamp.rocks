import Vue from 'vue'
import App from './App.vue'
import PrismicVue from '@prismicio/vue'
import linkResolver from './prismic/link-resolver'
import router from './router'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faInstagram, faFacebook } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope, faCalendarAlt } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

const endpoint = 'https://eichkamp.cdn.prismic.io/api/v2'

Vue.config.productionTip = false

Vue.component('font-awesome-icon', FontAwesomeIcon)
library.add(faInstagram, faFacebook, faEnvelope, faCalendarAlt)

Vue.use(PrismicVue, {
  endpoint,
  linkResolver
})

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')