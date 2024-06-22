// src/main.ts
import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import { MotionPlugin } from '@vueuse/motion';
import './styles/style.scss';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';


library.add(faExternalLinkAlt, faGithub);

const app = createApp(App);


app.component('font-awesome-icon', FontAwesomeIcon);

app.use(router);
app.use(MotionPlugin);
app.mount('#app');
