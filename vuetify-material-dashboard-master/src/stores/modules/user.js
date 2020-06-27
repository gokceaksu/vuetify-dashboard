import API from '@/lib/API'

export default {

    state: {
      token: localStorage.getItem('access_token') || null,
      username: '',
      password: '',
    },
    getters: {
    },
    mutations: {
      setAuth (state, token) {
        // state.icapUsers = users.data
      },
    },
    actions: {
      login (context, credentials) {
        API.login(credentials)
        // context.commit('setAuth', users)
      },
    },
}
