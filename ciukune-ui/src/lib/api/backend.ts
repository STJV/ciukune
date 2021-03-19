/* Copyright © 2021 STJV contact@stjv.com

  This work is free. You can redistribute it and/or modify it under the
  terms of the Do What The Fuck You Want To Public License, Version 2,
  as published by Sam Hocevar. See the COPYING file for more details.

  Backend is a light layer above axios, handling JWT authentication and 500-errors interception for displaying
  or logging without having to handle it in client code.
*/
import axios from 'axios'
import { AxiosInstance } from 'axios'
import { Method } from 'axios'

const _AUTH_TOKEN_STORAGE_KEY = 'ciu_auth_token'
const _AUTHORIZATION_HEADER_KEY = 'Authorization'

export class Backend {
  constructor() {
    this._instance = axios.create({
      baseURL: '/api',
      validateStatus () { return true },
      withCredentials: true,
      xsrfCookieName: 'csrf_access_token',
      xsrfHeaderName: 'X-CSRF-TOKEN',
    })
    this._refreshAuthHeaders()
  }

  async query<TResponse>(url: string, method: Method, data: any) {
    let response = await axios.request<TResponse>({
      data: data,
      method: method,
      url: url,
      baseURL: '/api',
      validateStatus () { return true },
      withCredentials: true,
      xsrfCookieName: 'csrf_access_token',
      xsrfHeaderName: 'X-CSRF-TOKEN',
    })

    if(response.status >= 500) {
      // TODO : Global error handling.
      return undefined
    }
  
    return response
  }
  
  setToken(token: string) {
    localStorage.setItem(_AUTH_TOKEN_STORAGE_KEY, token)
    this._refreshAuthHeaders()
  }

  clearToken() {
    localStorage.removeItem(_AUTH_TOKEN_STORAGE_KEY)
    this._refreshAuthHeaders()
  }

  _refreshAuthHeaders() {
    let token = localStorage.getItem(_AUTH_TOKEN_STORAGE_KEY)
    let defaultHeaders = this._instance.defaults.headers

    if(token) {
      defaultHeaders[_AUTHORIZATION_HEADER_KEY] = "Bearer " + token
    }
    else if(_AUTHORIZATION_HEADER_KEY in defaultHeaders) {
      delete defaultHeaders[_AUTHORIZATION_HEADER_KEY]
    }
  }

  _instance: AxiosInstance
}
