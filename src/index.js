import Vue from 'vue'
import App from './App.vue'
import router from './router/index'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    components: {App},
    template: '<App/>'
})
/*new Vue({
    router,
    render: h => h(App)
}).$mount('#app')*/
