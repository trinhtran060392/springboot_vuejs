// import Vue from 'vue'
// import App from './App.vue'
// import router from './router'
// import BootstrapVue from 'bootstrap-vue'
// import 'bootstrap/dist/css/bootstrap.css'
// import 'bootstrap-vue/dist/bootstrap-vue.css'
// import './assets/styles/fonts'
// import './assets/styles/main.scss'

Vue.config.productionTip = false

// Bootstrap
Vue.use(BootstrapVue)

new Vue({
    router,
    render: h => h(App)
}).$mount('#app')

