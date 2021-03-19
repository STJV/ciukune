import { App } from 'vue';
import CiuButton from '../components/controls/ciu-button.vue'
import CiuComponent from '../components/controls/ciu-component.vue'
import CiuInput from '../components/controls/ciu-input.vue'
import CiuScreenCenter from '../components/controls/ciu-screen-center.vue'

export default function install<T>(app: App<T>) {
    app.component('CiuButton', CiuButton)
    app.component('CiuComponent', CiuComponent)
    app.component('CiuInput', CiuInput)
    app.component('CiuScreenCenter', CiuScreenCenter)
}
