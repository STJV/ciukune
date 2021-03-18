import { createApp } from 'vue'
import { registerControls } from './components/controls/index'
import App from './app.vue'

let app = createApp(App)
registerControls(app)
app.mount('#app')
