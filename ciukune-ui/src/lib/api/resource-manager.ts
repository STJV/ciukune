import {reactive} from 'vue'
import Resource from './resource'
import Backend from './backend'

type ResourceConstructor<TResource extends Resource> = { new(url: string, backend: Backend) : TResource }

interface IResourceFactory {
  matches(url: string) : boolean;
  create(url: string, backend: Backend) : Resource;
}

class ResourceFactory<TResource extends Resource> implements IResourceFactory {
  constructor(routePattern: string, constructor: ResourceConstructor<TResource>) {
    this._routePattern = routePattern
    this._constructor = constructor
  }

  matches(url: string): boolean {
    return url.match(this._routePattern) != null
  }

  create(url: string, backend: Backend): TResource {
    return reactive(new this._constructor(url, backend)) as TResource
  }

  _routePattern: string;
  _constructor: ResourceConstructor<TResource>;
}

export default class ResourceManager {
  constructor() {
    this._backend = new Backend();
  }

  register<TResource extends Resource>(routePattern: string, constructor: ResourceConstructor<TResource>) {
    var factory = new ResourceFactory(routePattern, constructor)
    this._factories.push(factory)
  }

  get<TResource extends Resource>(url: string) : TResource {
    if(url in this._resources) {
      let resourceRef = this._resources[url]
      let resource = resourceRef.deref()
      if(resource) {
        return resource as TResource
      }
    }

    for(let factory of this._factories) {
      if(factory.matches(url)) {
        let concreteFactory = factory as ResourceFactory<TResource>
        let resource = concreteFactory.create(url, this._backend)
        this._resources[url] = new WeakRef(resource)
        return resource
      }
    }

    throw "";
  }

  _resources: Record<string, WeakRef<Resource>> = {};
  _factories: IResourceFactory[] = [];
  _backend: Backend;
}
