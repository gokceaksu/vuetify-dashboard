import Vue from 'vue'
import Vuex from 'vuex'

import ui from '@/stores/modules/ui'
import auth from '@/stores/modules/auth'
import appRefData from '@/stores/modules/appRefData'

Vue.use(Vuex)

export default new Vuex.Store({

  modules: {
    ui,
    auth,
    appRefData,
  },
})
