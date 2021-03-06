import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import App from './App.vue'
import 'element-plus/dist/index.css'
import 'bootstrap-icons/font/bootstrap-icons.scss'
import router from './router'
const app = createApp(App)
app.use(ElementPlus)
app.use(router)
app.mount('#app')