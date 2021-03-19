/* Copyright © 2021 STJV contact@stjv.com

  This work is free. You can redistribute it and/or modify it under the
  terms of the Do What The Fuck You Want To Public License, Version 2,
  as published by Sam Hocevar. See the COPYING file for more details.

  Resource is the base class for interactions with the rest api.
*/
import { Backend } from './backend'
import { Method } from 'axios'

type ApiResponse<TResponse> = TResponse | Record<string, string>

export abstract class Resource {
  constructor(url: string, backend: Backend) {
    this._url = url
    this._backend = backend
  }

  get error() { return this._error }
  get fieldsErrors() { return this._fieldsErrors }

  async _get<TResponse>() : Promise<TResponse | undefined> {
    return await this._query<TResponse, void>('GET', undefined)
  }

  async _post<TResponse, TData>(data: TData) : Promise<TResponse | undefined> {
    return await this._query<TResponse, TData>('POST', data)
  }

  async _query<TResponse, TData>(method: Method, data: TData) {
    let response = await this._backend.query<ApiResponse<TResponse>>(this._url, method, data)
    if(!response) {
      return undefined
    }

    if(response.status < 400) {
      return response.data as TResponse
    }

    let errors = response.data as Record<string, string>
    for(let key in errors) {
      let message = errors[key]
      if(key == 'details') {
        this._error = message
      }
      else {
        this._fieldsErrors[key] = message
      }
    }
  }

  _fieldsErrors: Record<string, string> = {}
  _error: string | undefined
  _url: string
  _backend: Backend
}
