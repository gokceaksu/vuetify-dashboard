import Vue from 'vue'
import Vuex from 'vuex'

import ui from '@/stores/modules/ui.store'
import auth from '@/stores/modules/auth.store'
import appRefData from '@/stores/modules/appRefData.store'

Vue.use(Vuex)

const store = new Vuex.Store({

  modules: {
    ui,
    auth,
    appRefData,
  },
})

export default store
