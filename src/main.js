import { createApp } from 'vue'
import App from './App.vue'

import './assets/tailwind.css'
import PrimeVue from "primevue/config";
import InputText from "primevue/inputtext";
import Avatar from 'primevue/avatar';
import Menu from 'primevue/menu';
import Chart from 'primevue/chart';


import 'primevue/resources/themes/tailwind-light/theme.css';
import 'primevue/resources/primevue.min.css'
import "primeicons/primeicons.css"


const app = createApp(App)
 
app.component('Chart',Chart);
app.component('Menu',Menu);
app.component('InputText',InputText);
app.component('Avatar',Avatar)
app.use(PrimeVue)
app.mount('#app')
