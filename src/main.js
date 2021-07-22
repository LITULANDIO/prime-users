import { createApp } from 'vue';
import App from './App.vue';
import './registerServiceWorker';
import router from './router';
import './assets/tailwindcss/main.css';
import store from './store/index.js';

const app = createApp(App)

app.use(router)
app.use.apply(store)
app.mount('#app')
