import { install } from '../lib/api/resource-manager'
import CiuResourceErrors from '../components/api/ciu-resource-errors.vue'
import CiuResourceForm from '../components/api/ciu-resource-form.vue'
import CiuResourceInput from '../components/api/ciu-resource-input.vue'
import { App } from 'vue'


export default function<T>(app: App<T>) {
    install(app)
    app.component('CiuResourceErrors', CiuResourceErrors)
    app.component('CiuResourceForm', CiuResourceForm)
    app.component('CiuResourceInput', CiuResourceInput)
}
