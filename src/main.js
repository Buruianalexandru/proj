import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import VueMathjax from 'vue-mathjax-next';
// global styles
import './assets/styles.css'
import 'mathjax/es5/tex-mml-chtml.js';
// import store
import store from './store/index'

createApp(App).use(router).use(store).use(VueMathjax).mount('#app')