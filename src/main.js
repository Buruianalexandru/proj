import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import VueMathjax from 'vue-mathjax-next';
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

import './assets/styles.css'
import 'mathjax/es5/tex-mml-chtml.js';
// import store
import store from './store/index'
const vuetify = createVuetify({
    components,
    directives,

     theme: {
    defaultTheme: 'myTheme',
    themes: {
      myTheme: {
        colors: {
          primary: '#003366', // un albastru închis
          secondary: '#FFA500', // Oranj
          accent: '#1A237E', // un exemplu de albastru accent
        },
      },
    },
  },
})
createApp(App).use(router).use(vuetify).use(store).use(VueMathjax).mount('#app')