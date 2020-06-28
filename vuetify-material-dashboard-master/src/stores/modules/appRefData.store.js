import AppRefDataService from '@/services/appRefData.service'

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
        const users = await AppRefDataService.getIcapUsers()
        context.commit('setIcapUsers', users)
      },
    },
}
