import UserService from '@/services/user.service'
import { TokenService } from '@/services/storage.service'
import { SessionService } from '../../services/storage.service'

export default {

    state: {
      accessToken: TokenService.getToken(),
      loggedIn: false,
      authenticationError: '',
    },
    getters: {
      loggedIn (state) {
        return state.loggedIn
      },
      token (state) {
        return state.accessToken
      },
      authenticationError (state) {
        return state.authenticationError
      },
    },
    mutations: {
      setAuth (state, loggedIn) {
        state.loggedIn = loggedIn
      },
      setErrorMessage (state, errorMessage) {
        state.authenticationError = errorMessage
      },
    },

    actions: {
      async login (context, credentials) {
        const res = await UserService.login(credentials)
        return new Promise((resolve, reject) => {
          var loginFailed = Object.prototype.hasOwnProperty.call(res, 'error')

          if (loginFailed) {
            context.commit('setErrorMessage', res.messages[0].text)
            reject(res)
          } else {
            context.commit('setAuth', true)
            TokenService.saveToken(res.data.authorizationData.session.token)
            SessionService.saveSession(res.data.authorizationData.session)
            resolve(res)
          }
        })
      },

      async logout (context) {
        const res = await UserService.logout()
        return new Promise((resolve, reject) => {
          // logout success
          if (res) {
            context.commit('setAuth', false)
            TokenService.removeToken()
            SessionService.removeSession()
            resolve(res)
          } else {
            reject(res)
          }
        })
      },
      clearErrorMessage (context) {
        context.commit('setErrorMessage', '')
      },
    },
}
