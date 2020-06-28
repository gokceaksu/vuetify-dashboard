import API from '@/lib/API'

export default {

    state: {
      token: localStorage.getItem('access_token') || null,
      loggedIn: false,
      userid: '',
      password: '',
    },
    getters: {
    },
    mutations: {
      setAuth (state, token) {
        // state.token = token
        state.loggedIn = true
      },
    },
    actions: {
      async login (context, credentials) {
        const res = await API.login(credentials)
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
