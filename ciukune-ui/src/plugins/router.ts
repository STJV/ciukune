import { App } from 'vue'
import { createRouter } from 'vue-router'
import { createWebHistory } from 'vue-router'
import { routes } from '../lib/router'


export default function install<T>(app: App<T>) {
  const router = createRouter({
    history: createWebHistory(),
    routes
  })
  app.use(router)
}
