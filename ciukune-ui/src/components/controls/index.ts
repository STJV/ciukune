import { App } from 'vue';
import CiuButton from './ciu-button.vue'
import CiuComponent from './ciu-component.vue'
import CiuInput from './ciu-input.vue'
import CiuScreenCenter from './ciu-screen-center.vue'

export function registerControls<T>(app: App<T>) {
    app.component('CiuButton', CiuButton)
    app.component('CiuComponent', CiuComponent)
    app.component('CiuInput', CiuInput)
    app.component('CiuScreenCenter', CiuScreenCenter)
}