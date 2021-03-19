import Backend from './backend'

export default abstract class {
    constructor(url: string, backend: Backend) {
        this._url = url
        this._backend = backend
    }

    async load() {

    }

    async save() {

    }

    _url: string
    _backend: Backend
}
