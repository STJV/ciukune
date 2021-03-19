import { install } from '../lib/api/resource-manager'
import ResourceForm from '../components/api/resource-form.vue'
import { App } from 'vue'


export default function<T>(app: App<T>) {
    install(app)
    app.component('ResourceForm', ResourceForm)
}
