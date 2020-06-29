import ApiService from './api.service'
import { TokenService, SessionService } from './storage.service'

export default {
  async login (credentials) {
    const requestBody = {
      userId: credentials.userid,
      password: credentials.password,
      // language: 'tr',
    }
    const response = await ApiService.post('simpleLogin', requestBody)
    return response.data
  },

  logout () {
    TokenService.removeToken()
    TokenService.removeRefreshToken()
    ApiService.removeHeader()
    SessionService.removeSession()
  },
}
