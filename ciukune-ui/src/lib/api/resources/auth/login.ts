import { Backend } from '../../backend'
import { Resource } from '../../resource'
import { getResource } from '../../resource-manager'

interface LoginResponse {
  access: string
  refresh: string
}

class LoginResource extends Resource {
  email: string | undefined
  password: string | undefined

  constructor(url: string, backend: Backend) {
    super(url, backend)
    this._loginBackend = backend
  }

  async refresh() {
    let response = await this._post<LoginResponse, {}>({
      email: this.email,
      password: this.password
    })

    if(!response) {
      return false;
    }

    this._loginBackend.setToken(response.access)
    return true
  }

  private _loginBackend: Backend
}

export function getLoginResource() {
  return getResource(LoginResource, 'auth/login')
}
