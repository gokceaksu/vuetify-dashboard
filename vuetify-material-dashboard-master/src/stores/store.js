import Vue from 'vue'
import Vuex from 'vuex'

import UIStore from '@/stores/modules/uiStore'
import User from '@/stores/modules/user'

Vue.use(Vuex)

export default new Vuex.Store({

  modules: {
    ui: UIStore,
    user: User,
  },
})
