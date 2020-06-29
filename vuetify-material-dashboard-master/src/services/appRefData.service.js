import ApiService from './api.service'

export default {
  async getIcapUsers () {
    const res = await ApiService.post('getIcapUsers', null)
    return res.data
  },

  async getIcapRefDataByRefName (refName) {
    const requestBody = {
      refName: refName,
    }
    const res = await ApiService.post('GET_CACHABLE_RF_DATA_INFO_BY_REF_NAME', requestBody)
    return res.data
  },

}
