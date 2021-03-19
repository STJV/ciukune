import axios from 'axios';
import { AxiosInstance } from 'axios'
import { Method } from 'axios'

const _AUTH_TOKEN_STORAGE_KEY = 'ciu_auth_token';
const _AUTHORIZATION_HEADER_KEY = 'Authorization';

export default class {
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

  async query(url: string, method: Method, data: any) {
    let response = await axios.request({
      data: data,
      method: method,
      url: url,
    })

    if(response.status >= 500) {
      // TODO : Global error handling.
      return undefined;
    }
  
    return response;
  }
  
  setToken(token: string) {
    localStorage.setItem(_AUTH_TOKEN_STORAGE_KEY, token)
    this._refreshAuthHeaders();
  }

  clearToken() {
    localStorage.removeItem(_AUTH_TOKEN_STORAGE_KEY)
    this._refreshAuthHeaders();
  }

  _refreshAuthHeaders() {
    let token = localStorage.getItem(_AUTH_TOKEN_STORAGE_KEY)
    let defaultHeaders = this._instance.defaults.headers

    if(token) {
      defaultHeaders[_AUTHORIZATION_HEADER_KEY] = "Bearer " + token
    }
    else if(_AUTHORIZATION_HEADER_KEY in defaultHeaders) {
      delete defaultHeaders[_AUTHORIZATION_HEADER_KEY];
    }
  }

  _instance: AxiosInstance;
}
