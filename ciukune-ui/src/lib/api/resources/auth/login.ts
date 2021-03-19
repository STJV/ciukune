import { Resource } from '../../resource'
import { getResource } from '../../resource-manager'

interface LoginResponse {
  token: string
}

class LoginResource extends Resource {
  email: string | undefined
  password: string | undefined

  async refresh() {
    let response = await this._post<LoginResponse, {}>({
      email: this.email,
      password: this.password
    })

    if(!response) {
      return;
    }

    console.log(response.token)
  }
}

export function getLoginResource() {
  return getResource(LoginResource, 'auth/login')
}
