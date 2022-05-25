import { createApp } from 'vue'
import App from './App.vue'
import './index.css';
import AosVue from "aos-vue";
import VueGtag from "vue-gtag";

createApp(App).use(VueGtag, {
    config: { id: "G-8GHVNSQPNS" }
  }).use(AosVue).mount('#app')
