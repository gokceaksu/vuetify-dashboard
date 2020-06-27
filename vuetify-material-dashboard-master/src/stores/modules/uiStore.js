import API from '@/lib/API'

export default {

    state: {
      barColor: 'rgba(0, 0, 0, .8), rgba(0, 0, 0, .8)',
      barImage: 'https://demos.creative-tim.com/material-dashboard/assets/img/sidebar-1.jpg',
      drawer: null,
      icapUsers: [],
    },
    getters: {
      icapUsers (state) {
        return state.icapUsers
      },
    },
    mutations: {
      SET_BAR_IMAGE (state, payload) {
        state.barImage = payload
      },
      SET_DRAWER (state, payload) {
        state.drawer = payload
      },
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
