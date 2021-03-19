/* Copyright © 2021 STJV contact@stjv.com

  This work is free. You can redistribute it and/or modify it under the
  terms of the Do What The Fuck You Want To Public License, Version 2,
  as published by Sam Hocevar. See the COPYING file for more details.

  ResourceManager is a singleton injected through Vue, that keeps weak reference on resources, and return them
  when their URL is asked twice.
*/
import { App } from 'vue'
import { Backend } from './backend'
import { InjectionKey } from 'vue'
import { Resource } from './resource'
import { inject } from 'vue'
import { reactive } from 'vue'

type ResourceConstructor<TResource extends Resource> = { new(url: string, backend: Backend) : TResource }

class ResourceManager {
  constructor() {
    this._backend = new Backend()
  }

  get<TResource extends Resource>(constructor: ResourceConstructor<TResource>, url: string) : TResource {
    if(url in this._resources) {
      let resourceRef = this._resources[url]
      let resource = resourceRef.deref()
      if(resource) {
        return resource as TResource
      }
    }

    let resource = reactive(new constructor(url, this._backend))
    this._resources[url] = new WeakRef(resource)
    return resource as TResource
  }

  _resources: Record<string, WeakRef<Resource>> = {}
  _backend: Backend
}

const ResourceManagerKey : InjectionKey<ResourceManager> = Symbol()

export function getResource<TResource extends Resource>(constructor: ResourceConstructor<TResource>, url: string) {
  let manager = inject(ResourceManagerKey)
  if(!manager) {
    throw new Error("No resource manager available, please install it in Vue JS application through the resource-manager.ts/install method")
  }
  return manager.get(constructor, url)
}

export function install<T>(app: App<T>) {
  app.provide(ResourceManagerKey, new ResourceManager())
}
