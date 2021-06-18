import App from './app.vue'
import i18n from './plugins/i18n'
import router from './plugins/router'
import { createApp } from 'vue'
import ckc from '@ciukune/ckc'

createApp(App)
    .use(ckc)
    .use(i18n)
    .use(router)
    .mount('#app')
