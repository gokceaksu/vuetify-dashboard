import ApiService from './api.service'
import { TokenService } from './storage.service'

export default {
  async login (credentials) {
    const requestBody = {
      userid: credentials.userid,
      password: credentials.password,
      language: 'tr',
    }
    const response = await ApiService.post('login', requestBody)
    // TokenService.saveToken(response.data.token)
    return response.data
  },

  logout () {
    TokenService.removeToken()
    TokenService.removeRefreshToken()
    ApiService.removeHeader()
  },
}
