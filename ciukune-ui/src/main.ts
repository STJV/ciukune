import App from './app.vue'
import apiResources from './plugins/api-resources'
import ciuControls from './plugins/ciu-controls'
import i18n from './plugins/i18n'
import router from './plugins/router'
import { createApp } from 'vue'

createApp(App)
    .use(apiResources)
    .use(ciuControls)
    .use(i18n)
    .use(router)
    .mount('#app')
