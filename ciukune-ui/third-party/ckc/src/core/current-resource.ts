import { InjectionKey } from 'vue'
import { Resource } from '../../lib/api/resource'
import { inject } from 'vue'
import { provide } from 'vue'

const CurrentResourceKey: InjectionKey<Resource> = Symbol()

export function setCurrentResource(resource: Resource) {
  provide(CurrentResourceKey, resource)
}

export function getCurrentResource() {
    let resource = inject(CurrentResourceKey)
    if(!resource) {
      throw new Error("No resource provided.")
    }
    return resource
}
