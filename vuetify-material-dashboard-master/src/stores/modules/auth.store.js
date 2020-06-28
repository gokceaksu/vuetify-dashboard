import UserService from '@/services/user.service'
import { TokenService } from '@/services/storage.service'

export default {

    state: {
      accessToken: TokenService.getToken(),
      loggedIn: false,
      userid: '',
      password: '',
    },
    getters: {
      loggedIn (state) {
        return state.loggedIn
      },
      token (state) {
        return state.accessToken
      },
    },
    mutations: {
      setAuth (state, token) {
        // state.token = token
        state.loggedIn = true
      },
    },
    actions: {
      async login (context, credentials) {
        const res = await UserService.login(credentials)
        return new Promise((resolve, reject) => {
          var success = false
          if (res.data) {
            success = Object.prototype.hasOwnProperty.call(res.data, 'success')
          }
          if (success) {
            context.commit('setAuth', true)
            console.log('Logged in')
            resolve(res)
          } else {
            console.log('Cannot login')
            reject(res)
          }
        })
      },
    },
}
