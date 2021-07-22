import { createApp } from 'vue';
import App from './App.vue';
import './registerServiceWorker';
import router from './router';
import './assets/tailwindcss/main.css';
import store from './store/index.js';
import VueGoogleMaps from '@fawmi/vue-google-maps';

const app = createApp(App)

app.use(router)
app.use(store)
app.use(VueGoogleMaps, {
    load: {
        key: 'AIzaSyAJtxFwGzPtJ4YjuCn6OvzkzzgPK-DBUZg',
    },
})
app.mount('#app')
