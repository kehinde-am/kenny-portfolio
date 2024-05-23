// src/main.ts
import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import { MotionPlugin } from '@vueuse/motion';
import './styles/style.scss'; 

const app = createApp(App);
app.use(router);
app.use(MotionPlugin);
app.mount('#app');
