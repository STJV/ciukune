import App from './app.vue'
import apiResources from './plugins/api-resources'
import ciuControls from './plugins/ciu-controls'
import i18n from './plugins/i18n'
import { createApp } from 'vue'

createApp(App)
    .use(i18n)
    .use(apiResources)
    .use(ciuControls)
    .mount('#app')
