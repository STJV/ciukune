import CiuApiErrors from './components/ciu-api-errors.vue'
import CiuApiForm from './components/ciu-api-form.vue'
import CiuApiInput from './components/ciu-api-input.vue'
import CiuButton from './components/ciu-button.vue'
import CiuComponent from './components/ciu-component.vue'
import CiuInput from './components/ciu-input.vue'
import CiuLoadingOverlay from './components/ciu-loading-overlay.vue'
import CiuScreenCenter from './components/ciu-screen-center.vue'
import CiuSpinner from './components/ciu-spinner.vue'
import CiuTextField from './components/ciu-text-field.vue'
import { App } from 'vue';
import { installResourceManager } from './core/resource-manager'
import './assets/styles/_index.css'

export default function install<T>(app: App<T>) {
    installResourceManager(app)
    app
      .component('CiuApiErrors', CiuApiErrors)
      .component('CiuApiForm', CiuApiForm)
      .component('CiuApiInput', CiuApiInput)
      .component('CiuButton', CiuButton)
      .component('CiuComponent', CiuComponent)
      .component('CiuInput', CiuInput)
      .component('CiuLoadingOverlay', CiuLoadingOverlay)
      .component('CiuScreenCenter', CiuScreenCenter)
      .component('CiuSpinner', CiuSpinner)
      .component('CiuTextField', CiuTextField)
}

export { Resource } from './core/resource'
export { Backend } from './core/backend'
export { getResource } from './core/resource-manager'
export { getCurrentResource } from './core/current-resource'
