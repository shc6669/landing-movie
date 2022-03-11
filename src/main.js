/* Import CSS */
import '../public/assets/plugins/global/plugins.bundle.css'
import '../public/assets/css/style.bundle.css'
import '../public/assets/css/datatables.bundle.css'

/* Define Vue and plugins*/
import { createApp } from 'vue'
import { setupRouter } from './router'
import App from './App.vue'
import axios from 'axios'
import VueAxios from 'vue-axios'

/* Vue init */
const router = setupRouter()
const app = createApp(App)
app.use(router)
app.use(VueAxios, axios)
app.mount('#app')