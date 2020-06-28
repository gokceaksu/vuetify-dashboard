import API from '@/lib/API'

export default {

    state: {
      icapUsers: [],
    },
    getters: {
      icapUsers (state) {
        return state.icapUsers
      },
    },
    mutations: {
      setIcapUsers (state, users) {
        state.icapUsers = users.data
      },
    },
    actions: {
      async getIcapUsers (context) {
        const users = await API.getIcapUsers()
        context.commit('setIcapUsers', users)
      },
    },
}
