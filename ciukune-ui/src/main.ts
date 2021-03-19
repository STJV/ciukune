import App from './app.vue'
import ciuControls from './plugins/ciu-controls'
import i18n from './plugins/i18n'
import { createApp } from 'vue'

createApp(App)
    .use(i18n)
    .use(ciuControls)
    .mount('#app')
