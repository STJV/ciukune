import {Component} from 'vue';

export class HookManager {
  _index: Record<string, Component[]> = {}

  /** Register a custom component to be displayed at the given ui hook. */
  register(hookName: string, component: Component) {
    if(!(hookName in this._index)) {
        this._index[hookName] = []
    }

    this._index[hookName].push(component);
  }

  get(hookName: string): Component[] {
    if(!(hookName in this._index)) {
        this._index[hookName] = []
    }

    return this._index[hookName];
  }
}
