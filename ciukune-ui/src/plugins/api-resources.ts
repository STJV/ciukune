import { install } from '../lib/api/resource-manager'
import CiuResourceForm from '../components/api/ciu-resource-form.vue'
import CiuResourceInput from '../components/api/ciu-resource-input.vue'
import { App } from 'vue'


export default function<T>(app: App<T>) {
    install(app)
    app.component('CiuResourceForm', CiuResourceForm)
    app.component('CiuResourceInput', CiuResourceInput)
}
