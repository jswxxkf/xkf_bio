import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

// events bus
const bus = new Vue()
Vue.prototype.$bus = bus;

function setHtmlFontSize() {
  let htmlWidth = document.body.clientWidth || document.documentElement.clientWidth
  const htmlDOM = document.querySelector('html')
  if (htmlWidth >= 1920) {
    htmlWidth = 1920
  } else if (htmlWidth <= 750) {
    htmlWidth = 750
  }
  htmlDOM.style.fontSize = `${htmlWidth / 10}px`
}

window.onresize = setHtmlFontSize
setHtmlFontSize()

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
