import { App } from 'vue';
import CiuButton from '../components/controls/ciu-button.vue'
import CiuComponent from '../components/controls/ciu-component.vue'
import CiuInput from '../components/controls/ciu-input.vue'
import CiuLoadingOverlay from '../components/controls/ciu-loading-overlay.vue'
import CiuScreenCenter from '../components/controls/ciu-screen-center.vue'
import CiuSpinner from '../components/controls/ciu-spinner.vue'

export default function install<T>(app: App<T>) {
    app
      .component('CiuButton', CiuButton)
      .component('CiuComponent', CiuComponent)
      .component('CiuInput', CiuInput)
      .component('CiuLoadingOverlay', CiuLoadingOverlay)
      .component('CiuScreenCenter', CiuScreenCenter)
      .component('CiuSpinner', CiuSpinner)
}
